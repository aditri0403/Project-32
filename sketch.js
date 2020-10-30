const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1,stand;
var block1,block2,block3,block4,block5,block6,block7,block8,block9;
var polygon,slingShot;
var count = 0;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  ground1 = new ground(400,380,800,20);
  stand = new ground(390,350,200,40);
  
  block1 = new block(330,310,30,40);
  block2 = new block(360,310,30,40);
  block3 = new block(390,310,30,40);
  block4 = new block(420,310,30,40);
  block5 = new block(450,310,30,40);
  
  block6 = new block(360,270,30,40);
  block7 = new block(390,270,30,40);
  block8 = new block(420,270,30,40);

  block9 = new block(390,230,30,40);
  
  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);

  slingShot = new slingshot(polygon,{x:100,y:200});
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  ground1.display();
  stand.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display(); 
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score(); 
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  ground1.display();
  ground1.display();
  ground1.display();
  ground1.display();
  ground1.display();
  ground1.display();
  slingShot.display();
  ellipse(polygon.position.x,polygon.position.y,20,20);
  text("SCORE : " + count, 700,40);
  Engine.update(engine);
  drawSprites();
}
function mouseReleased(){
  slingShot.fly();
}
function mouseDragged(){
  Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}
function keyPressed (){
  if(keyCode === 32){
    slingShot.attach(polygon);
  }
}
