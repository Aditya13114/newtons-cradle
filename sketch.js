
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1000,1000);


	engine = Engine.create();
	world = engine.world;

	
	bob1 = new Bob(400,590,50);
	thread1 = new Thread(bob1.body,{x:400, y:70})
	
	bob2 = new Bob(500,590,50);
	thread2 = new Thread(bob2.body,{x:500, y:70})

	bob3 = new Bob(600,590,50);
	thread3 = new Thread(bob3.body,{x:600, y:70})

	bob4 = new Bob(700,590,50);
	thread4 = new Thread(bob4.body,{x:700, y:70})

	bob5 = new Bob(800,590,50);
	thread5 = new Thread(bob5.body,{x:800, y:70})

	 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("green");
  
  bob1.display();
  thread1.display();
  bob2.display();
  thread2.display();
  bob3.display();
  thread3.display();
  bob4.display();
  thread4.display();
  bob5.display();
  thread5.display();
  rect(610,70,480,20);
  
 
}

 function keyPressed(){
	 if(keyCode === 32){
		 Matter.Body.applyForce(bob5.body, bob4.body.position,{x:300, y: -120})
	 }
 }
 
 

