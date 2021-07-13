const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,pig1,log1;
var bird,pig;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,370,70,70);
    box2 = new Box(920,370,70,70);
    ground = new Ground(600,height,1200,20);
    pig1 = new Pig(820,370);
    log1 = new Log(810,335,PI/2)
    box3= new Box(700,280,70,70);
    box4 = new Box(920,280,70,70);
    pig2 = new Pig(820,280);
    log2= new Log(810,255,PI/2)
    bird = new Bird(200,200);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    bird.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
}