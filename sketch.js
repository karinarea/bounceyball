//NameSpacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;

function setup() {
  createCanvas(400,400);

  //An engine which we can tune according to our needs
  engine = Engine.create();
  world = engine.world;

  var ground_options = { isStatic: true };
  
  ground = Bodies.rectangle(200, 390, 400, 20, ground_options);
  World.add(world, ground);
  var ball_options = {restitution: 0.8};
  ball = Bodies.circle(200,100,20, ball_options);
  World.add(world,ball);
  console.log(ball);
}

function draw() {
  background(0);  
  Engine.update(engine);

  //To take the x & y at the centre of the shape
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400, 20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
  
}

/*
ellipse(x, y, r1, r2);


PHYSICS ENGINE
-box2d
-p2
-matter

*****MATTER LIBRARY******
1. Engine - Universe ---> all the laws of physics are followed
        Matter.Engine
2. World - Physical world where all the objects are added
        Matter.World
3. Bodies - Objects
        Matter.Bodies

NameSpacing - Nicknames
*/