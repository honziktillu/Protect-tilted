import { Enemy } from "./ui/entities.js";
import { Background } from "./ui/basic-ui.js";

const battleBus = new Enemy("BattleBus", 50, 1, 0, 50, 300);
const fnKid = new Enemy("fnKid", 50, 1, 2, 50, 100);
const background = new Background();

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const gameLoop = () => {
  //clear
  clear();
  //update
  update();
  //render
  render();
  //fps
  fps();
  //gameLoop znovu
  window.requestAnimationFrame(gameLoop);
};

const clear = () => {
  canvas.width = 1280;
  canvas.height = 720;
  background.draw(ctx);
};

const update = () => {
  battleBus.update();
  fnKid.update();
};
const render = () => {
  battleBus.draw(ctx);
  fnKid.draw(ctx);
};
const fps = () => {};

window.onload = () => {
  window.requestAnimationFrame(gameLoop);
};
