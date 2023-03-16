class Rambo {
  constructor() {
    this.x = 25;
    this.y = canvas.clientHeight / 2 - 10;
    this.life = 100;
    this.atack = 20;
    this.loaded = false;

    const img = new Image();
    img.addEventListener('load', () => {
      //once the img is loaded, draw it
      this.loaded = true;
      this.img = img;
      this.draw();
    });

    img.src = 'https://art.pixilart.com/thumb/7ddc41b8ab71f35.png';
  }
  moveUp() {
    this.y -= 25;
  }

  moveDown() {
    this.y += 25;
  }

  moveLeft() {
    this.x -= 25;
  }

  moveRight() {
    this.x += 25;
  }

  draw() {
    ctx.drawImage(this.img, this.x, this.y, 100, 100);
  }
}
