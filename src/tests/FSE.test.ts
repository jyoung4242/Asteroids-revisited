import { PlayState } from "../states/game";
import { GameState } from "../states/gameState";

GameState.create(PlayState);

describe("create FSE", () => {
  GameState.set("game", "default", {});
  test("Test Running", () => {
    expect(PlayState.running).toBe(true);
  });
});
