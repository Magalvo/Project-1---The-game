console.log('JS Loaded');

const canvas = document.getElementById('obstacles');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const player1 = new Rambo();

const player2 = new Exterminator();

document.addEventListener('keydown', event => {
  event.preventDefault();
  switch (event.key) {
    case 'w':
      if (player1.y > 0) {
        player1.moveUp();
        console.log('w');
      }
      break;
    case 'a':
      if (player1.x > 0) {
        player1.moveLeft();
        console.log('a');
      }
      break;
    case 's':
      if (player1.y < canvas.height - 100) {
        player1.moveDown();
        console.log('s');
      }
      break;
    case 'd':
      if (player1.x < canvas.width - 100) {
        player1.moveRight();
        console.log('d');
      }
      break;
    case 'ArrowUp':
      if (player2.y > 0) {
        player2.moveUp();
      }
      break;
    case 'ArrowDown':
      if (player2.y < canvas.height - 100) {
        player2.moveDown();
      }
      break;
    case 'ArrowLeft':
      if (player2.x > 0) {
        player2.moveLeft();
      }
      break;
    case 'ArrowRight':
      if (player2.x < canvas.width - 100) {
        player2.moveRight();
      }
      break;
  }
});

function updateCanvas() {
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

  if (player1.loaded && player2.loaded) {
    player1.draw();
    player2.draw();
  }

  requestAnimationFrame(updateCanvas);
}

updateCanvas();

/* let background;
const backgroundImage = new Image();
backgroundImage.src =
  'https://static.vecteezy.com/system/resources/thumbnails/003/706/970/original/4k-3d-seamless-loop-of-traveling-to-glow-stars-filed-on-black-background-graphic-motion-overlay-effect-loop-with-galaxy-sky-twinkling-light-in-the-space-animation-galaxy-exploration-free-video.jpg';

backgroundImage.addEventListener('load', () => {
  background = new Background(backgroundImage);
  updateCanvas();
});
 */
