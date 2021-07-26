const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var hero_1;
var heroImg;
var block_1, block_2, block_3, block_4, block_5;
var block_6, block_7, block_8, block_9, block_10, block_11;
var block_12, block_13, block_14, block_15, block_16;
var monster_1;
var ground_1

function preload() {
//preload the images here
bg = loadImage("GamingBackground.png");
}

function setup() {
  createCanvas(1200,600);
  // create sprites here

  engine = Engine.create();
  world = engine.world
  hero_1 = new hero(150,400,200,200);

  block_1 = new block(500,200,50,50);
  block_2 = new block(500,250,50,50);
  block_3 = new block(500,300,50,50);
  block_4 = new block(500,350,50,50);
  block_5 = new block(500,400,50,50);
  block_6 = new block(700,150,50,50);
  block_7 = new block(700,200,50,50);
  block_8 = new block(700,250,50,50);
  block_9 = new block(700,300,50,50);
  block_10 = new block(700,350,50,50);
  block_11 = new block(700,400,50,50);
  block_12 = new block(900,200,50,50);
  block_13 = new block(900,250,50,50);
  block_14 = new block(900,300,50,50);
  block_15 = new block(900,350,50,50);
  block_16 = new block(900,400,50,50);

  monster_1 = new monster(1000,300,100,100);

  ground_1 = new Ground(500,430,1200,20);

}

function draw() {
  background("yellow");
  Engine.update(engine)
  hero_1.display();
  block_1.display();
  block_2.display();
  block_3.display();
  block_4.display();
  block_5.display();
  block_6.display();
  block_7.display();
  block_8.display();
  block_9.display();
  block_10.display();
  block_11.display();
  block_12.display();
  block_13.display();
  block_14.display();
  block_15.display();
  block_16.display();

  monster_1.display();

  ground_1.display();

}

function mouseDragged(){
  Matter.Body.setPosition(hero_1.body,{x:mouseX, y:mouseY});
}