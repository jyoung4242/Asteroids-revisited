import { Howl } from "howler";
import bgm from "../assets/audio/bgm.mp3";
import playerfire from "../assets/audio/playerfire.mp3";
import ship2Ast from "../assets/audio/Ship2Asteroid.mp3";
import AstBoom from "../assets/audio/boom.mp3";
import targetHit from "../assets/audio/targetHit.mp3";
import col1 from "../assets/audio/collision1.mp3";
import col2 from "../assets/audio/collision2.mp3";
import col3 from "../assets/audio/collision3.mp3";

export class SFX {
  pFire = new Howl({ src: playerfire });
  s2a = new Howl({ src: ship2Ast });
  astBoom = new Howl({ src: AstBoom });
  targetHit = new Howl({ src: targetHit });
  col1 = new Howl({ src: col1 });
  col2 = new Howl({ src: col2 });
  col3 = new Howl({ src: col3 });

  gameSfx = {
    playerfire: this.pFire,
    ship2asteroid: this.s2a,
    astBoom: this.astBoom,
    targetHit: this.targetHit,
    col1: this.col1,
    col2: this.col2,
    col3: this.col3,
  };

  constructor() {}

  play(sfx: string) {
    this.gameSfx[sfx].play();
  }
}
export class BGM {
  bgm: Howl;
  muted: boolean = false;

  constructor() {
    this.bgm = new Howl({
      src: bgm,
      loop: true,
    });
  }
  play() {
    this.bgm.play();
  }
  toggleMute() {
    if (this.muted) {
      this.muted = false;
      this.bgm.mute(false);
    } else {
      this.muted = true;
      this.bgm.mute(true);
    }
  }
}
