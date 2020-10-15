class Ground {
  constructor(x, y, widht, height) {
    var options = {
      isStatic: true
    }
    this.body = Bodies.rectangle(x, y, widht, height, options);
    this.widht = widht;
    this.height = height;

    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;
    rectMode(CENTER);
    stroke("gray");
    fill("gray");
    rect(pos.x, pos.y, this.widht, this.height);

  }
};