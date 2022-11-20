import { v4 as uuidv4 } from "uuid";
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
}

class Entity {
  position: Vector = new Vector(0, 0);
  size: Vector = new Vector(0, 0);
  velocity: Vector = new Vector(0, 0);
  angle: number = 0;
  speed: number = 0;
  type: string;
  id: string;
  name: string;
  radius: number;
  isVisible: boolean = false;

  constructor(name: string) {
    this.name = name;
    this.id = uuidv4();
  }

  update() {}
}

export class Player extends Entity {
  health: number;
  exp: number;
  lives: number;
  texture: string = plr;
  constructor(screenw: number, screenh: number) {
    super("Player");
    this.type = "PLAYER";
    this.health = 25;
    this.exp = 0;
    this.lives = 3;
    let tempSize = 0;
    if (screenw <= screenh) tempSize = screenw / 15;
    else tempSize = screenh / 15;
    this.size.add({ x: tempSize, y: tempSize }, true);
    this.position.add({ x: screenw / 2 - tempSize / 2, y: screenh / 2 - tempSize / 2 }, true);
  }

  turnLeft() {}
  turnRight() {}
  accelerate() {}
  decelerate() {}
  fire() {}
  update() {}
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
  update() {}
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
