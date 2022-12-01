import { v4 as uuidv4 } from "uuid";
import { model } from "..";

// Load Chance
let Chance = require("chance");
// Instantiate Chance so it can be used
let chance = new Chance();
const MAX_PLAYER_SPEED = 650;
const MAX_PLAYER_SPEED_MOBILE = 325;

import plr from "../assets/images/player1.png";
import asteroid from "../assets/images/asteroid.png";
import bolt from "../assets/images/playerbullet.png";
import { PlayState, HUDparameters, updateHudData, resetGame } from "../states/game";

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
}

class Entity {
  position: Vector = new Vector(0, 0);
  size: Vector = new Vector(0, 0);
  velocity: Vector = new Vector(0, 0);
  angle: number = 0;
  speed: Vector = new Vector(0, 0);
  type: string;
  id: string;
  name: string;
  radius: number;
  isVisible: boolean = false;
  mobileScaling: string = "";

  constructor(name: string) {
    this.name = name;
    this.id = uuidv4();
  }

  update(deltatime: number, engine: any) {}
}

export class Player extends Entity {
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

  constructor(screenw: number, screenh: number) {
    super("Player");
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
    this.mobileScaling = "";

    if (screenw <= screenh) tempSize = screenw / 13;
    else tempSize = screenh / 13;
    this.size.add({ x: tempSize, y: tempSize }, true);
    this.radius = this.size.x / 2;
    this.position.add({ x: screenw / 2 - tempSize / 2, y: screenh / 2 - tempSize / 2 }, true);
    this.invincibleTimer = 0;
    this.ammo = 25;
  }
  fire() {
    if (this.ammo > 0) {
      this.gunToggle = !this.gunToggle;
      model.entities.push(new Bullet(this.gunToggle, this.angle, this.size));
      this.ammo -= 1;
      const displayedAmmo = ((this.ammo / 25) * 100).toFixed(1);
      model.ammo = `${displayedAmmo}%`;
    }
  }
  turnLeft() {
    if (model.isMobile) this.angle -= 2;
    else this.angle -= 3;
  }
  turnRight() {
    if (model.isMobile) this.angle += 2;
    else this.angle += 3;
  }
  accelerate() {
    this.thrust = true;
    this.travelAngle = this.angle;
  }
  decelerate() {
    this.thrust = false;
    this.reverseThrust = false;
  }
  reverse() {
    this.reverseThrust = true;
    this.travelAngle = this.angle;
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

    //set thrust
    if (this.thrust) {
      //does velocity exceed max speed
      if (model.isMobile) {
        if (this.velocity.x < MAX_PLAYER_SPEED_MOBILE && this.velocity.x > -MAX_PLAYER_SPEED_MOBILE)
          this.velocity.x += Math.cos(this.angle2rad(this.travelAngle)) * updatetime * 125;
        if (this.velocity.y < MAX_PLAYER_SPEED_MOBILE && this.velocity.y > -MAX_PLAYER_SPEED_MOBILE)
          this.velocity.y += Math.sin(this.angle2rad(this.travelAngle)) * updatetime * 125;
      } else {
        if (this.velocity.x < MAX_PLAYER_SPEED && this.velocity.x > -MAX_PLAYER_SPEED)
          this.velocity.x += Math.cos(this.angle2rad(this.travelAngle)) * updatetime * 125;
        if (this.velocity.y < MAX_PLAYER_SPEED && this.velocity.y > -MAX_PLAYER_SPEED)
          this.velocity.y += Math.sin(this.angle2rad(this.travelAngle)) * updatetime * 125;
      }
    }
    if (this.reverseThrust) {
      if (model.isMobile) {
        if (this.velocity.x < MAX_PLAYER_SPEED_MOBILE && this.velocity.x > -MAX_PLAYER_SPEED_MOBILE)
          this.velocity.x -= Math.cos(this.angle2rad(this.travelAngle)) * updatetime * 125;
        if (this.velocity.y < MAX_PLAYER_SPEED_MOBILE && this.velocity.y > -MAX_PLAYER_SPEED_MOBILE)
          this.velocity.y -= Math.sin(this.angle2rad(this.travelAngle)) * updatetime * 125;
      } else {
        if (this.velocity.x < MAX_PLAYER_SPEED && this.velocity.x > -MAX_PLAYER_SPEED)
          this.velocity.x -= Math.cos(this.angle2rad(this.travelAngle)) * updatetime * 125;
        if (this.velocity.y < MAX_PLAYER_SPEED && this.velocity.y > -MAX_PLAYER_SPEED)
          this.velocity.y -= Math.sin(this.angle2rad(this.travelAngle)) * updatetime * 125;
      }
    }

    this.position.x += this.velocity.x * updatetime;
    this.position.y += this.velocity.y * updatetime;
    this.centerpoint.x = this.position.x + this.size.x / 2;
    this.centerpoint.y = this.position.y + this.size.y / 2;

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

        this.health -= 1;
        this.invincibleTimer = 3;
        updateHudData(HUDparameters.HEALTH, -1);
        if (this.health <= 0) {
          //die and reduce lives, and refresh .entities

          model.entities = [model.entities[0]];
          let tempSize;
          engine.stopEngine();
          if (this.screenw <= this.screenh) tempSize = this.screenw / 13;
          else tempSize = this.screenh / 13;
          this.position.setCoord(this.screenw / 2 - tempSize / 2, this.screenh / 2 - tempSize / 2);
          this.velocity.setCoord(0, 0);
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
              engine.startEngine();
            }, 1500);
          }
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
    //check for screen collision
    if (this.position.x > model.screenwidth) this.position.x = -10;
    if (this.position.x < -11) this.position.x = model.screenwidth - 20;
    if (this.position.y < -11) this.position.y = model.screenheight - 20;
    if (this.position.y > model.screenheight) this.position.y = -10;
  }

  angle2rad(angle: number): number {
    return angle * (Math.PI / 180);
  }
}

export class Asteroid extends Entity {
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

  constructor(screenw: number, screenh: number) {
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
    else this.mobileScaling = "";
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
    this.size.add({ x: aSize, y: aSize }, true);
    this.radius = aSize / 2;
    this.position.add({ x: tempX, y: tempY }, true);
    if (model.isMobile) {
      this.velocity.x = chance.integer({ min: -1.5, max: 1.5 });
      this.velocity.y = chance.integer({ min: -1.5, max: 1.5 });
    } else {
      this.velocity.x = chance.integer({ min: -4, max: 4 });
      this.velocity.y = chance.integer({ min: -4, max: 4 });
    }

    this.texture = asteroid;
  }

  destroy() {
    const removeIndex = model.entities.findIndex(ent => {
      return ent.id == this.id;
    });
    model.entities.splice(removeIndex, 1);
  }

  static spawn() {
    model.entities.push(new Asteroid(model.screenwidth, model.screenheight));
  }

  update(deltatime: number) {
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    this.centerpoint.x = this.position.x + this.size.x / 2;
    this.centerpoint.y = this.position.y + this.size.y / 2;

    //check for screen collision
    if (this.position.x > model.screenwidth) this.position.x = -10;
    if (this.position.x < -11) this.position.x = model.screenwidth - 20;
    if (this.position.y < -11) this.position.y = model.screenheight - 20;
    if (this.position.y > model.screenheight) this.position.y = -10;

    //check for asteroid collisions
    //get asteroids
    const listOfAsteroids = model.entities.filter(ent => {
      return ent.type == "ASTEROID" && ent.id != this.id;
    });

    listOfAsteroids.forEach(ast => {
      const distance = this.centerpoint.getDistance(ast.centerpoint);

      if (distance < this.radius * 0.95 + ast.radius * 0.95) {
        //we have a collision

        const vCollision = this.centerpoint.subtract(ast.centerpoint);
        const vdistance = vCollision.getMag();
        const vCollisionNormal = vCollision.normalize();
        const vRelativeVelocity = new Vector(this.velocity.x - ast.velocity.x, this.velocity.y - ast.velocity.y);
        const speed = vRelativeVelocity.x * vCollisionNormal.x + vRelativeVelocity.y * vCollisionNormal.y;
        //PlayState.running = false;
        if (speed > 0) {
          let impulse = (2 * speed) / (this.mass + ast.mass);
          this.velocity.x -= impulse * ast.mass * vCollisionNormal.x;
          this.velocity.y -= impulse * ast.mass * vCollisionNormal.y;
          /* this.position.x += this.velocity.x / 10;
          this.position.y += this.velocity.y / 10; */
          ast.velocity.x += impulse * this.mass * vCollisionNormal.x;
          ast.velocity.y += impulse * this.mass * vCollisionNormal.y;
          /*  ast.position.x += ast.velocity.x / 10;
          ast.position.y += ast.velocity.y / 10; */
        }
      }
    });

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
        console.warn("BULLET COLLISION");
        bullet.destroy();
        updateHudData(HUDparameters.SCORE, 5);
        this.health -= bullet.damage;
        if (this.health <= 0) {
          this.destroy();
          updateHudData(HUDparameters.SCORE, this.reward);
          model.entities[0].exp += this.reward;

          updateHudData(HUDparameters.EXPERIENCE, this.reward);
          //asteroid destroyed
          //give ammo bonus
          model.entities[0].ammoBonus();
        }
      }
    });

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

class Bullet extends Entity {
  texture: string = bolt;
  damage: number = 5;
  ssPosition: string;
  textureSize: string;
  radius: number;
  centerpoint = new Vector(0, 0);
  halfsize = new Vector(0, 0);

  constructor(spawnpoint: boolean, angle: number, shipsize: Vector) {
    super("bullet");
    this.type = "BULLET";

    this.size.x = shipsize.x / 3;
    this.size.y = shipsize.y / 2;
    this.radius = this.size.x / 2;
    this.angle = angle;
    this.ssPosition = "0px 0px";
    this.textureSize = "contain";
    if (spawnpoint) this.position = model.spawnPoint1;
    else this.position = model.spawnPoint2;
    this.position.y -= this.size.y / 2;
    this.velocity.setPolar(6.5, this.angle);
  }

  destroy() {
    const removeIndex = model.entities.findIndex(ent => {
      return ent.id == this.id;
    });
    model.entities.splice(removeIndex, 1);
  }

  update(deltaTime) {
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    this.centerpoint.x = this.position.x + this.size.x / 2;
    this.centerpoint.y = this.position.y + this.size.y / 2;

    //check for screen collision
    if (this.position.x > model.screenwidth) this.destroy();
    if (this.position.x < -11) this.destroy();
    if (this.position.y < -11) this.destroy();
    if (this.position.y > model.screenheight) this.destroy();
  }
}

//TODO later
class Enemy {}

class Star {}
