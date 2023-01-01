import { Bullet, DESKTOP_SCALING, Entity, GameObject, vectorAngle, vectorDistance, vectorMag, vectorSetPolar } from "./ecs";
import { model, sfx } from "..";
import enemyImage from "../assets/images/enemyship.png";
import enemybolt from "../assets/images/enemyblaster.png";
import { pathsToModuleNameMapper } from "ts-jest";
import { HUDparameters, updateHudData, resetGame, clearEnemySpawnFlag, gameObjects } from "../states/game";
import {
  Intersection,
  Physics,
  Stadium,
  Vector,
  Entity as PhysicsEntity,
  CollidingResolution,
  Rect,
} from "@peasy-lib/peasy-physics";

// Load Chance
let Chance = require("chance");
let chance = new Chance();
let playerDetected: boolean = false;
let enemyPatrolling: boolean = false;
let patrolDestination: Vector;
let vAttack: Vector | null = null;
let thetaAttack: number | null = null;
let attackAngle: number | null = null;
let newHeading: Vector | null = null;
let newAngle: number | null = null;

let ammoTimerBurnoff: number = 6;
let ammoTimerBurnoffTik: number = 0;

const MAX_PLAYER_SPEED = 100;
const MAX_PLAYER_SPEED_MOBILE = 100;
const THRUSTFORCE = 20;

enum enemyAIStates {
  IDLE = "IDLE",
  SCANNING = "SCANNING",
  ENGAGING_PLAYER = "ATTACK",
  PATROLLING = "PATROL",
}

enum attackStates {
  IDLE = "IDLE",
  STOPPNG = "STOPPING",
  TRACKING = "TRACKING",
  TURNING = "TURNING",
  FIRING = "FIRING",
  MOVING = "MOVING",
}

enum patrollingStates {
  IDLE = "IDLE",
  WAYPOINT = "WAYPOINT",
  TURNING = "TURNING",
  MOVING = "MOVING",
  NAVIGATING = "NAVIGATING",
  STOPPING = "STOPPING",
}

export class Enemy extends GameObject {
  health: number;
  reward: number;
  texture: string = enemyImage;
  enemyState: enemyAIStates = enemyAIStates.IDLE;
  attackState: attackStates = attackStates.IDLE;
  patrolState: patrollingStates = patrollingStates.IDLE;
  mass: number = 5;
  ammo: number = 24;
  ammoCounter: number = 0;
  thrust: boolean = false;
  reversethrust: boolean = false;
  screenw: number;
  screenh: number;
  stateTik: number = 0;
  travelAngle: number = 0;
  centerpoint = new Vector(0, 0);
  invincibleTimer: number = 0;
  shape: Stadium;
  entity: any;

  constructor(w: number, h: number, engine: Physics) {
    super("Enemy");
    this.type = "ENEMY";
    this.health = 10;
    this.reward = 50;
    this.screenh = h;
    this.screenw = w;
    let tempSize = 0;

    if (model.isMobile) this.mobileScaling = "0.6";
    else this.mobileScaling = DESKTOP_SCALING;

    if (w <= h) tempSize = w / 13;
    else tempSize = h / 13;
    this.size.add(new Vector(tempSize, tempSize), true);
    this.halfsize.x = this.size.x / 2;
    this.halfsize.y = this.size.y / 2;
    this.radius = this.size.x / 2;
    //find starting spot
    const tempSide = chance.integer({ min: 0, max: 3 });
    let tempX, tempY;
    switch (tempSide) {
      case 0:
        //left side
        tempX = 0;
        tempY = chance.integer({ min: 0, max: h - this.size.y });
        break;
      case 1:
        //top side
        tempX = chance.integer({ min: 0, max: w - this.size.x });
        tempY = 0;
        break;
      case 2:
        //right side
        tempX = w - this.size.x;
        tempY = chance.integer({ min: 0, max: h - this.size.y });
        break;
      case 3:
        //bottom side
        tempX = chance.integer({ min: 0, max: w - this.size.x });
        tempY = h - this.size.y;
        break;
    }
    this.position.add(new Vector(tempX, tempY), true);

    /**************************** */
    //PEASY PHYSICS
    //**************************** */

    //this.shape = new Stadium(new Vector(0, 0), new Vector(this.size.x, this.size.y * 0.6), "horizontal", 90);
    this.entity = new Entity(this.position, 0);
    this.entity.shapes = [
      { position: new Vector(0, 0), size: new Vector(this.size.x, this.size.y * 0.6), type: ["player"] },
    ];
    this.entity.forces = [];
    this.entity.maxSpeed = 200;
    this.entity.color = "yellow";
    this.PhysicsEntity = Physics.addEntities(this.entity)[0];
    this.PhysicsEntity.entity = this;
    this.PhysicsEntity.mass = this.mass;
    this.PhysicsEntity.colliding = (entity: PhysicsEntity, intersection: Intersection): CollidingResolution => {
      if ((entity.entity as GameObject).type == "ASTEROID") {
        this.enemyState = enemyAIStates.IDLE;
        sfx.play("ship2asteroid");
        this.health -= 1;
        this.invincibleTimer = 3;
        if (this.health <= 0) {
          sfx.play("astBoom");
          clearEnemySpawnFlag();
          this.destroy();
        }
      } else if ((entity.entity as GameObject).type == "BULLET") {
        this.enemyState = enemyAIStates.IDLE;
        sfx.play("targetHit");
        this.health -= 1;
        (entity.entity as Bullet).destroy();
        if (this.health <= 0) {
          sfx.play("astBoom");
          clearEnemySpawnFlag();
          updateHudData(HUDparameters.SCORE, this.reward);
          model.gameObjects[0].exp += this.reward;
          updateHudData(HUDparameters.EXPERIENCE, this.reward);
          model.gameObjects[0].ammoBonus();
          this.destroy();
        } else if ((entity.entity as GameObject).type == "PLAYER") {
          this.enemyState = enemyAIStates.IDLE;
          sfx.play("targetHit");
        }
      }
      return "collide";
    };
  }

  static spawn(Physics: any) {
    model.gameObjects.push(new Enemy(model.screenwidth, model.screenheight, Physics));
  }

  angle2rad(angle: number): number {
    return angle * (Math.PI / 180);
  }

  destroy() {
    Physics.removeEntities([this.PhysicsEntity]);
    const removeIndex = model.gameObjects.findIndex(ent => {
      return ent.id == this.id;
    });
    model.gameObjects.splice(removeIndex, 1);
  }

  // LINE/LINE collision
  lineLine(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, x4: number, y4: number): boolean {
    // calculate the distance to intersection point
    const uA = ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) / ((y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1));
    const uB = ((x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3)) / ((y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1));
    // if uA and uB are between 0-1, lines are colliding
    if (uA >= 0 && uA <= 1 && uB >= 0 && uB <= 1) return true;
    return false;
  }

  lineRect(x1: number, y1: number, x2: number, y2: number, rx: number, ry: number, rw: number, rh: number): boolean {
    // check if the line has hit any of the rectangle's sides
    // uses the Line/Line function below
    const left = this.lineLine(x1, y1, x2, y2, rx, ry, rx, ry + rh);
    const right = this.lineLine(x1, y1, x2, y2, rx + rw, ry, rx + rw, ry + rh);
    const top = this.lineLine(x1, y1, x2, y2, rx, ry, rx + rw, ry);
    const bottom = this.lineLine(x1, y1, x2, y2, rx, ry + rh, rx + rw, ry + rh);
    // if ANY of the above are true, the line
    // has hit the rectangle
    if (left || right || top || bottom) return true;
    return false;
  }

  collisionCheck(sX: number, sY: number, dX: number, dY: number): boolean {
    return this.lineRect(sX, sY, dX, dY, this.position.x, this.position.y, this.size.x, this.size.y);
  }

  ang2Rad = (a: number): number => {
    return a * (Math.PI / 180);
  };

  scanField = (): boolean => {
    /*************************************************** */
    // PLAYER DETECTION
    /*************************************************** */
    const detectionVector: Vector = new Vector(this.screenw / 4, this.screenh / 4);
    const detectionMagnitude = vectorMag(detectionVector); //detectionVector.getMag();
    const playerDistance = model.gameObjects[0].position.getDistance(this.position);
    console.log("scanning for player: ", playerDistance, detectionMagnitude);
    if (playerDistance < detectionMagnitude) {
      //player is close enough to detect
      playerDetected = true;
      this.enemyState = enemyAIStates.ENGAGING_PLAYER;
      this.attackState = attackStates.STOPPNG;
      return true;
    }

    return false;
  };

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  turnLeft() {
    this.PhysicsEntity.orientation -= 3;
    this.angle = this.PhysicsEntity.orientation;
  }

  turnRight() {
    this.PhysicsEntity.orientation += 3;
    this.angle = this.PhysicsEntity.orientation;
  }

  async update(updatetime) {
    //****************************************** */
    //burn off invincibility
    //***************************************** */
    if (this.invincibleTimer > 0) {
      this.invincibleTimer -= updatetime;
    } else this.invincibleTimer = 0;

    //****************************************** */
    //ammo regeneration
    //****************************************** */
    if (this.ammo < 25) {
      this.ammoCounter += updatetime;

      if (this.ammoCounter >= 1.5) {
        console.log("regenerating ammo");
        this.ammo += 1;
        this.ammoCounter = 0;
      }
    }

    //****************************************** */
    //physics update
    //****************************************** */

    //set thrust
    if (this.thrust) {
      //does velocity exceed max speed
      const tempX = THRUSTFORCE * Math.cos(this.angle2rad(this.PhysicsEntity.orientation));
      const tempY = THRUSTFORCE * Math.sin(this.angle2rad(this.PhysicsEntity.orientation));
      const dir = new Vector(tempX, tempY);

      this.PhysicsEntity.addForce({
        name: "thrust",
        direction: dir,
        duration: 0,
        magnitude: 500,
      });
    }
    if (this.reversethrust) {
      const currentAngle = this.PhysicsEntity.orientation;
      let reverseAngle = currentAngle + 180;

      const tempX = THRUSTFORCE * Math.cos(this.angle2rad(reverseAngle));
      const tempY = THRUSTFORCE * Math.sin(this.angle2rad(reverseAngle));
      const dir = new Vector(tempX, tempY);

      this.PhysicsEntity.addForce({
        name: "reverse",
        direction: dir,
        duration: 0,
        magnitude: 500,
      });
    }

    this.position.x = this.PhysicsEntity.position.x;
    this.position.y = this.PhysicsEntity.position.y;
    this.centerpoint.x = this.position.x + this.size.x / 2;
    this.centerpoint.y = this.position.y + this.size.y / 2;

    //check for screen collision
    if (this.position.x > model.screenwidth) {
      this.position.x = -10;
      this.PhysicsEntity.position.x = -10;
    }
    if (this.position.x < -11) {
      this.position.x = model.screenwidth - 20;
      this.PhysicsEntity.position.x = model.screenwidth - 20;
    }
    if (this.position.y < -11) {
      this.position.y = model.screenheight - 20;
      this.PhysicsEntity.position.y = model.screenheight - 20;
    }
    if (this.position.y > model.screenheight) {
      this.position.y = -10;
      this.PhysicsEntity.position.y = -10;
    }

    /**************************************************
     * inside each state case
     * manage behavior first
     * test for need to switch to different state
     **************************************************/

    switch (this.enemyState) {
      //idle case - do nothing for a delay
      //then jump into scannning
      case enemyAIStates.IDLE:
        this.stateTik += 1;
        if (this.stateTik >= 10) {
          this.enemyState = enemyAIStates.SCANNING;
          playerDetected = false;
          this.stateTik = 0;
        }
        break;
      case enemyAIStates.SCANNING:
        this.stateTik += 1;

        //check collision flags
        //if set, AND scanning timer complete, change state
        if (this.stateTik >= 10 && playerDetected) {
          if (playerDetected) this.enemyState = enemyAIStates.ENGAGING_PLAYER;
          playerDetected = false;
          this.stateTik = 0;
          break;
        } else if (this.stateTik >= 10 && !playerDetected) {
          //no collisions, and scanning burnoff finished
          this.enemyState = enemyAIStates.PATROLLING;
          playerDetected = false;
          this.stateTik = 0;
          break;
        }

        //If you've gotten this far, no collision detected yet
        this.scanField();

        break;
      case enemyAIStates.ENGAGING_PLAYER:
        //turn to player, fire, and move closer
        switch (this.attackState) {
          case attackStates.IDLE:
            this.attackState = attackStates.STOPPNG;
            this.patrolState = patrollingStates.IDLE;
            break;
          case attackStates.STOPPNG:
            console.log("slowing down");
            this.patrolState = patrollingStates.IDLE;

            //this.velocity.getMag()
            while (this.PhysicsEntity.speed > 3) {
              this.PhysicsEntity.speed -= 1;
              await this.sleep(25);
            }
            this.PhysicsEntity.speed = 0;
            this.attackState = attackStates.TRACKING;

            break;
          case attackStates.TRACKING:
            vAttack = this.position.subtract(model.gameObjects[0].position);
            console.log("TRACKNIG");
            console.log("this.position", this.position.x, this.position.y);
            console.log("player position", model.gameObjects[0].position.x, model.gameObjects[0].position.y);
            console.log("attack vector", vAttack.x, vAttack.y);
            thetaAttack = vectorAngle(vAttack); //vAttack.getAngle();
            attackAngle = thetaAttack;
            console.log("new angle: ", thetaAttack);

            this.attackState = attackStates.TURNING;
            break;
          case attackStates.TURNING:
            console.log("TURNING");

            if (this.PhysicsEntity.orientation != attackAngle) {
              //sanitize this.angle
              if (this.PhysicsEntity.orientation < 0 || this.PhysicsEntity.orientation >= 360) {
                while (this.PhysicsEntity.orientation < 0) {
                  this.PhysicsEntity.orientation += 360;
                  this.angle = this.PhysicsEntity.orientation;
                }
                while (this.PhysicsEntity.orientation >= 360) {
                  this.PhysicsEntity.orientation -= 360;
                  this.angle = this.PhysicsEntity.orientation;
                }
              }
              //sanitize attackAngle
              if (attackAngle < 0 || attackAngle >= 360) {
                while (attackAngle < 0) attackAngle += 360;
                while (attackAngle >= 360) attackAngle -= 360;
              }

              const alpha = attackAngle - this.angle;
              const beta = attackAngle - this.angle + 360;
              const gamma = attackAngle - this.angle - 360;

              let trackingIndex: number | null = 0;
              const reducerArray = [alpha, beta, gamma];

              reducerArray.reduce((accum, current, index) => {
                if (Math.abs(accum) < Math.abs(current)) return accum;
                trackingIndex = index;
                return current;
              });

              let turndir = "CW";

              if (reducerArray[trackingIndex] < 0) turndir = "CCW";

              if (alpha <= 2.6 && alpha >= -2.6) {
                this.attackState = attackStates.FIRING;
                this.stateTik = 0;
                break;
              }
              if (turndir == "CW") {
                this.turnRight();
                break;
              } else {
                this.turnLeft();
                break;
              }
            } else {
              this.stateTik = 0;
              this.attackState = attackStates.FIRING;
            }
            break;

          case attackStates.FIRING:
            if (ammoTimerBurnoffTik < ammoTimerBurnoff) {
              ammoTimerBurnoffTik += 1;
              break;
            } else {
              ammoTimerBurnoffTik = 0;
            }
            if (this.ammo > 0) {
              sfx.play("enemyfire");
              model.gameObjects.push(new enemyBullet(new Vector(this.position.x, this.position.y), this.angle, this.size));
              this.ammo -= 1;
              console.log("bullets remaining: ", this.ammo);
              this.attackState = attackStates.TRACKING;
              this.enemyState = enemyAIStates.SCANNING;
            } else {
              this.attackState = attackStates.TRACKING;
              this.enemyState = enemyAIStates.SCANNING;
            }
            break;
          case attackStates.MOVING:
            this.stateTik += 1;
            console.log("ATTACK NOVE");
            this.thrust = true;
            this.travelAngle = this.angle;
            if (this.stateTik >= 5) {
              this.stateTik = 0;
              this.thrust = false;
              this.attackState = attackStates.IDLE;
              this.enemyState = enemyAIStates.SCANNING;
              vAttack = null;
              thetaAttack = null;
            }
            break;
        }
        break;
      case enemyAIStates.PATROLLING:
        switch (this.patrolState) {
          case patrollingStates.IDLE:
            this.stateTik += 1;
            if (this.stateTik >= 2) {
              this.stateTik = 0;
              this.patrolState = patrollingStates.WAYPOINT;
            }
            break;
          case patrollingStates.WAYPOINT:
            //pick random 'other' quadrant in field, start heading toward it

            /**********************************************
             * determining the vector of where we're going
             **********************************************/
            if (enemyPatrolling) this.patrolState = patrollingStates.NAVIGATING;
            let currentQuadrant: number;
            if (this.position.x >= this.screenw / 2) {
              //right side
              if (this.position.y >= this.screenh / 2) currentQuadrant = 4;
              else currentQuadrant = 2;
            } else {
              //left side
              if (this.position.y >= this.screenh / 2) currentQuadrant = 3;
              else currentQuadrant = 1;
            }
            const quadrantArray = [1, 2, 3, 4].filter(q => q != currentQuadrant);
            const targetQuadrant = chance.pickone(quadrantArray);
            console.log("screensize: ", this.screenw, this.screenh);
            console.log("enemy position: ", this.position.x, this.position.y);
            const vectorMap = {
              1: new Vector(0.25 * this.screenw, 0.25 * this.screenh),
              2: new Vector(0.75 * this.screenw, 0.25 * this.screenh),
              3: new Vector(0.25 * this.screenw, 0.75 * this.screenh),
              4: new Vector(0.75 * this.screenw, 0.75 * this.screenh),
            };
            const targetVector = vectorMap[targetQuadrant];
            patrolDestination = targetVector;
            const adjustedPosition = this.position.add(new Vector(this.size.x / 2, this.size.y / 2), false);
            newHeading = adjustedPosition.subtract(targetVector);
            console.log("new heading", newHeading.x, newHeading.y);
            //newAngle = newHeading.getAngle();
            newAngle = vectorAngle(newHeading);
            console.log("newangle: ", newAngle);
            this.patrolState = patrollingStates.TURNING;
            enemyPatrolling = true;
            console.log(
              `waypoint determined: qaud: ${targetQuadrant} target V: ${targetVector.x}, ${targetVector.y}, new heading/angle: ${newHeading.x},${newHeading.y} /angle: ${newAngle}`
            );
            break;

          case patrollingStates.TURNING:
            if (this.PhysicsEntity.orientation != attackAngle) {
              //sanitize this.angle
              if (this.PhysicsEntity.orientation < 0 || this.PhysicsEntity.orientation >= 360) {
                while (this.PhysicsEntity.orientation < 0) {
                  this.PhysicsEntity.orientation += 360;
                  this.angle = this.PhysicsEntity.orientation;
                }
                while (this.PhysicsEntity.orientation >= 360) {
                  this.PhysicsEntity.orientation -= 360;
                  this.angle = this.PhysicsEntity.orientation;
                }
              }
              //sanitize attackAngle
              if (attackAngle < 0 || attackAngle >= 360) {
                while (attackAngle < 0) attackAngle += 360;
                while (attackAngle >= 360) attackAngle -= 360;
              }
              console.log("in turning: new angle/this.angle: ", newAngle, this.angle);
              const alpha = newAngle - this.angle;
              const beta = newAngle - this.angle + 360;
              const gamma = newAngle - this.angle - 360;

              let trackingIndex: number | null = 0;
              const reducerArray = [alpha, beta, gamma];

              reducerArray.reduce((accum, current, index) => {
                if (Math.abs(accum) < Math.abs(current)) return accum;
                trackingIndex = index;
                return current;
              });

              let turndir = "CW";
              console.log("turnings : ", turndir);
              if (reducerArray[trackingIndex] < 0) turndir = "CCW";
              console.log(alpha);
              if (alpha <= 2.6 && alpha >= -2.6) {
                this.patrolState = patrollingStates.MOVING;
                this.stateTik = 0;
                break;
              }
              if (turndir == "CW") {
                this.turnRight();
                break;
              } else {
                this.turnLeft();
                break;
              }
            } else {
              this.stateTik = 0;
              this.patrolState = patrollingStates.MOVING;
            }

            break;
          case patrollingStates.MOVING:
            this.stateTik += 1;
            if (this.stateTik >= 100) {
              this.stateTik = 0;
              this.patrolState = patrollingStates.WAYPOINT;
            }
            console.log("MOVING");
            this.thrust = true;
            this.travelAngle = this.angle;

            if (vectorMag(this.velocity) >= MAX_PLAYER_SPEED) {
              this.patrolState = patrollingStates.NAVIGATING;
              this.thrust = false;
              this.stateTik = 0;
            }

            break;
          case patrollingStates.NAVIGATING:
            this.stateTik += 1;

            if (this.stateTik >= 3) {
              console.log("scanning");
              this.scanField();
              this.stateTik = 0;
              break;
            }

            console.log("navigating");
            this.thrust = false;
            this.travelAngle = this.angle;
            //get distance to quadrant
            const distance = vectorDistance(this.position, patrolDestination); //this.position.getDistance(patrolDestination);

            console.log("distance remaining ", distance);
            model.distanceToDest = distance.toFixed(2).toString();
            console.log("speed", vectorMag(this.velocity).toFixed(2)); // this.velocity.getMag()
            console.log("velocity vector", this.velocity.x, this.velocity.y);
            if (distance < 80) this.patrolState = patrollingStates.STOPPING;
            break;
          case patrollingStates.STOPPING:
            console.log("slowing down");
            this.patrolState = patrollingStates.IDLE;
            //this.velocity.getMag()
            while (this.PhysicsEntity.speed > 3) {
              this.PhysicsEntity.speed -= 1;
              await this.sleep(25);
            }
            this.PhysicsEntity.speed = 0;
            this.patrolState = patrollingStates.IDLE;
            break;
        }

        break;
      default:
        break;
    }
  }
}

export class enemyBullet extends GameObject {
  texture: string = enemybolt;
  damage: number = 5;
  ssPosition: string;
  textureSize: string;
  radius: number;
  centerpoint = new Vector(0, 0);
  halfsize = new Vector(0, 0);
  mass: number = 0;

  constructor(location: Vector, angle: number, shipsize: Vector) {
    super("badbullet");
    this.type = "BADBULLET";

    if (model.isMobile) this.mobileScaling = "0.6";
    else this.mobileScaling = DESKTOP_SCALING;
    this.size.x = shipsize.x / 4;
    this.size.y = shipsize.y / 3;
    this.halfsize.x = this.size.x / 2;
    this.halfsize.y = this.size.y / 2;
    this.radius = this.size.x / 2;
    this.angle = angle;
    this.ssPosition = "0px 0px";
    this.textureSize = "contain";
    this.position = location;
    this.position.x += shipsize.x / 2;
    const anglex = (shipsize.x / 2) * Math.cos(this.ang2Rad(this.angle));
    this.position.x += anglex;
    const angley = (shipsize.y / 2) * Math.sin(this.ang2Rad(-this.angle));
    this.position.y += shipsize.y / 2;
    this.position.y += angley;

    //this.velocity.setPolar(6.5, this.angle);
    vectorSetPolar(this.velocity, 9, this.angle);

    //**************************** */
    //PEASY PHYSICS
    //**************************** */

    this.shape = new Rect(new Vector(0, 0), this.size, 90);
    this.entity = new Entity(this.position);
    this.entity.shapes = [this.shape];
    this.entity.forces = [];
    this.entity.maxSpeed = 800;
    this.entity.color = "darkgreen";

    this.PhysicsEntity = Physics.addEntities([this.entity])[0];
    this.PhysicsEntity.orientation = this.angle;
    this.PhysicsEntity.addForce({
      name: "laser",
      direction: this.velocity,
      magnitude: 300,
      maxMagnitude: 300,
      duration: 0,
    });
    this.PhysicsEntity.mass = this.mass;
    this.PhysicsEntity.entity = this;
  }

  destroy() {
    Physics.removeEntities([this.PhysicsEntity]);
    const removeIndex = model.gameObjects.findIndex(ent => {
      return ent.id == this.id;
    });
    model.gameObjects.splice(removeIndex, 1);
  }

  ang2Rad = (a: number): number => {
    return a * (Math.PI / 180);
  };

  update(deltaTime) {
    this.position.x = this.PhysicsEntity.position.x;
    this.position.y = this.PhysicsEntity.position.y;
    this.centerpoint.x = this.position.x + this.size.x / 2;
    this.centerpoint.y = this.position.y + this.size.y / 2;

    //check for screen collision
    if (this.position.x > model.screenwidth) this.destroy();
    if (this.position.x < -11) this.destroy();
    if (this.position.y < -11) this.destroy();
    if (this.position.y > model.screenheight) this.destroy();
  }
}
