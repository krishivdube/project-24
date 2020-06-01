var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var paper
var box1, box2, box3
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
	engine = Engine.create();
	world = engine.world;
	
	paper = new Paper(width/2,200,20,20);

	box1=Bodies.rectangle(width/2,660,200,20,{isStatic:true});
box2=Bodies.rectangle(300,620,20,100,{isStatic:true})
box3=Bodies.rectangle(500,620,20,100,{isStatic:true})
World.add(world,box1)
World.add(world,box2)
World.add(world,box3)


	
	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);


	Engine.run(engine);

}


function draw() {
	Engine.update(engine);
  
  rectMode(CENTER);
rect(box1.position.x,box1.position.y,200,20)
	rect(box2.position.x,box2.position.y,20,100)
	rect(box3.position.x,box3.position.y,20,100)

 paper.display();
  background(0);
  
  drawSprites();
 
}



