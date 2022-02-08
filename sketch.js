const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground; 
var box1, box2, box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20;
var ball, rope;

function setup(){
    createCanvas(windowWidth,windowHeight);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    background(180);
    Engine.update(engine);

}