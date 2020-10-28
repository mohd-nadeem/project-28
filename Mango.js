class Mango {
    constructor(x, y) {
        var options = {
            isStatic: true,
            restituton: 0.3,
            friction: 0.5,
            density: 1
        }

        this.image = loadImage("Plucking mangoes/mango.png");
        this.body = Bodies.circle(x, y, 30, options);
        this.r = 30
        World.add(world, this.body);

    }

    display() {
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.r*2, this.r*2);
    }

}