var fixedRect, movingRect 
var newRect;
function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  movingRect = createSprite(300,180,70,50)
  newRect = createSprite(50,200,90,70);

}

function draw() {
  background(0); 
  
  movingRect.x = mouseX
  movingRect.y = mouseY
  movingRect.shapeColor = "green"
  fixedRect.shapeColor = "green" 
 newRect.shapeColor = "blue";
  if(isTouching(movingRect,newRect)){
    newRect.shapeColor = "yellow"
  }

  if(isTouching(movingRect,fixedRect)) {
    movingRect.shapeColor = "red"
    fixedRect.shapeColor = "red"
  }
  
  drawSprites();
}

