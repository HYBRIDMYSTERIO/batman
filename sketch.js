const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var drops, umbrella;
var maxDrops = 100;

function preload(){
    
}

function setup(){
   
    var canvas = createCanvas(700,700);

    engine = Engine.create();
    world = engine.world;

    umbrella = new Umbrella();

    for(var i=0; i<maxDrops; i++){
        drops.push(new Drop(random(0,400), random(0,400)));
    }
}


function draw(){
    
    background("black");
  Engine.update(engine);

  umbrella.displayumbrella();
  drops.display();

}   

