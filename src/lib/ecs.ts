import { v4 as uuidv4 } from "uuid";
import { model } from "..";
// Load Chance
var Chance = require("chance");
// Instantiate Chance so it can be used
var chance = new Chance();

import plr from "../assets/images/player1.png";

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
  travelAngle: number;
  thrust: boolean;

  constructor(screenw: number, screenh: number) {
    super("Player");
    this.type = "PLAYER";
    this.health = 25;
    this.exp = 0;
    this.lives = 3;
    let tempSize = 0;
    this.travelAngle = 0;
    this.thrust = false;
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
  }

  update(updatetime: number) {
    //set thrust
    if (this.thrust) {
      console.log("update: ", updatetime);
      this.velocity.x += Math.cos(this.angle2rad(this.travelAngle)) * updatetime * 125;
      this.velocity.y += Math.sin(this.angle2rad(this.travelAngle)) * updatetime * 125;
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
  constructor(screenw: number, screenh: number) {
    super("asteroid");
    this.type = "ASTEROID";
    this.health = 25;
    this.reward = chance.integer({ min: 5, max: 25 });
    let tempSize = 0;
    if (screenw <= screenh) tempSize = screenw / 6;
    else tempSize = screenh / 6;
    const aSize = chance.integer({ min: 20, max: tempSize });
    const tempX = chance.integer({ min: 0, max: screenw });
    const tempY = chance.integer({ min: 0, max: screenh });

    this.size.add({ x: aSize, y: aSize }, true);
    this.position.add({ x: tempX, y: tempY }, true);
  }

  spawn() {}
  update(deltatime: number) {}
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
