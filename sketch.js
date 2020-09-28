const Engine = Matter.Engine;
const World = Matter.World;
const Bodies  = Matter.Bodies;     

var engine, world, ground , ball;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  var options = {
    isStatic: true
  }
  ground = Bodies.rectangle(200, 390, 400, 20, options);
  World.add(world, ground);

  var options2 = {
    restitution: 1.0
  }
  ball = Bodies.circle(100, 50, 10 , options2);
  World.add(world , ball);
 // console.log(groun);
  //console.log(object.position.x);
//  console.log(object.position.y);
}

function draw() {
  background(0);
  Engine.update(engine);  
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400, 20)

  ellipseMode(RADIUS);
  ellipse(ball.position.x , ball.position.y , 10);
}