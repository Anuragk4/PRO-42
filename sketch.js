var iss,spacecraft;
var hasDocked;

var hasDocked=false;
function preload(){
  issimg=loadImage("dock/iss.png")
  bgimg=loadImage("dock/spacebg.png")
  space1=loadImage("dock/spacecraft1.png")
  space2=loadImage("dock/spacecraft2.png")
  space3=loadImage("dock/spacecraft3.png")
  space4=loadImage("dock/spacecraft4.png")
}



function setup() {
  createCanvas(800,400);
iss=createSprite(330,130)
iss.addImage(issimg)
iss.scale=0.25

spacecraft=createSprite(285,240)
supercraft.addImage(space1)
supercraft.scale=0.15
}

function draw() {
  background(bgimg);  

  if(!hasDocked){
    spacecraft.x=spacecraft.x+random(-1,1);

    if(keyDown("UP_ARROW")){

      spacecraft.y=spacecraft.y-2

      
    if(keyDown("DOWN_ARROW")){
    supercraft.addImage(space2)
      spacecraft.y=spacecraft.y+2
    }
    
    if(keyDown("RIGHT_ARROW")){
      supercraft.addImage(space4)
      spacecraft.y=spacecraft.x-2
    }
    
    if(keyDown("LEFT_ARROW")){
      supercraft.addImage(space3)
      spacecraft.y=spacecraft.x+2
    }
    }

  }
  if(spacecraft.isTouching(iss)){
    hasDocked=true;
    text("DOCKING SUCCESFULL",200,200)
  }
  drawSprites();
}