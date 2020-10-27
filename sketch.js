
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,ground,box1,box2,box3;



function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Paper(30,650,10);
	box1 = new Box(650,590,10);
	box2 = new Boxx(710,650,20);
	box3 = new Boxxx(770,590,10);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(rgb(0, 0, 0));
  
	ball.display();
	box1.display();
	box2.display();
	box3.display();
}

function keyPressed(){
	if(keyCode === RIGHT_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
}

