
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree, treeImg;
var ground;
var stone;
var boy, boyImg;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7;
var shootingBand;

function preload() {
	treeImg = loadImage("Plucking mangoes/tree.png");
	boyImg = loadImage("Plucking mangoes/boy.png")
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	// tree = new Tree(treeImg);

	ground = new Ground(800, 680, 1600, 20);

	//boy = new Boy();

	stone = new Stone(220, 520, 30, 30);

	mango1 = new Mango(1100, 180);
	mango2 = new Mango(1040, 200);
	mango3 = new Mango(1200, 250);
	mango4 = new Mango(1080, 300);
	mango5 = new Mango(1140, 330);
	mango6 = new Mango(1200, 200);
	mango7 = new Mango(1100, 320);

	shootingBand = new Elastic(stone.body, { x: 240, y: 520 });

}


function draw() {
	rectMode(CENTER);
	background("lightGray");

	//tree.display();

	image(treeImg, 910, 100, 500, 600);
	image(boyImg, 200, 440, 200, 300);

	ground.display();

	//boy.display();

	stone.display();

	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();

	shootingBand.display();

	detectCollision(stone, mango1);
	detectCollision(stone, mango2);
	detectCollision(stone, mango3);
	detectCollision(stone, mango4);
	detectCollision(stone, mango5);
	detectCollision(stone, mango6);
	detectCollision(stone, mango7);

	drawSprites();

}

function keyPressed() {
	if (keyCode === 32) {
		Matter.Body.setPosition(stone.body, { x: 240, y: 520 })
		shootingBand.attach(stone.body);
	}

}

function mouseDragged() {
	Matter.Body.setPosition(stone.body, { x: mouseX, y: mouseY })
}

function mouseReleased() {
	shootingBand.fly()
}

function detectCollision(Lstone, Lmango) {
	mangoBodyPosition = Lmango.body.position
	stoneBodyPosition = Lstone.body.position

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	if (distance <= Lmango.r + Lstone.r) {
		Matter.Body.setStatic(Lmango.body, false)
	}
}

