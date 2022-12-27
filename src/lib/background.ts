import { createNoise2D, NoiseFunction2D } from "simplex-noise";
import alea from "alea";
import chroma from "chroma-js";
import { Chance } from "chance";
import galaxyimg from "../assets/images/galaxy-Sheet.png";

type star = {
  color: string;
  x: number;
  y: number;
  r: number;
  twinkle: {
    isActive: boolean;
    counter: number;
  };
  isAnimated?: boolean;
  animationTik?: number;
};

type galaxy = {
  x: number;
  y: number;
  velocity: {
    x: number;
    y: number;
  };
  frame: number;
  tik: number;
};

export class BackGround {
  rng = alea("B");
  cnv: HTMLCanvasElement | undefined = undefined;
  galaxyImage = new Image();
  ctx: CanvasRenderingContext2D | undefined = undefined;
  chance = new Chance();
  tempnoise = createNoise2D(this.rng);
  noise2d = this.fbm2d(this.tempnoise, 2);
  colorScale = chroma.scale(["black", "1b082d"]);
  canvasWidth = 0;
  canvasHeight = 0;
  canvasData;
  dataCopy: Uint8ClampedArray;
  NUM_STAR1;
  NUM_STAR2;
  NUM_STAR3;
  NUM_GALAXY;
  starmap1: star[] = [];
  starmap2: star[] = [];
  starmap3: star[] = [];
  galaxies: galaxy[] = [];
  UIref;

  startime: number;
  lasttime: number;
  lastRenderUpdate: number = 0;
  renderInterval: number = 0.016;

  constructor(canvas: string, UI: any) {
    this.galaxyImage.src = galaxyimg;
    this.UIref = UI;
    (this.cnv as HTMLElement) = document.getElementById(canvas);
    this.ctx = (this.cnv as HTMLCanvasElement).getContext("2d");
    this.canvasWidth = this.cnv.clientWidth;
    this.canvasHeight = this.cnv.clientHeight;
    this.canvasData = this.ctx.getImageData(0, 0, this.canvasWidth, this.canvasHeight);
    this.NUM_STAR1 = Math.ceil((800 / 1920) * this.canvasWidth);
    this.NUM_STAR2 = Math.ceil((100 / 1920) * this.canvasWidth);
    this.NUM_STAR3 = Math.ceil((20 / 1920) * this.canvasWidth);
    this.NUM_GALAXY = Math.ceil((5 / 1920) * this.canvasWidth);
    this.cnv.setAttribute("width", this.canvasWidth.toString());
    this.cnv.setAttribute("height", this.canvasHeight.toString());

    for (let i = 0; i < this.NUM_STAR1; i++) {
      const color = this.chance.weighted(["FFFFFF", "0AF040", "2387F9", "F22626", "E88A20"], [50, 1, 1, 1, 1]);
      const x = this.chance.integer({ min: 0, max: 100 });
      const y = this.chance.integer({ min: 0, max: 100 });
      const r = this.chance.integer({ min: 1, max: 3 });
      this.starmap1.push({
        color: color,
        x: x,
        y: y,
        r: r,
        twinkle: {
          isActive: false,
          counter: 0,
        },
      });
    }

    for (let i = 0; i < this.NUM_STAR2; i++) {
      const color = this.chance.weighted(["FFFFFF", "0AF040", "2387F9", "F22626", "E88A20"], [40, 1, 1, 1, 1]);
      const x = this.chance.integer({ min: 0, max: 100 });
      const y = this.chance.integer({ min: 0, max: 100 });
      const r = this.chance.integer({ min: 2, max: 3 });
      this.starmap2.push({
        color: color,
        x: x,
        y: y,
        r: r,
        twinkle: {
          isActive: false,
          counter: 0,
        },
      });
    }

    for (let i = 0; i < this.NUM_STAR3; i++) {
      const color = this.chance.weighted(["FFFFFF", "0AF040", "2387F9", "F22626", "E88A20"], [30, 1, 1, 1, 1]);
      const x = this.chance.integer({ min: 0, max: 100 });
      const y = this.chance.integer({ min: 0, max: 100 });
      const r = this.chance.integer({ min: 4, max: 5 });
      if (r == 5) {
        this.starmap3.push({
          color: color,
          x: x,
          y: y,
          r: r,
          twinkle: {
            isActive: false,
            counter: 0,
          },
          isAnimated: false,
          animationTik: 0,
        });
      } else {
        this.starmap3.push({
          color: color,
          x: x,
          y: y,
          r: r,
          twinkle: {
            isActive: false,
            counter: 0,
          },
        });
      }
    }

    for (let i = 0; i < this.NUM_GALAXY; i++) {
      console.log("adding galaxies");
      const x = this.chance.integer({ min: 0, max: 100 });
      const y = this.chance.integer({ min: 0, max: 100 });
      const vx = this.chance.floating({ min: 0, max: 0.005 });
      const vy = this.chance.floating({ min: -0.005, max: 0.005 });
      const frame = this.chance.integer({ min: 0, max: 5 });
      this.galaxies.push({
        x: x,
        y: y,
        velocity: { x: vx, y: vy },
        frame: frame,
        tik: 0,
      });
    }
  }

  fbm2d(noise2D: NoiseFunction2D, octaves: number): NoiseFunction2D {
    return function fbm2dFn(x: number, y: number) {
      let value = 0.0;
      let amplitude = 1;
      for (let i = 0; i < octaves; i++) {
        value += noise2D(x, y) * amplitude;
        x *= 0.001;
        y *= 0.002;
        amplitude *= 1;
      }
      return value;
    };
  }

  hexToR(h: string): number {
    return parseInt(h.substring(0, 2), 16);
  }
  hexToG(h: string): number {
    return parseInt(h.substring(2, 4), 16);
  }
  hexToB(h: string): number {
    return parseInt(h.substring(4, 6), 16);
  }

  drawStar = (star: star) => {
    //x,y are percent of canvassize
    let alpha: number = 255;
    if (star.twinkle.isActive && star.twinkle.counter < 3) {
      alpha = 80;
      star.twinkle.counter += 1;
    } else if (star.twinkle.isActive && star.twinkle.counter >= 3) {
      star.twinkle.isActive = false;
      star.twinkle.counter = 0;
    } else {
      //random chance of twinkling
      if (this.chance.floating({ min: 0.0, max: 100.0 }) <= 0.07) {
        star.twinkle.counter += 1;
        star.twinkle.isActive = true;
      }
    }

    const newX = Math.floor((star.x / 100) * this.canvasWidth);
    const newY = Math.floor((star.y / 100) * this.canvasHeight);
    const index = this.canvasWidth * 4 * (newY - 1) + newX * 4;

    const red = this.hexToR(star.color);
    const green = this.hexToG(star.color);
    const blue = this.hexToB(star.color);

    if (!star.twinkle.isActive) {
      switch (star.r) {
        case 1:
          this.canvasData.data[index] = red;
          this.canvasData.data[index + 1] = green;
          this.canvasData.data[index + 2] = blue;
          this.canvasData.data[index + 3] = alpha;
          break;
        case 2:
          for (let i = 0; i < 2; i++) {
            this.canvasData.data[index + this.canvasWidth * i * 4] = red;
            this.canvasData.data[index + 1 + this.canvasWidth * i * 4] = green;
            this.canvasData.data[index + 2 + this.canvasWidth * i * 4] = blue;
            this.canvasData.data[index + 3 + this.canvasWidth * i * 4] = alpha;
            this.canvasData.data[index + 4 + this.canvasWidth * i * 4] = red;
            this.canvasData.data[index + 5 + this.canvasWidth * i * 4] = green;
            this.canvasData.data[index + 6 + this.canvasWidth * i * 4] = blue;
            this.canvasData.data[index + 7 + this.canvasWidth * i * 4] = alpha;
          }

          break;
        case 3:
          for (let i = 0; i < 3; i++) {
            if (i == 0 || i == 2) {
              this.canvasData.data[index + 4 + this.canvasWidth * i * 4] = red;
              this.canvasData.data[index + 5 + this.canvasWidth * i * 4] = green;
              this.canvasData.data[index + 6 + this.canvasWidth * i * 4] = blue;
              this.canvasData.data[index + 7 + this.canvasWidth * i * 4] = alpha;
            }
            if (i == 1) {
              this.canvasData.data[index + this.canvasWidth * i * 4] = red;
              this.canvasData.data[index + 1 + this.canvasWidth * i * 4] = green;
              this.canvasData.data[index + 2 + this.canvasWidth * i * 4] = blue;
              this.canvasData.data[index + 3 + this.canvasWidth * i * 4] = alpha;
              this.canvasData.data[index + 4 + this.canvasWidth * i * 4] = red;
              this.canvasData.data[index + 5 + this.canvasWidth * i * 4] = green;
              this.canvasData.data[index + 6 + this.canvasWidth * i * 4] = blue;
              this.canvasData.data[index + 7 + this.canvasWidth * i * 4] = alpha;
              this.canvasData.data[index + 8 + this.canvasWidth * i * 4] = red;
              this.canvasData.data[index + 9 + this.canvasWidth * i * 4] = green;
              this.canvasData.data[index + 10 + this.canvasWidth * i * 4] = blue;
              this.canvasData.data[index + 11 + this.canvasWidth * i * 4] = alpha;
            }
          }
          break;
        case 4:
          for (let i = 0; i < 4; i++) {
            if (i == 0 || i == 3) {
              this.canvasData.data[index + 4 + this.canvasWidth * i * 4] = red;
              this.canvasData.data[index + 5 + this.canvasWidth * i * 4] = green;
              this.canvasData.data[index + 6 + this.canvasWidth * i * 4] = blue;
              this.canvasData.data[index + 7 + this.canvasWidth * i * 4] = alpha;
              this.canvasData.data[index + 8 + this.canvasWidth * i * 4] = red;
              this.canvasData.data[index + 9 + this.canvasWidth * i * 4] = green;
              this.canvasData.data[index + 10 + this.canvasWidth * i * 4] = blue;
              this.canvasData.data[index + 11 + this.canvasWidth * i * 4] = alpha;
            }
            if (i == 1 || i == 2) {
              this.canvasData.data[index + this.canvasWidth * i * 4] = red;
              this.canvasData.data[index + 1 + this.canvasWidth * i * 4] = green;
              this.canvasData.data[index + 2 + this.canvasWidth * i * 4] = blue;
              this.canvasData.data[index + 3 + this.canvasWidth * i * 4] = alpha;
              this.canvasData.data[index + 4 + this.canvasWidth * i * 4] = red;
              this.canvasData.data[index + 5 + this.canvasWidth * i * 4] = green;
              this.canvasData.data[index + 6 + this.canvasWidth * i * 4] = blue;
              this.canvasData.data[index + 7 + this.canvasWidth * i * 4] = alpha;
              this.canvasData.data[index + 8 + this.canvasWidth * i * 4] = red;
              this.canvasData.data[index + 9 + this.canvasWidth * i * 4] = green;
              this.canvasData.data[index + 10 + this.canvasWidth * i * 4] = blue;
              this.canvasData.data[index + 11 + this.canvasWidth * i * 4] = alpha;
              this.canvasData.data[index + 12 + this.canvasWidth * i * 4] = red;
              this.canvasData.data[index + 13 + this.canvasWidth * i * 4] = green;
              this.canvasData.data[index + 14 + this.canvasWidth * i * 4] = blue;
              this.canvasData.data[index + 15 + this.canvasWidth * i * 4] = alpha;
            }
          }
          break;
        case 5:
          if (star.isAnimated) {
            star.animationTik += 1;
            if (star.animationTik >= 8) {
              star.animationTik = 0;
              star.isAnimated = false;
            }
          } else {
            //random chance that
            const roll = this.chance.floating({ min: 0.1, max: 100.0 });
            if (roll < 2.0) star.isAnimated = true;
          }

          for (let i = 0; i < 7; i++) {
            {
              if (i == 1 || i == 5) {
                this.canvasData.data[index + 8 + this.canvasWidth * i * 4] = red;
                this.canvasData.data[index + 9 + this.canvasWidth * i * 4] = green;
                this.canvasData.data[index + 10 + this.canvasWidth * i * 4] = blue;
                this.canvasData.data[index + 11 + this.canvasWidth * i * 4] = alpha;
              }
              if (i == 2 || i == 4) {
                this.canvasData.data[index + 4 + this.canvasWidth * i * 4] = red;
                this.canvasData.data[index + 5 + this.canvasWidth * i * 4] = green;
                this.canvasData.data[index + 6 + this.canvasWidth * i * 4] = blue;
                this.canvasData.data[index + 7 + this.canvasWidth * i * 4] = alpha;
                this.canvasData.data[index + 8 + this.canvasWidth * i * 4] = red;
                this.canvasData.data[index + 9 + this.canvasWidth * i * 4] = green;
                this.canvasData.data[index + 10 + this.canvasWidth * i * 4] = blue;
                this.canvasData.data[index + 11 + this.canvasWidth * i * 4] = alpha;
                this.canvasData.data[index + 12 + this.canvasWidth * i * 4] = red;
                this.canvasData.data[index + 13 + this.canvasWidth * i * 4] = green;
                this.canvasData.data[index + 14 + this.canvasWidth * i * 4] = blue;
                this.canvasData.data[index + 15 + this.canvasWidth * i * 4] = alpha;
              }
              if (i == 3) {
                this.canvasData.data[index + this.canvasWidth * i * 4] = red;
                this.canvasData.data[index + 1 + this.canvasWidth * i * 4] = green;
                this.canvasData.data[index + 2 + this.canvasWidth * i * 4] = blue;
                this.canvasData.data[index + 3 + this.canvasWidth * i * 4] = alpha;
                this.canvasData.data[index + 4 + this.canvasWidth * i * 4] = red;
                this.canvasData.data[index + 5 + this.canvasWidth * i * 4] = green;
                this.canvasData.data[index + 6 + this.canvasWidth * i * 4] = blue;
                this.canvasData.data[index + 7 + this.canvasWidth * i * 4] = alpha;
                this.canvasData.data[index + 8 + this.canvasWidth * i * 4] = red;
                this.canvasData.data[index + 9 + this.canvasWidth * i * 4] = green;
                this.canvasData.data[index + 10 + this.canvasWidth * i * 4] = blue;
                this.canvasData.data[index + 11 + this.canvasWidth * i * 4] = alpha;
                this.canvasData.data[index + 12 + this.canvasWidth * i * 4] = red;
                this.canvasData.data[index + 13 + this.canvasWidth * i * 4] = green;
                this.canvasData.data[index + 14 + this.canvasWidth * i * 4] = blue;
                this.canvasData.data[index + 15 + this.canvasWidth * i * 4] = alpha;
                this.canvasData.data[index + 16 + this.canvasWidth * i * 4] = red;
                this.canvasData.data[index + 17 + this.canvasWidth * i * 4] = green;
                this.canvasData.data[index + 18 + this.canvasWidth * i * 4] = blue;
                this.canvasData.data[index + 19 + this.canvasWidth * i * 4] = alpha;
              }
            }
            if (star.animationTik == 2 || star.animationTik == 3 || star.animationTik == 6 || star.animationTik == 7) {
              if (i == 0 || i == 6) {
                this.canvasData.data[index + 8 + this.canvasWidth * i * 4] = red;
                this.canvasData.data[index + 9 + this.canvasWidth * i * 4] = green;
                this.canvasData.data[index + 10 + this.canvasWidth * i * 4] = blue;
                this.canvasData.data[index + 11 + this.canvasWidth * i * 4] = alpha;
              }
              if (i == 3) {
                this.canvasData.data[index - 4 + this.canvasWidth * i * 4] = red;
                this.canvasData.data[index - 3 + this.canvasWidth * i * 4] = green;
                this.canvasData.data[index - 2 + this.canvasWidth * i * 4] = blue;
                this.canvasData.data[index - 1 + this.canvasWidth * i * 4] = alpha;
                this.canvasData.data[index + 20 + this.canvasWidth * i * 4] = red;
                this.canvasData.data[index + 21 + this.canvasWidth * i * 4] = green;
                this.canvasData.data[index + 22 + this.canvasWidth * i * 4] = blue;
                this.canvasData.data[index + 23 + this.canvasWidth * i * 4] = alpha;
              }
            }
            if (star.animationTik == 4 || star.animationTik == 5) {
              if (i == 0 || i == 6) {
                this.canvasData.data[index + 8 + this.canvasWidth * i * 4] = red;
                this.canvasData.data[index + 9 + this.canvasWidth * i * 4] = green;
                this.canvasData.data[index + 10 + this.canvasWidth * i * 4] = blue;
                this.canvasData.data[index + 11 + this.canvasWidth * i * 4] = alpha;
              }
              if (i == 1 || i == 5) {
                this.canvasData.data[index + this.canvasWidth * i * 4] = red;
                this.canvasData.data[index + 1 + this.canvasWidth * i * 4] = green;
                this.canvasData.data[index + 2 + this.canvasWidth * i * 4] = blue;
                this.canvasData.data[index + 3 + this.canvasWidth * i * 4] = alpha;
                this.canvasData.data[index + 16 + this.canvasWidth * i * 4] = red;
                this.canvasData.data[index + 17 + this.canvasWidth * i * 4] = green;
                this.canvasData.data[index + 18 + this.canvasWidth * i * 4] = blue;
                this.canvasData.data[index + 19 + this.canvasWidth * i * 4] = alpha;
              }
              if (i == 3) {
                this.canvasData.data[index - 4 + this.canvasWidth * i * 4] = red;
                this.canvasData.data[index - 3 + this.canvasWidth * i * 4] = green;
                this.canvasData.data[index - 2 + this.canvasWidth * i * 4] = blue;
                this.canvasData.data[index - 1 + this.canvasWidth * i * 4] = alpha;
                this.canvasData.data[index + 20 + this.canvasWidth * i * 4] = red;
                this.canvasData.data[index + 21 + this.canvasWidth * i * 4] = green;
                this.canvasData.data[index + 22 + this.canvasWidth * i * 4] = blue;
                this.canvasData.data[index + 23 + this.canvasWidth * i * 4] = alpha;
              }
            }
          }
          break;
      }
    }
  };

  drawGalaxy = (galaxy: galaxy) => {
    galaxy.x += galaxy.velocity.x;
    galaxy.y += galaxy.velocity.y;
    const newX = Math.floor((galaxy.x / 100) * this.canvasWidth);
    const newY = Math.floor((galaxy.y / 100) * this.canvasHeight);

    if (newX >= this.canvasWidth || newY < 0 || newY > this.canvasHeight) {
      galaxy.x = 0;
      galaxy.y = this.chance.integer({ min: 0, max: 100 });
      galaxy.velocity.x = this.chance.floating({ min: 0, max: 0.005 });
      galaxy.velocity.y = this.chance.floating({ min: -0.01, max: 0.005 });
    }
    const sx = galaxy.frame * 32;

    this.ctx.drawImage(this.galaxyImage, sx, 0, 32, 32, newX, newY, 32, 32);
  };

  shiftStars = () => {
    this.starmap1.forEach(star => {
      star.x += 0.002;
      if (star.x >= 99.5) {
        star.x = 0.2;
        star.y = this.chance.integer({ min: 0, max: 100 });
      }
    });
    this.starmap2.forEach(star => {
      star.x += 0.005;
      if (star.x >= 99) {
        star.x = 1;
        star.y = this.chance.integer({ min: 0, max: 100 });
      }
    });
    this.starmap3.forEach(star => {
      star.x += 0.0075;
      if (star.x >= 98) {
        star.x = 1.5;
        star.y = this.chance.integer({ min: 0, max: 100 });
      }
    });
  };

  fillCanvas = () => {
    const RGBarray = [];
    console.log("entering loop");
    for (let tempX = 0; tempX < this.canvasWidth; tempX++) {
      for (let tempY = 0; tempY < this.canvasHeight; tempY++) {
        let [r, g, b] = this.colorScale((this.noise2d(tempX, tempY) + 1) * 0.5).rgb();
        this.canvasData.data[(tempX + tempY * this.canvasWidth) * 4 + 0] = r;
        this.canvasData.data[(tempX + tempY * this.canvasWidth) * 4 + 1] = g;
        this.canvasData.data[(tempX + tempY * this.canvasWidth) * 4 + 2] = b;
        this.canvasData.data[(tempX + tempY * this.canvasWidth) * 4 + 3] = 255;
      }
    }
    this.dataCopy = new Uint8ClampedArray(this.canvasData.data);
  };

  update = (timestamp: number) => {
    if (this.startime == undefined) {
      this.startime = timestamp;
      this.lasttime = timestamp;
    }
    let deltaTime = (timestamp - this.lasttime) / 1000;
    if (deltaTime > 1.5) {
      deltaTime = 0;
      this.lasttime = timestamp;
    }

    this.lasttime = timestamp;
    this.lastRenderUpdate += deltaTime;

    while (this.lastRenderUpdate >= this.renderInterval) {
      this.UIref.update();
      this.shiftStars();
      this.canvasData.data.set(this.dataCopy);
      this.starmap1.forEach(star => this.drawStar(star));
      this.starmap2.forEach(star => this.drawStar(star));
      this.starmap3.forEach(star => this.drawStar(star));
      this.ctx.putImageData(this.canvasData, 0, 0);
      this.ctx.globalAlpha = 0.5;
      this.galaxies.forEach(gal => {
        gal.tik += 1;
        if (gal.tik >= 50) {
          gal.tik = 0;
          gal.frame += 1;
        }
        if (gal.frame >= 5) gal.frame = 0;
        this.drawGalaxy(gal);
      });
      this.ctx.globalAlpha = 1;

      this.lastRenderUpdate -= this.renderInterval;
    }
    requestAnimationFrame(this.update);
  };
}
