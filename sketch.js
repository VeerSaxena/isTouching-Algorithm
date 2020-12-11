
var movingBlock, fixedBlock;
var object1, object2;

function setup() {
  createCanvas(800,400);
  
  movingBlock = createSprite(400, 200, 50, 50);
  fixedBlock = createSprite(500, 200, 50, 50);
}

function draw() {
  background(255,255,255); 
  
  //to move with mouse
  movingBlock.x = mouseX;
  movingBlock.y = mouseY;

  if(isTouching(fixedBlock,movingBlock )){

  
    movingBlock.shapeColor = "red";
    fixedBlock.shapeColor = "red";
  }else{
    movingBlock.shapeColor = "black";
    fixedBlock.shapeColor = "black";
  }

  drawSprites();
}
