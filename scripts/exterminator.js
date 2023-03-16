class Exterminator {
  constructor() {
    this.x = canvas.clientWidth - 100;
    this.y = canvas.clientHeight / 2 - 10;
    this.life = 100;
    this.atack = 20;
    this.loaded = false;

    const img2 = new Image();
    img2.addEventListener('load', () => {
      //once the img is loaded, draw it
      this.loaded = true;
      this.img = img2;
      this.draw();
    });

    img2.src = 'https://art.pixilart.com/b206961bc00c1bd.png';
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
