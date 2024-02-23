// OOP
// vlastnosti objektu - atributy
// šablona - třída (class)
// třída (class) má vždy první písmeno velké

export class Enemy {
  // static - dana vec patri tride (v tomto pripade tride Enemy)
  // Vec pouzivame pomoci zapisu Trida.vec
  // Enemy.entitiesData
  static entitiesData;

  //constructor - metoda ktera se vola pri vytvoreni objektu
  constructor(name, hp, dmg, imagePath, width, height, velocity, type) {
    //this - ukazuje na vzniklou instanci - kopii od tridy
    this.name = name;
    this.hp = hp;
    this.dmg = dmg;
    this.imagePath = imagePath;
    this.img = new Image();
    this.img.src = this.imagePath;
    this.position = {
      x: 0,
      y: 0,
    };
    if (type === "ground") {
      this.position.y = 550;
    }
    this.ratio = 0.5;
    this.size = {
      width: width * this.ratio,
      height: height * this.ratio,
    };
    this.velocity = {
      x: velocity,
    };
    this.type = type;
  }

  draw(ctx) {
    ctx.drawImage(
      this.img,
      this.position.x,
      this.position.y,
      this.size.width,
      this.size.height
    );
  }

  update() {
    this.move();
  }

  move() {
    this.position.x += this.velocity.x;
  }

  detectCollision(mouse) {
    if (
      this.position.x < mouse.x + 5 &&
      this.position.x + this.size.width > mouse.x &&
      this.position.y < mouse.y + 5 &&
      this.position.y + this.size.height > mouse.y
    ) {
      // Collision detected!
      this.position.x = -50;
      return true;
    }
    return false;
  }
}

//const myEnemy = new Enemy("Enemy 1", 100, 12); //vytvoreni kopie od šablony - objekt(instance)
