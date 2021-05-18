
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(windowWidth - 1, windowHeight - 3);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof = new roofi(width/2, height/2 - 300, 480, 30)

	bob1 = new bob(width/2, height/2 + 100 )
	bob2 = new bob(width/2 - 80, height/2 + 100 )
	bob3 = new bob(width/2 - 160, height/2 + 100 )
	bob4 = new bob(width/2 + 80,height/2 + 100)
	bob5 = new bob(width/2 + 160, height/2+100)

	rope1 = new chain(bob1.body, roof.body, 0, 0)
	rope2 = new chain(bob2.body, roof.body, -80, 0)
	rope3 = new chain(bob3.body, roof.body, -160, 0)
	rope4 = new chain(bob4.body, roof.body, 80, 0)
	rope5 = new chain(bob5.body, roof.body, 160, 0)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('black');
	

  drawSprites();
  display()
}

function display(){
	roof.display()
	bob1.display()
	bob2.display()
	bob3.display()
	bob4.display()
	bob5.display()
	rope1.display()
	rope2.display()
	rope3.display()
	rope4.display()
	rope5.display()
}

function keyPressed(){

	if(keyCode === 32){
		//Matter.body.setStatic(bob2.body, false)
		Matter.Body.applyForce(bob3.body, bob2.body.position, {x : -1000, y : 0})

	}
}



