import { v4 as uuidv4 } from "uuid";
import { model } from "..";

// Load Chance
var Chance = require("chance");
// Instantiate Chance so it can be used
var chance = new Chance();

import plr from "../assets/images/player1.png";
import asteroid from "../assets/images/asteroid.png";

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
  multiply(delta, update = false) {
    const vector = update ? this : new Vector(this.x, this.y);
    const deltaVector = delta instanceof Vector ? delta : new Vector(delta, delta);
    vector.x *= deltaVector.x;
    vector.y *= deltaVector.y;
    return vector;
  }
  angle2rad(angle: number): number {
    return angle * (Math.PI / 180);
  }

  setPolar(magnitude: number, angle: number) {
    this.x = magnitude * Math.cos(this.angle2rad(angle));
    this.y = magnitude * Math.sin(this.angle2rad(angle));
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

  constructor(name: string) {
    this.name = name;
    this.id = uuidv4();
  }

  update(deltatime: number) {}
}

export class Player extends Entity {
  health: number;
  exp: number;
  lives: number;
  texture: string = plr;
  textureSize: string = "cover";
  travelAngle: number;
  thrust: boolean;
  reverseThrust: boolean;
  ssPosition: string = "0px 0px";

  constructor(screenw: number, screenh: number) {
    super("Player");
    this.type = "PLAYER";
    this.health = 25;
    this.exp = 0;
    this.lives = 3;
    let tempSize = 0;
    this.travelAngle = 0;
    this.thrust = false;
    this.reverseThrust = false;
    if (screenw <= screenh) tempSize = screenw / 13;
    else tempSize = screenh / 13;
    this.size.add({ x: tempSize, y: tempSize }, true);
    this.position.add({ x: screenw / 2 - tempSize / 2, y: screenh / 2 - tempSize / 2 }, true);
  }
  fire() {}
  turnLeft() {
    this.angle -= 2;
  }
  turnRight() {
    this.angle += 2;
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
  update(updatetime: number) {
    //set thrust
    if (this.thrust) {
      this.velocity.x += Math.cos(this.angle2rad(this.travelAngle)) * updatetime * 125;
      this.velocity.y += Math.sin(this.angle2rad(this.travelAngle)) * updatetime * 125;
    }
    if (this.reverseThrust) {
      this.velocity.x -= Math.cos(this.angle2rad(this.travelAngle)) * updatetime * 125;
      this.velocity.y -= Math.sin(this.angle2rad(this.travelAngle)) * updatetime * 125;
    }

    this.position.x += this.velocity.x * updatetime;
    this.position.y += this.velocity.y * updatetime;

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

  //setup the different types of asteroid spritesheet params
  sizeMap = {
    small: {
      divSize: 82.125 / 2,
      cssSize: "320px 320px",
    },
    medium: {
      divSize: 82.125,
      cssSize: "640px 640px",
    },
    large: {
      divSize: 82.125 * 1.25,
      cssSize: "800px 800px",
    },
    epic: {
      divSize: 82.125 * 1.5,
      cssSize: "960px 960px",
    },
  };
  frames = [];

  constructor(screenw: number, screenh: number) {
    super("asteroid");
    this.type = "ASTEROID";
    this.health = 25;
    this.reward = chance.integer({ min: 5, max: 25 });
    let tempSize = 0;
    if (screenw <= screenh) tempSize = screenw / 6;
    else tempSize = screenh / 6;

    //select random type of asteroid (size)
    const selection = chance.pickone(["small", "medium", "large", "epic"]);
    const animation = chance.bool();
    this.secondSpin = chance.bool();

    this.intervalLimit = chance.integer({ min: 2, max: 6 });

    if (this.secondSpin) this.secondSpinRate = chance.floating({ min: 0.1, max: 4.0, fixed: 2 });

    console.log(selection);
    //select div size, then spritesheet size, then position
    const aSize = this.sizeMap[selection].divSize;
    this.textureSize = this.sizeMap[selection].cssSize;
    this.ssPosition = "0px 0px";

    //load up frames
    let offset;
    animation == true ? (offset = 0) : (offset = aSize * 4);
    for (let y = 0; y < 4; y++) {
      for (let x = 0; x < 8; x++) {
        this.frames.push({ x: x * -aSize, y: y * -aSize - offset });
      }
    }
    console.log(this.frames);

    //find starting spot - this will be changed later
    const tempX = chance.integer({ min: 0, max: screenw });
    const tempY = chance.integer({ min: 0, max: screenh });

    //set size, position, and velocity vectors
    this.size.add({ x: aSize, y: aSize }, true);
    this.position.add({ x: tempX, y: tempY }, true);
    this.velocity.x = chance.integer({ min: -4, max: 4 });
    this.velocity.y = chance.integer({ min: -4, max: 4 });

    this.texture = asteroid;
  }

  spawn() {}
  update(deltatime: number) {
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    //check for screen collision
    if (this.position.x > model.screenwidth) this.position.x = -10;
    if (this.position.x < -11) this.position.x = model.screenwidth - 20;
    if (this.position.y < -11) this.position.y = model.screenheight - 20;
    if (this.position.y > model.screenheight) this.position.y = -10;

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
  damage: number;
  constructor() {
    super("bullet");
    this.type = "BULLET";
  }
}

//TODO later
class Enemy {}

class Star {}
