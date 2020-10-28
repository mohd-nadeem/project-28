class Stone {
  constructor(x, y, r) {
    var options = {
      isStatic: false,
      friction: 1,
      density: 0.5
    }
    this.body = Bodies.circle(x, y, r, options);
    this.r = r;
    this.image = loadImage("Plucking mangoes/stone.png");
    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;
    image(this.image, pos.x, pos.y, this.r, this.r);

  }
}