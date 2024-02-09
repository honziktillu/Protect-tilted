import { Enemy } from "./ui/entities.js";
import { Background } from "./ui/basic-ui.js";

const background = new Background();

const enemies = [];

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
  enemies.map((a) => {
    a.update();
  });
};
const render = () => {
  enemies.map((a) => {
    a.draw(ctx);
  })
};
const fps = () => {};

const loadData = async () => {
  const entitiesFile = await fetch("./res/data/entities.json");
  const data = await entitiesFile.json();
  Enemy.entitiesData = data;
}

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
      )
  })
}

window.onload = async () => {
  await loadData();
  console.log(Enemy.entitiesData);
  genEnemies();
  console.log(enemies);
  window.requestAnimationFrame(gameLoop);
};
