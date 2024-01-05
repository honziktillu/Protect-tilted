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
}

const clear = () => {}
const update = () => {}
const render = () => {}
const fps = () => {}

window.onload = () => {
  window.requestAnimationFrame(gameLoop);
}
