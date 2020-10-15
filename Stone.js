class Stone{
    constructor(x, y, radius) {
        var options = {
          isStatic: false,
          friction: 1,
          density: 0.5
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        this.image = loadImage("Plucking mangoes/stone.png");
        World.add(world, this.body);
      }
      display(){
        var pos = this.body.position;
        image(this.image, pos.x, pos.y, this.radius, this.radius);
        
      }
}