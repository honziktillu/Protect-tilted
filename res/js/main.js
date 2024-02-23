import { Enemy } from "./ui/entities.js";
import { Background } from "./ui/basic-ui.js";
import { Twins } from "./ui/twins.js";

const background = new Background();
const twins = new Twins(100, 495, 50, 245, 610);
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let mouse = {
  x: 0,
  y: 0,
};

document.addEventListener("click", (e) => {
  const rect = canvas.getBoundingClientRect();
  mouse.x = ((e.clientX - rect.left) / (rect.right - rect.left)) * canvas.width;
  mouse.y = ((e.clientY - rect.top) / (rect.bottom - rect.top)) * canvas.height;
});

const enemies = [];

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
  enemies.map((a) => {
    a.update();
    twins.detectCollision(a);
  });
};
const render = () => {
  twins.draw(ctx);
  enemies.map((a) => {
    a.draw(ctx);
  });
};
const fps = () => {};

const loadData = async () => {
  const entitiesFile = await fetch("./res/data/entities.json");
  const data = await entitiesFile.json();
  Enemy.entitiesData = data;
};

const genEnemies = () => {
  Enemy.entitiesData.map((a) => {
    // push() - prida novou vec do pole
    enemies.push(
      new Enemy(
        a.name,
        a.hp,
        a.dmg,
        a.imagePath,
        a.width,
        a.height,
        a.velocity,
        a.type
      )
    );
  });
};

window.onload = async () => {
  await loadData();
  console.log(Enemy.entitiesData);
  genEnemies();
  console.log(enemies);
  window.requestAnimationFrame(gameLoop);
};
