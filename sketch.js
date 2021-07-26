const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbinObj,groundObject, paperObject;	
var world;


function setup()
{
    createCanvas(1600, 700);

    paperObject = new Paper(200, 640);

    engine = Engine.create();
    world = engine.world;

    groundObject=new ground(width/2,670,width,20);
    dustbinObj=new dustbin(1200,650);
}


function draw()
{
    background(230);
    Engine.update(engine);

    groundObject.display();
    dustbinObj.display();
    paperObject.display();
}

function keyPressed()
{
    if(keyCode === UP_ARROW)
    {
        Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-145});
    }
}
