import { GameState, State } from "../states/gameState";

class MenuState extends State {
  public constructor() {
    super("menu");
  }
}

class PlayState extends State {
  public constructor() {
    super("play");
  }
}

class TestState extends State {
  public constructor(name) {
    super(name);
  }
}

class PromiseState extends State {
  public constructor() {
    super("promise");
  }

  public enter(_previous: State, ...params: any): Promise<string> {
    const myPromise = new Promise<string>(resolve => {
      setTimeout(() => {
        resolve("foo");
      }, 300);
    });
    return myPromise;
  }
  public exit(_next: State, ...params: any): Promise<string> {
    const myPromise = new Promise<string>(resolve => {
      setTimeout(() => {
        resolve("foo");
      }, 300);
    });
    return myPromise;
  }
}

GameState.create(MenuState, PlayState, PromiseState);
GameState.set("menu");

GameState.create("test1", "test2", "test3", "test4", TestState);

describe("Game State Test", () => {
  it("check gamestate menu", () => {
    expect(GameState.get()).toMatchObject({ state: { machine: "default", name: "menu" } });
  });
});

describe("Changing States", () => {
  it("check changing state", () => {
    GameState.set("play");
    expect(GameState.get()).toMatchObject({ state: { machine: "default", name: "play" } });
  });
});

describe("Testing String State 1", () => {
  it("check changing state", () => {
    GameState.set("test1");
    expect(GameState.get()).toMatchObject({ state: { machine: "default", name: "test1" } });
  });
});

describe("Testing String State 2", () => {
  it("check changing state", () => {
    GameState.set("test4");
    expect(GameState.get()).toMatchObject({ state: { machine: "default", name: "test4" } });
  });
});

describe("Testing Promise State: Enter", () => {
  it("check changing state", async () => {
    await GameState.set("promise");
    expect(GameState.get()).toMatchObject({ state: { machine: "default", name: "promise" } });
  });
});

describe("Testing Promise State: Exit", () => {
  it("check changing state", async () => {
    await GameState.set("menu");
    expect(GameState.get()).toMatchObject({ state: { machine: "default", name: "menu" } });
  });
});
