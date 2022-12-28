import { Entity, Vector, enemyBullet } from "./ecs";
import { model, sfx } from "..";
import enemyImage from "../assets/images/enemy.png";
import { pathsToModuleNameMapper } from "ts-jest";
import { HUDparameters, updateHudData, resetGame } from "../states/game";

// Load Chance
let Chance = require("chance");
let chance = new Chance();
let bulletCollisionDetected: boolean = false;
let asteroidCollisionDetected: boolean = false;
let playerDetected: boolean = false;

let bulletToEvade: Entity | null = null;
let asteroidToEvade: Enemy | null = null;
let vAttack: Vector | null = null;
let thetaAttack: number | null = null;
let evasionAngle: number | null = null;
let attackAngle: number | null = null;
let newHeading: Vector | null = null;
let newAngle: number | null = null;

const MAX_PLAYER_SPEED = 650;
const MAX_PLAYER_SPEED_MOBILE = 325;

enum enemyAIStates {
  IDLE,
  SCANNING,
  EVADING_BULLETS,
  EVADING_ASTEROIDS,
  ENGAGING_PLAYER,
  PATROLLING,
}

enum evasionStates {
  IDLE,
  ALERT,
  TURNING,
  MOVING,
}

enum attackStates {
  IDLE,
  TRACKING,
  TURNING,
  FIRING,
  MOVING,
}

enum patrollingStates {
  IDLE,
  WAYPOINT,
  TURNING,
  MOVING,
}

export class Enemy extends Entity {
  health: number;
  reward: number;
  texture: string = enemyImage;
  enemyState: enemyAIStates = enemyAIStates.IDLE;
  evastionState: evasionStates = evasionStates.IDLE;
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

  constructor(w: number, h: number) {
    super("Enemy");
    this.type = "ENEMY";
    this.health = 10;
    this.reward = 50;
    this.screenh = w;
    this.screenw = h;
    let tempSize = 0;

    if (w <= h) tempSize = w / 13;
    else tempSize = h / 13;
    this.size.add({ x: tempSize, y: tempSize }, true);
    this.radius = this.size.x / 2;
    //find starting spot
    const tempSide = chance.integer({ min: 0, max: 3 });
    let tempX, tempY;
    switch (tempSide) {
      case 0:
        //left side
        tempX = 0;
        tempY = chance.integer({ min: 0, max: h });
        break;
      case 1:
        //top side
        tempX = chance.integer({ min: 0, max: w });
        tempY = 0;
        break;
      case 2:
        //right side
        tempX = w;
        tempY = chance.integer({ min: 0, max: h });
        break;
      case 3:
        //bottom side
        tempX = chance.integer({ min: 0, max: w });
        tempY = h;
        break;
    }
    this.position.add({ x: tempX, y: tempY }, true);
  }

  static spawn() {
    model.entities.push(new Enemy(model.screenwidth, model.screenheight));
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

  update(updatetime) {
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
        this.ammo += 1;
        this.ammoCounter = 0;
        const displayedAmmo = ((this.ammo / 25) * 100).toFixed(1);
        model.ammo = `${displayedAmmo}%`;
      }
    }

    //****************************************** */
    //physics update
    //****************************************** */

    //set thrust
    if (this.thrust) {
      //does velocity exceed max speed
      if (model.isMobile) {
        if (this.velocity.x < MAX_PLAYER_SPEED_MOBILE && this.velocity.x > -MAX_PLAYER_SPEED_MOBILE)
          this.velocity.x += Math.cos(this.ang2Rad(this.travelAngle)) * updatetime * 125;
        if (this.velocity.y < MAX_PLAYER_SPEED_MOBILE && this.velocity.y > -MAX_PLAYER_SPEED_MOBILE)
          this.velocity.y += Math.sin(this.ang2Rad(this.travelAngle)) * updatetime * 125;
      } else {
        if (this.velocity.x < MAX_PLAYER_SPEED && this.velocity.x > -MAX_PLAYER_SPEED)
          this.velocity.x += Math.cos(this.ang2Rad(this.travelAngle)) * updatetime * 125;
        if (this.velocity.y < MAX_PLAYER_SPEED && this.velocity.y > -MAX_PLAYER_SPEED)
          this.velocity.y += Math.sin(this.ang2Rad(this.travelAngle)) * updatetime * 125;
      }
    }
    this.position.x += this.velocity.x * updatetime;
    this.position.y += this.velocity.y * updatetime;
    this.centerpoint.x = this.position.x + this.size.x / 2;
    this.centerpoint.y = this.position.y + this.size.y / 2;

    /*************************************************
     * Collision with bullet or asteroid section
     ************************************************/

    //check for asteroid collisions
    //get asteroids
    const listOfAsteroids = model.entities.filter(ent => {
      return ent.type == "ASTEROID";
    });

    listOfAsteroids.forEach(ast => {
      const distance = this.centerpoint.getDistance(ast.centerpoint);

      if (distance < this.radius * 0.95 + ast.radius * 0.95) {
        if (this.invincibleTimer > 0) return;
        //we have a collision
        this.enemyState = enemyAIStates.SCANNING;
        this.stateTik = 0;
        sfx.play("ship2asteroid");
        this.health -= 1;
        this.invincibleTimer = 3;

        if (this.health <= 0) {
          //die and remove entity
          sfx.play("astBoom");
          const myIndex = model.entities.findIndex(e => e.id == this.id);
          model.entities.splice(myIndex, 1);
        }

        const vCollision = this.centerpoint.subtract(ast.centerpoint);
        const vCollisionNormal = vCollision.normalize();
        const vRelativeVelocity = new Vector(this.velocity.x - ast.velocity.x, this.velocity.y - ast.velocity.y);
        const speed = vRelativeVelocity.x * vCollisionNormal.x + vRelativeVelocity.y * vCollisionNormal.y;

        if (speed > 0) {
          let impulse = (2 * speed) / (this.mass + ast.mass);
          this.velocity.x -= impulse * ast.mass * vCollisionNormal.x;
          this.velocity.y -= impulse * ast.mass * vCollisionNormal.y;
          this.position.x += this.velocity.x / 10;
          this.position.y += this.velocity.y / 10;
          ast.velocity.x += impulse * this.mass * vCollisionNormal.x;
          ast.velocity.y += impulse * this.mass * vCollisionNormal.y;
          ast.position.x += ast.velocity.x / 10;
          ast.position.y += ast.velocity.y / 10;
        }
      }
    });

    //check for player bullet collisions
    //check for bullet collisions
    //get bullets
    const listOfBullets = model.entities.filter(ent => {
      return ent.type == "BULLET";
    });

    //loop through bullets and check for collisions
    listOfBullets.forEach(bullet => {
      //get distance between bullet cp and asteroid cp
      const distance = this.centerpoint.getDistance(bullet.centerpoint);

      if (distance < this.radius * 0.75 + bullet.radius) {
        //we have a collision
        this.enemyState = enemyAIStates.SCANNING;
        this.stateTik = 0;
        sfx.play("targetHit");
        bullet.destroy();
        this.health -= bullet.damage;
        if (this.health <= 0) {
          sfx.play("astBoom");
          model.entities[0].exp += this.reward;
          updateHudData(HUDparameters.EXPERIENCE, this.reward);
          const myIndex = model.entities.findIndex(e => e.id == this.id);
          model.entities.splice(myIndex, 1);
          //give ammo bonus
          model.entities[0].ammoBonus();
        }
      }
    });

    //check for screen collision
    if (this.position.x > model.screenwidth) this.position.x = -10;
    if (this.position.x < -11) this.position.x = model.screenwidth - 20;
    if (this.position.y < -11) this.position.y = model.screenheight - 20;
    if (this.position.y > model.screenheight) this.position.y = -10;

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
        if (this.stateTik >= 100) {
          this.enemyState = enemyAIStates.SCANNING;
          bulletCollisionDetected = false;
          asteroidCollisionDetected = false;
          playerDetected = false;
          bulletToEvade = null;
          asteroidToEvade = null;
          this.stateTik = 0;
        }
        break;
      //check all three assessments
      //is bullet incoming
      //is asteroid incoming
      //is player nearby
      case enemyAIStates.SCANNING:
        this.stateTik += 1;

        //check collision flags
        //if set, AND scanning timer complete, change state
        if (this.stateTik >= 10 && (bulletCollisionDetected || asteroidCollisionDetected || playerDetected)) {
          if (bulletCollisionDetected) this.enemyState = enemyAIStates.EVADING_BULLETS;
          else if (asteroidCollisionDetected) this.enemyState = enemyAIStates.EVADING_ASTEROIDS;
          else if (playerDetected) this.enemyState = enemyAIStates.ENGAGING_PLAYER;
          bulletCollisionDetected = false;
          asteroidCollisionDetected = false;
          playerDetected = false;
          this.stateTik = 0;
          break;
        } else if (this.stateTik >= 10 && !asteroidCollisionDetected && !bulletCollisionDetected && !playerDetected) {
          //no collisions, and scanning burnoff finished
          this.enemyState = enemyAIStates.PATROLLING;
          bulletToEvade = null;
          asteroidToEvade = null;
          bulletCollisionDetected = false;
          asteroidCollisionDetected = false;
          playerDetected = false;
          this.stateTik = 0;
          break;
        }

        //If you've gotten this far, no collision detected yet

        /*************************************************** */
        // BULLET DETECTION
        /*************************************************** */

        const bullets = model.entities.filter(e => {
          e.type == "BULLET";
        });
        if (bullets.length) {
          //loop through bullets and check for imminent collision

          for (let b = 0; b < bullets.length; b++) {
            const bullet = bullets[b];
            const rX = this.screenw - bullet.position.x;
            const rY = Math.tan(this.ang2Rad(bullet.angle)) * rX;
            if (this.collisionCheck(bullet.position.x, bullet.position.y, rX, rY)) {
              //collision detected, take evasive manuevers and bail out of loops
              bulletToEvade = bullet;
              this.evastionState = evasionStates.ALERT;
              bulletCollisionDetected = true;
              break;
            }
          }
        }

        /*************************************************** */
        // ASTEROID DETECTION
        /*************************************************** */

        const asteroids = model.entities.filter(e => {
          e.type == "ASTEROID";
        });
        if (asteroids.length) {
          //loop through bullets and check for imminent collision

          for (let a = 0; a < asteroids.length; a++) {
            const asteroid = asteroids[a];
            const rX = this.screenw - asteroid.position.x;
            const rY = Math.tan(this.ang2Rad(asteroid.angle)) * rX;
            if (this.collisionCheck(asteroid.position.x, asteroid.position.y, rX, rY)) {
              //collision detected, take evasive manuevers and bail out of loops
              asteroidToEvade = asteroid;
              this.evastionState = evasionStates.ALERT;
              asteroidCollisionDetected = true;
              break;
            }
          }
        }

        /*************************************************** */
        // PLAYER DETECTION
        /*************************************************** */
        const detectionVector: Vector = new Vector(this.screenw / 4, this.screenh / 4);
        const detectionMagnitude = detectionVector.getMag();
        const playerDistance = model.entities[0].position.distance(this.position);
        if (playerDistance < detectionMagnitude) {
          //player is close enough to detect
          playerDetected = true;
          this.evastionState = evasionStates.IDLE;
          this.attackState = attackStates.TRACKING;
          break;
        }

        break;
      case enemyAIStates.EVADING_BULLETS:
        //find vector between bullet to evade and enemy
        //turn 90 deg from bullet
        //move out of path... just increase velocity in new direction
        //afterwards, set back to scanning
        switch (this.evastionState) {
          case evasionStates.IDLE:
            break;
          case evasionStates.ALERT:
            vAttack = this.position.subtract(bulletToEvade.position);
            thetaAttack = vAttack.getAngle();
            evasionAngle = thetaAttack + 90;
            this.evastionState = evasionStates.TURNING;
            break;
          case evasionStates.TURNING:
            if (this.angle != evasionAngle) {
              const gap = evasionAngle - this.angle;
              if (gap == 0) {
                this.evastionState = evasionStates.MOVING;
                break;
              }
              if (gap <= 0) {
                this.angle += 1;
                break;
              } else {
                this.angle -= 1;
                break;
              }
            }
            break;
          case evasionStates.MOVING:
            this.stateTik += 1;
            this.thrust = true;
            this.travelAngle = this.angle;
            if (this.stateTik >= 10) {
              this.stateTik = 0;
              this.thrust = false;
              this.evastionState = evasionStates.IDLE;
              this.enemyState = enemyAIStates.IDLE;
              vAttack = null;
              thetaAttack = null;
              evasionAngle = null;
            }
            break;
          default:
            break;
        }

        break;
      case enemyAIStates.EVADING_ASTEROIDS:
        //find vector between bullet to evade and enemy
        //turn 90 deg from bullet
        //move out of path... just increase velocity in new direction
        //afterwards, set back to scanning
        switch (this.evastionState) {
          case evasionStates.IDLE:
            break;
          case evasionStates.ALERT:
            vAttack = this.position.subtract(asteroidToEvade.position);
            thetaAttack = vAttack.getAngle();
            evasionAngle = thetaAttack + 90;
            this.evastionState = evasionStates.TURNING;
            break;
          case evasionStates.TURNING:
            if (this.angle != evasionAngle) {
              const gap = evasionAngle - this.angle;
              if (gap == 0) {
                this.evastionState = evasionStates.MOVING;
                break;
              }
              if (gap <= 0) {
                this.angle += 1;
                break;
              } else {
                this.angle -= 1;
                break;
              }
            }
            break;
          case evasionStates.MOVING:
            this.stateTik += 1;
            this.thrust = true;
            this.travelAngle = this.angle;
            if (this.stateTik >= 15) {
              this.stateTik = 0;
              this.thrust = false;
              this.evastionState = evasionStates.IDLE;
              this.enemyState = enemyAIStates.IDLE;
              vAttack = null;
              thetaAttack = null;
              evasionAngle = null;
            }
            break;
          default:
            break;
        }
        break;
      case enemyAIStates.ENGAGING_PLAYER:
        //turn to player, fire, and move closer
        switch (this.attackState) {
          case attackStates.IDLE:
            break;
          case attackStates.TRACKING:
            vAttack = this.position.subtract(model.entities[0].position);
            thetaAttack = vAttack.getAngle();
            attackAngle = thetaAttack + 180;
            this.attackState = attackStates.TURNING;
            break;
          case attackStates.TURNING:
            if (this.angle != attackAngle) {
              const gap = attackAngle - this.angle;
              if (gap == 0) {
                this.attackState = attackStates.FIRING;
                break;
              }
              if (gap <= 0) {
                this.angle += 1;
                break;
              } else {
                this.angle -= 1;
                break;
              }
            }
            break;
          case attackStates.FIRING:
            if (this.ammo > 0) {
              sfx.play("playerfire");
              model.entities.push(new enemyBullet(this.position, this.angle, this.size));
              this.ammo -= 1;
              const displayedAmmo = ((this.ammo / 25) * 100).toFixed(1);
              model.ammo = `${displayedAmmo}%`;
              this.attackState = attackStates.MOVING;
            }
            break;
          case attackStates.MOVING:
            this.stateTik += 1;
            this.thrust = true;
            this.travelAngle = this.angle;
            if (this.stateTik >= 5) {
              this.stateTik = 0;
              this.thrust = false;
              this.attackState = attackStates.IDLE;
              this.enemyState = enemyAIStates.SCANNING;
              vAttack = null;
              thetaAttack = null;
              evasionAngle = null;
            }
            break;
        }
        break;
      case enemyAIStates.PATROLLING:
        switch (this.patrolState) {
          case patrollingStates.IDLE:
            this.stateTik += 1;
            if (this.stateTik >= 10) {
              this.stateTik = 0;
              this.patrolState = patrollingStates.WAYPOINT;
            }
            break;
          case patrollingStates.WAYPOINT:
            //pick random 'other' quadrant in field, start heading toward it

            /**********************************************
             * determining the vector of where we're going
             **********************************************/
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
            const vectorMap = {
              1: new Vector(0.25 * this.screenw, 0.25 * this.screenh),
              2: new Vector(0.75 * this.screenw, 0.25 * this.screenh),
              3: new Vector(0.25 * this.screenw, 0.75 * this.screenh),
              4: new Vector(0.75 * this.screenw, 0.75 * this.screenh),
            };
            const targetVector = vectorMap[targetQuadrant];
            newHeading = this.position.subtract(targetVector);
            newAngle = newHeading.getAngle();
            this.patrolState = patrollingStates.TURNING;
            break;

          case patrollingStates.TURNING:
            if (this.angle != newAngle) {
              const gap = newAngle - this.angle;
              if (gap == 0) {
                this.patrolState = patrollingStates.MOVING;
                break;
              }
              if (gap <= 0) {
                this.angle += 1;
                break;
              } else {
                this.angle -= 1;
                break;
              }
            }
            break;
          case patrollingStates.MOVING:
            this.stateTik += 1;
            this.thrust = true;
            this.travelAngle = this.angle;
            if (this.stateTik >= 15) {
              this.stateTik = 0;
              this.thrust = false;
              this.patrolState = patrollingStates.IDLE;
              this.enemyState = enemyAIStates.SCANNING;
              newHeading = null;
              newAngle = null;
            }
            break;
            break;
        }

        break;
      default:
        break;
    }
  }
}
