var movingRect,fixedRect;




function setup() {
  createCanvas(800,400);

  movingRect = createSprite(200,100,100,40);
  movingRect.shapeColor = "blue";
  fixedRect = createSprite(200,100,40,100);
  fixedRect.shapeColor = "blue";
}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX
  movingRect.y=World.mouseY

  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2
    && fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2
   && movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2
   && fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2 ){
     movingRect.shapeColor = "red";
     fixedRect.shapeColor = "red";
   }
   else{
     movingRect.shapeColor = "blue";
     fixedRect.shapeColor = "blue";
   }

  drawSprites();
}