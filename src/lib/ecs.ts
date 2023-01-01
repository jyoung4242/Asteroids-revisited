import { v4 as uuidv4 } from "uuid";
import { model, sfx } from "..";
import {
  Physics,
  Vector,
  Stadium,
  Circle,
  Rect,
  Entity as PhysicsEntity,
  Intersection,
  CollidingResolution,
} from "@peasy-lib/peasy-physics";

import plr from "../assets/images/player1.png";
import asteroid from "../assets/images/asteroid.png";
import bolt from "../assets/images/playerbullet.png";

import { HUDparameters, updateHudData, resetGame, clearEnemySpawnFlag } from "../states/game";

// Load Chance
let Chance = require("chance");
// Instantiate Chance so it can be used
let chance = new Chance();
const MAX_PLAYER_SPEED = 650;
const MAX_PLAYER_SPEED_MOBILE = 325;
export const DESKTOP_SCALING = "1";
const THRUSTFORCE = 20;

/* 
export class Vector {
  x: number;
  y: number;

  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  add(delta, update = false) {
    const vector = update ? this : new Vector(this.x, this.y);
    vector.x += delta.x;
    vector.y += delta.y;
    return vector;
  }

  getDistance(otherBody: Vector): number {
    //get vector between
    const newVector = new Vector(this.x - otherBody.x, this.y - otherBody.y);
    return newVector.getMag();
  }

  subtract(otherBody: Vector): Vector {
    return new Vector(otherBody.x - this.x, otherBody.y - this.y);
  }

  normalize(): Vector {
    const mag = this.getMag();
    return new Vector(this.x / mag, this.y / mag);
  }

  multiply(delta, update = false) {
    const vector = update ? this : new Vector(this.x, this.y);
    const deltaVector = delta instanceof Vector ? delta : new Vector(delta, delta);
    vector.x *= deltaVector.x;
    vector.y *= deltaVector.y;
    return vector;
  }
  static angle2rad(angle: number): number {
    return angle * (Math.PI / 180);
  }

  getMag() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  getAngle() {
    return Math.atan2(this.y, this.x) * (180 / Math.PI);
  }

  setPolar(magnitude: number, angle: number) {
    this.x = magnitude * Math.cos(Vector.angle2rad(angle));
    this.y = magnitude * Math.sin(Vector.angle2rad(angle));
  }

  setCoord(newX: number, newY: number) {
    this.x = newX;
    this.y = newY;
  }
} */

export function angle2rad(angle: number): number {
  return angle * (Math.PI / 180);
}

export function vectorDistance(a: Vector, b: Vector): number {
  let rsltVector: Vector;
  rsltVector = a.subtract(b, true);
  return Math.sqrt(rsltVector.x * rsltVector.x + rsltVector.y * rsltVector.y);
}

export function vectorMag(v: Vector): number {
  return Math.sqrt(v.x * v.x + v.y * v.y);
}

export function vectorSetPolar(v: Vector, magnitude: number, angle: number): void {
  v.x = magnitude * Math.cos(angle2rad(angle));
  v.y = magnitude * Math.sin(angle2rad(angle));
}

export function vectorAngle(v: Vector): number {
  return Math.atan2(v.y, v.x) * (180 / Math.PI);
}

export class GameObject {
  position: Vector = new Vector(0, 0);
  size: Vector = new Vector(0, 0);
  halfsize: Vector = new Vector(0, 0);
  velocity: Vector = new Vector(0, 0);
  angle: number = 0;
  speed: Vector = new Vector(0, 0);
  type: string;
  id: string;
  name: string;
  radius: number;
  isVisible: boolean = false;
  mobileScaling: string = DESKTOP_SCALING;
  shape: any;
  entity: Entity;
  PhysicsEntity: PhysicsEntity;

  constructor(name: string) {
    this.name = name;
    this.id = uuidv4();
  }

  update(deltatime: number, engine: any) {}
}

export class Entity {
  public shapes = <any>[];
  public forces = <any>[];
  public mass: number = 1;
  public color? = "";
  public maxSpeed?: any;
  public constructor(public position: Vector, public orientation = 0) {}
}

export class Player extends GameObject {
  health: number;
  ammo: number;
  exp: number;
  lives: number;
  texture: string = plr;
  textureSize: string = "cover";
  travelAngle: number;
  thrust: boolean;
  reverseThrust: boolean;
  ssPosition: string = "0px 0px";
  gunToggle: boolean = false;
  mass: number = 5;
  centerpoint = new Vector(0, 0);
  invincibleTimer: number;
  ammoCounter = 0;
  screenw: number;
  screenh: number;
  shape: Stadium;
  entity: any;
  gameLoop: any;

  constructor(screenw: number, screenh: number, engine: Physics, loop: any) {
    super("player");
    this.type = "PLAYER";
    this.health = 10;
    this.exp = 0;
    this.lives = 3;
    let tempSize = 0;
    this.travelAngle = 0;
    this.thrust = false;
    this.reverseThrust = false;
    this.radius;
    this.screenh = screenh;
    this.screenw = screenw;
    this.gameLoop = loop;

    if (model.isMobile) this.mobileScaling = "0.6";
    else this.mobileScaling = DESKTOP_SCALING;

    if (screenw <= screenh) tempSize = screenw / 13;
    else tempSize = screenh / 13;
    this.size = new Vector(tempSize, tempSize);
    this.halfsize.x = this.size.x / 2;
    this.halfsize.y = this.size.y / 2;
    this.radius = this.size.x / 2;
    this.position = new Vector(screenw / 2 - tempSize / 2, screenh / 2 - tempSize / 2);
    this.invincibleTimer = 0;
    this.ammo = 25;

    //**************************** */
    //PEASY PHYSICS
    //**************************** */

    //this.shape = new Stadium(new Vector(0, 0), new Vector(this.size.x, this.size.y * 0.6), "horizontal", 90);
    this.entity = new Entity(this.position, 0);
    this.entity.shapes = [
      { position: new Vector(0, 0), size: new Vector(this.size.x, this.size.y * 0.6), type: ["player"] },
    ];
    this.entity.forces = [];
    this.entity.maxSpeed = 400;
    this.entity.color = "lightgreen";
    this.PhysicsEntity = Physics.addEntities(this.entity)[0];
    this.PhysicsEntity.entity = this;
    this.PhysicsEntity.mass = this.mass;
    this.PhysicsEntity.colliding = (entity: PhysicsEntity, intersection: Intersection): CollidingResolution => {
      if ((entity.entity as GameObject).type == "ASTEROID") {
        //we have a collision
        sfx.play("ship2asteroid");
        this.health -= 1;
        this.invincibleTimer = 3;
        updateHudData(HUDparameters.HEALTH, -1);

        if (this.health <= 0) {
          clearEnemySpawnFlag();
          //die and reduce lives, and refresh .entities
          sfx.play("astBoom");
          this.ammo = 25;
          model.gameObjects = [model.gameObjects[0]];
          const entitiesToRemove = Physics.entities.filter((_ent, index) => {
            return index != 0;
          });
          Physics.removeEntities(entitiesToRemove);
          this.PhysicsEntity.speed = 0;
          let tempSize;
          if (this.screenw <= this.screenh) tempSize = this.screenw / 13;
          else tempSize = this.screenh / 13;
          this.position.x = this.screenw / 2 - tempSize / 2;
          this.position.y = this.screenh / 2 - tempSize / 2;
          this.PhysicsEntity.position.x = this.position.x;
          this.PhysicsEntity.position.y = this.position.y;
          model.engineRunning = false;
          this.lives -= 1;
          this.health = 10;
          model.health = 10;
          updateHudData(HUDparameters.LIVES, -1);

          if (this.lives < 0) {
            //game over
            model.statusmessage = "GAME OVER";
            model.statusIsVisible = true;
            setTimeout(() => {
              model.statusIsVisible = false;
              resetGame();
            }, 3000);
          } else {
            model.statusmessage = "DIED - BEGIN AGAIN";
            model.statusIsVisible = true;
            setTimeout(() => {
              model.statusIsVisible = false;
              model.engineRunning = true;
            }, 1500);
          }
        }
      } else if ((entity.entity as GameObject).type == "BADBULLET") {
        sfx.play("targetHit");
        (entity.entity as Bullet).destroy();
        this.health -= 1;
        this.invincibleTimer = 3;
        updateHudData(HUDparameters.HEALTH, -1);
        if (this.health <= 0) {
          //die and reduce lives, and refresh .entities
          sfx.play("astBoom");
          clearEnemySpawnFlag();
          model.gameObjects = [model.gameObjects[0]];
          let tempSize;
          this.gameLoop.stopEngine();
          this.ammo = 25;
          if (this.screenw <= this.screenh) tempSize = this.screenw / 13;
          else tempSize = this.screenh / 13;
          //this.position.setCoord(this.screenw / 2 - tempSize / 2, this.screenh / 2 - tempSize / 2);
          this.position.x = this.screenw / 2 - tempSize / 2;
          this.position.y = this.screenh / 2 - tempSize / 2;
          //this.velocity.setCoord(0, 0);
          this.velocity.x = 0;
          this.velocity.y = 0;
          this.lives -= 1;
          this.health = 10;
          model.health = 10;
          updateHudData(HUDparameters.LIVES, -1);

          if (this.lives < 0) {
            //game over
            model.statusmessage = "GAME OVER";
            model.statusIsVisible = true;
            setTimeout(() => {
              model.statusIsVisible = false;
              resetGame();
            }, 3000);
          } else {
            model.statusmessage = "DIED - BEGIN AGAIN";
            model.statusIsVisible = true;
            setTimeout(() => {
              model.statusIsVisible = false;
              this.gameLoop.startEngine();
            }, 1500);
          }
        }
      }
      return "collide";
    };
  }

  fire() {
    if (this.ammo > 0) {
      sfx.play("playerfire");
      this.gunToggle = !this.gunToggle;
      console.log(
        `player firing form position: ${this.position.x}, ${this.position.y} at angle ${this.angle}, and at this size ${this.size.x}, ${this.size.y}`
      );
      model.gameObjects.push(new Bullet(this.gunToggle, this.angle, this.size, Physics));
      this.ammo -= 1;
      const displayedAmmo = ((this.ammo / 25) * 100).toFixed(1);
      model.ammo = `${displayedAmmo}%`;
    }
  }

  turnLeft() {
    this.PhysicsEntity.orientation -= 3;
    this.angle = this.PhysicsEntity.orientation;
  }

  turnRight() {
    this.PhysicsEntity.orientation += 3;
    this.angle = this.PhysicsEntity.orientation;
  }

  accelerate() {
    const tempX = THRUSTFORCE * Math.cos(angle2rad(this.PhysicsEntity.orientation));
    const tempY = THRUSTFORCE * Math.sin(angle2rad(this.PhysicsEntity.orientation));
    const dir = new Vector(tempX, tempY);

    this.PhysicsEntity.addForce({
      name: "thrust",
      direction: dir,
      duration: 0,
      magnitude: 500,
    });
  }

  reverse() {
    const currentAngle = this.PhysicsEntity.orientation;
    let reverseAngle = currentAngle + 180;

    const tempX = THRUSTFORCE * Math.cos(angle2rad(reverseAngle));
    const tempY = THRUSTFORCE * Math.sin(angle2rad(reverseAngle));
    const dir = new Vector(tempX, tempY);

    this.PhysicsEntity.addForce({
      name: "reverse",
      direction: dir,
      duration: 0,
      magnitude: 500,
    });
  }

  ammoBonus() {
    if (this.ammo > 17) {
      this.ammo = 25;
      const displayedAmmo = ((this.ammo / 25) * 100).toFixed(1);
      model.ammo = `${displayedAmmo}%`;
    } else {
      this.ammo += 8;
      const displayedAmmo = ((this.ammo / 25) * 100).toFixed(1);
      model.ammo = `${displayedAmmo}%`;
    }
  }

  update(updatetime: number, engine: any) {
    //burn off invincibility
    if (this.invincibleTimer > 0) {
      this.invincibleTimer -= updatetime;
    } else this.invincibleTimer = 0;

    //ammo regeneration
    if (this.ammo < 25) {
      this.ammoCounter += updatetime;

      if (this.ammoCounter >= 1.5) {
        this.ammo += 1;
        this.ammoCounter = 0;
        const displayedAmmo = ((this.ammo / 25) * 100).toFixed(1);
        model.ammo = `${displayedAmmo}%`;
      }
    }

    //movement update
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
  }

  angle2rad(angle: number): number {
    return angle * (Math.PI / 180);
  }
}

export class Asteroid extends GameObject {
  health: number;
  reward: number;
  ssSize: string;
  texture: string = asteroid;
  textureSize: string;
  intervalLimit: number = 1;
  intervalTik: number = 0;
  animationSequence: number = 0;
  ssPosition: string;
  rotationAmount: number = 0;
  secondSpin: boolean = false;
  secondSpinRate: number = 0;
  centerpoint = new Vector(0, 0);
  mass: number;

  //setup the different types of asteroid spritesheet params
  sizeMap = {
    small: {
      divSize: 82.125 / 2,
      cssSize: "320px 320px",
      health: 15,
      mass: 50,
      reward: 20,
      scaling: "0.8",
    },
    medium: {
      divSize: 82.125,
      cssSize: "640px 640px",
      health: 20,
      mass: 100,
      reward: 15,
      scaling: "0.8",
    },
    large: {
      divSize: 82.125 * 1.25,
      cssSize: "800px 800px",
      health: 25,
      mass: 150,
      reward: 15,
      scaling: "0.8",
    },
    epic: {
      divSize: 82.125 * 1.5,
      cssSize: "960px 960px",
      health: 30,
      mass: 200,
      reward: 10,
      scaling: "0.8",
    },
  };
  frames = [];

  constructor(screenw: number, screenh: number, engine: Physics) {
    super("asteroid");
    this.type = "ASTEROID";

    //select random type of asteroid (size)
    const selection = chance.pickone(["small", "medium", "large", "epic"]);
    const animation = chance.bool();
    this.secondSpin = chance.bool();

    this.intervalLimit = chance.integer({ min: 2, max: 6 });

    if (this.secondSpin) this.secondSpinRate = chance.floating({ min: 0.1, max: 4.0, fixed: 2 });

    //select div size, then spritesheet size, then position
    const aSize = this.sizeMap[selection].divSize;
    this.textureSize = this.sizeMap[selection].cssSize;
    this.health = this.sizeMap[selection].health;
    this.mass = this.sizeMap[selection].mass;
    this.reward = this.sizeMap[selection].reward;
    if (model.isMobile) this.mobileScaling = this.sizeMap[selection].scaling;
    else this.mobileScaling = DESKTOP_SCALING;
    this.ssPosition = "0px 0px";

    //load up frames
    let offset;
    animation == true ? (offset = 0) : (offset = aSize * 4);
    for (let y = 0; y < 4; y++) {
      for (let x = 0; x < 8; x++) {
        this.frames.push({ x: x * -aSize, y: y * -aSize - offset });
      }
    }

    //find starting spot
    const tempSide = chance.integer({ min: 0, max: 3 });
    let tempX, tempY;
    switch (tempSide) {
      case 0:
        //left side
        tempX = 0;
        tempY = chance.integer({ min: 0, max: screenh });
        break;
      case 1:
        //top side
        tempX = chance.integer({ min: 0, max: screenw });
        tempY = 0;
        break;
      case 2:
        //right side
        tempX = screenw;
        tempY = chance.integer({ min: 0, max: screenh });
        break;
      case 3:
        //bottom side
        tempX = chance.integer({ min: 0, max: screenw });
        tempY = screenh;
        break;
    }

    //set size, position, and velocity vectors
    this.size.add(new Vector(aSize, aSize), true);
    this.halfsize.x = this.size.x / 2;
    this.halfsize.y = this.size.y / 2;
    this.radius = aSize / 2;
    //this.position.add({ x: tempX, y: tempY }, true);
    this.position.add(new Vector(tempX, tempY), true);
    if (model.isMobile) {
      this.velocity.x = chance.floating({ min: -1, max: 1 });
      this.velocity.y = chance.floating({ min: -1, max: 1 });
    } else {
      this.velocity.x = chance.floating({ min: -1, max: 1 });
      this.velocity.y = chance.floating({ min: -1, max: 1 });
    }
    const velocityMag = chance.floating({ min: 0.1, max: 80.0 });
    this.texture = asteroid;

    //**************************** */
    //PEASY PHYSICS
    //**************************** */

    this.shape = new Circle(new Vector(-5, 5), this.radius * 0.8, 90);
    this.entity = new Entity(this.position);
    //this.entity.shapes = [{ position: new Vector(-5, -5), size: { radius: this.radius * 0.75 }, type: ["asteroid"] }];
    this.entity.shapes = [this.shape];
    this.entity.forces = [];
    this.entity.maxSpeed = 500;
    this.entity.color = "red";

    this.PhysicsEntity = Physics.addEntities([this.entity])[0];
    this.PhysicsEntity.addForce({
      name: "initial",
      direction: this.velocity,
      magnitude: velocityMag,
      maxMagnitude: 80,
      duration: 0,
    });
    this.PhysicsEntity.entity = this;
    this.PhysicsEntity.mass = this.mass;
    this.PhysicsEntity.colliding = (entity, _intersection): CollidingResolution => {
      console.log("collision with: ", (entity.entity as GameObject).type, (entity.entity as GameObject).id);
      if ((entity.entity as GameObject).type == "ASTEROID") {
        //we have a collision
        sfx.play(chance.pickone(["col1", "col2", "col3"]));
      } else if ((entity.entity as GameObject).type == "BULLET" || (entity.entity as GameObject).type == "BADBULLET") {
        sfx.play("targetHit");
        this.health -= (entity.entity as Bullet).damage;
        (entity.entity as Bullet).destroy();
        updateHudData(HUDparameters.SCORE, 5);
        console.log(this.health);
        if (this.health <= 0) {
          sfx.play("astBoom");
          console.log("asteroid dead");
          updateHudData(HUDparameters.SCORE, this.reward);
          console.log(model.gameObjects);
          model.gameObjects[0].exp += this.reward;
          updateHudData(HUDparameters.EXPERIENCE, this.reward);
          model.gameObjects[0].ammoBonus();
          this.destroy();
        }
      }
      return "collide";
    };
  }

  destroy() {
    let removeIndex = Physics.entities.findIndex(ent => {
      return (ent.entity as GameObject).id == this.id;
    });
    if (removeIndex != -1) Physics.entities.splice(removeIndex, 1);
    console.log("asteroid index to be removed", removeIndex);

    removeIndex = model.gameObjects.findIndex(ent => {
      return ent.id == this.id;
    });
    console.log("asteroid index to be removed", removeIndex);
    if (removeIndex != -1) model.gameObjects.splice(removeIndex, 1);
  }

  static spawn(Physics: any) {
    model.gameObjects.push(new Asteroid(model.screenwidth, model.screenheight, Physics));
  }

  update(deltatime: number) {
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

    //rotate div
    if (this.secondSpin) this.angle += this.secondSpinRate;

    //animation tik
    this.intervalTik += 1;
    if (this.intervalTik >= this.intervalLimit) {
      //fire animation sequence change
      this.animationSequence += 1;
      if (this.animationSequence == 32) this.animationSequence = 0;
      const newx = this.frames[this.animationSequence].x;
      const newy = this.frames[this.animationSequence].y;
      this.ssPosition = `${newx}px ${newy}px`;
      this.intervalTik = 0;
    }
  }
}

export class Bullet extends GameObject {
  texture: string = bolt;
  damage: number = 5;
  ssPosition: string;
  textureSize: string;
  radius: number;
  centerpoint = new Vector(0, 0);
  halfsize = new Vector(0, 0);
  mass: number = 0;

  constructor(spawnpoint: boolean, angle: number, shipsize: Vector, Physics: any) {
    super("bullet");
    this.type = "BULLET";

    this.size.x = shipsize.x / 3;
    this.size.y = shipsize.y / 2;
    this.halfsize.x = this.size.x / 2;
    this.halfsize.y = this.size.y / 2;
    this.radius = this.size.x / 2;
    this.angle = angle;
    this.ssPosition = "0px 0px";
    this.textureSize = "contain";
    if (spawnpoint) {
      this.position.x = model.spawnPoint1.x;
      this.position.y = model.spawnPoint1.y;
    } else {
      this.position.x = model.spawnPoint2.x;
      this.position.y = model.spawnPoint2.y;
    }
    this.position.x -= shipsize.x / 2;
    this.position.y -= shipsize.x / 2;

    vectorSetPolar(this.velocity, 1, this.angle);
    if (model.isMobile) this.mobileScaling = "0.6";
    else this.mobileScaling = DESKTOP_SCALING;

    //**************************** */
    //PEASY PHYSICS
    //**************************** */

    this.shape = new Rect(new Vector(0, 0), this.size, 90);
    this.entity = new Entity(this.position);
    this.entity.shapes = [this.shape];
    this.entity.forces = [];
    this.entity.maxSpeed = 800;
    this.entity.color = "purple";

    this.PhysicsEntity = Physics.addEntities([this.entity])[0];
    this.PhysicsEntity.orientation = this.angle;
    this.PhysicsEntity.mass = this.mass;
    this.PhysicsEntity.addForce({
      name: "laser",
      direction: this.velocity,
      magnitude: 300,
      maxMagnitude: 300,
      duration: 0,
    });
    this.PhysicsEntity.entity = this;
  }

  destroy() {
    console.log("game objects", model.gameObjects);
    console.log("bullet destroy code block: ", (this.PhysicsEntity.entity as GameObject).id, Physics.entities);
    Physics.removeEntities([this.PhysicsEntity]);
    console.log("entities remaining: ", Physics.entities);
    const removeIndex = model.gameObjects.findIndex(ent => {
      return ent.id == this.id;
    });
    console.log("bullet index to be removed", removeIndex);
    if (removeIndex != -1) model.gameObjects.splice(removeIndex, 1);
    console.log("game objects", model.gameObjects);
  }

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
