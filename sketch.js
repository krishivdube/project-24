var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	paper = new Paper(width/2,200,20,20);

	box1=Bodies.rectangle(width/2,660,200,20,{isStatic:true});
box2=Bodies.rectangle(300,620,20,100,{isStatic:true})
box3=Bodies.rectangle(500,620,20,100,{isStatic:true})



	engine = Engine.create();
	world = engine.world;
	world = engine.world;
	world = engine.world;
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);


	Engine.run(engine);
	Engine.update(engine);
  
}


function draw() {

  rectMode(CENTER);


 paper.display();
  background(0);
  
  drawSprites();
 
}


