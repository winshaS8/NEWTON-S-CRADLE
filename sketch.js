
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var roof,rope1,rope2,rope3,rope4,rope5,keyCode; 
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	bob1 = new bob(200,400,30);
	bob2 = new bob(260,400,30);
	bob3 = new bob(320,400,30);
	bob4 = new bob(380,400,30);
	bob5 = new bob(440,400,30);

	roof = new ground(315,100,350,15);
	rope1 = new rope(bob1.body,{x:200,y:100});
	rope2 = new rope(bob2.body,{x:260,y:100});
    rope3 = new rope(bob3.body,{x:320,y:100});
    rope4 = new rope(bob4.body,{x:380,y:100});
    rope5 = new rope(bob5.body,{x:440,y:100});
	
}


function draw() {
  rectMode(CENTER);
  background("white");
  
 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();
 roof.display();
 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();
// KeyPressed();
}

function KeyPressed()
{
if (KeyCode === UP_ARROW)
{
	Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-1,y:0});
}
}