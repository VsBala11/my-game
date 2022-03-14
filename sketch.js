const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;

var Ob1Image,Ob1
var Ob2Image,Ob2
var Ob3Image,Ob3
var Ob4Image,Ob4
var Ob5Image,Ob5
var Ob6Image,Ob6
var Platform1Image,Platform1
var Platform2Image,Platform2
var catSitImage,catSit
var catStandImage,catStand
var catTailMoveImage,catTailMove
var cat

function preload(){

Ob1Image= loadImage("../assets/Ob1.png");
Ob2Image= loadImage("../assets/Ob2.png");
Ob3Image= loadImage("../assets/Ob3.png");
Ob4Image= loadImage("../assets/Ob4.png");
Ob5Image= loadImage("../assets/Ob5.png");
Ob6Image= loadImage("../assets/Ob6.png");
Platform1Image= loadImage("../assets/Platform_1.png");
Platform2Image= loadImage("../assets/Platform_2.png");
catSitImage= loadImage("../assets/Cat_Sit.png");
catStandImage= loadImage("../assets/Cat_Stand.png");
catTailMoveImage= loadAnimation("../assets/Cat_Fly1.png","../assets/Cat_Fly2.png");


catSitImage.playing=true;
catStandImage.playing=true;
catTailMoveImage.playing=true;


}


function setup() 
{
  
  createCanvas(500,700);
  

  

 /* var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
  if(isMobile){
    canH=displayHeight;
    canW=displayWidth;
    createCanvas(displayWidth+80,displayHeight);
  }
  
  else{
    canW=windowWidth;
    canH=windowHeight;
    createCanvas(windowWidth,windowHeight);
  }
*/
  engine = Engine.create();
  world = engine.world;

  cat = createSprite(250,670,100,100);
  // cat.addImage(catSitImage)
  cat.scale = 0.4;


    //catSit.addImage("catSit",catSitImage);
    //catStand.addImage("catStand",catStandImage);
    cat.addAnimation("catTailMove",catTailMoveImage); 
   // cat.changeAnimation("catTailMove")
  
  Ob1 = createSprite(0,600,100,100);
  Ob1.addImage(Ob1Image);
  Ob1.velocity.x=3
  Ob1.scale=0.3
    
  Ob2 = createSprite(500,520,100,100);
  Ob2.addImage(Ob2Image);
  Ob2.velocity.x=-2
  Ob2.scale=0.3

  Ob3 = createSprite(0,440,100,100);
  Ob3.addImage(Ob3Image);
  Ob3.velocity.x=3
  Ob3.scale=0.3

  Ob4 = createSprite(500,340,100,100);
  Ob4.addImage(Ob4Image);
  Ob4.velocity.x=-1.5
  Ob4.scale=0.3

  Ob5 = createSprite(500,260,100,100);
  Ob5.addImage(Ob5Image);
  Ob5.velocity.x=-4
  Ob5.scale=0.5


  Ob6 = createSprite(0,60,100,100);
  Ob6.addImage(Ob6Image);
  Ob6.velocity.x=2
  Ob6.scale=0.2

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  


}


function draw (){
    background("#130642")  


    drawSprites();


   


    Engine.update(engine);

    World.add(engine.world,cat);


    if(keyDown(37)){
      cat.x-=2
    }
    

    if(keyDown(38)){
      cat.y-=2
    }
    

    if(keyDown(39)){
      cat.x+=2
    }
    
    if(keyDown(40)){
      cat.y+=2
    }
    
   


}