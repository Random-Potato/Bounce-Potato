var fixedR, movingR, object2;
var apple, bapple, capple, dapple;

function setup() {
  createCanvas(800,400);

  fixedR = createSprite(200,400,50,80)
  //object2 = createSprite(200,400,50,80)
  movingR = createSprite(200,200,80,30)

  movingR.velocityY = 5;
  fixedR.velocityY = -5;

  apple = createSprite(100,100,50,50);
  apple.shapeColor = "red";

  bapple = createSprite(200,100,50,50);
  bapple.shapeColor = "red";

  bapple.velocityY = 5;

  capple = createSprite(300,100,50,50);
  capple.shapeColor = "red";

  dapple = createSprite(400,100,50,50);
  dapple.shapeColor = "red";

  fixedR.shapeColor = "red";
  movingR.shapeColor = "orange";

  fixedR.debug = true;
  movingR.debug = true;
}

function draw() {
  console.log(movingR.x-fixedR.x)
  
  if(isTouching(movingR,fixedR)){
    movingR.shapeColor = "red";
    fixedR.shapeColor = "orange";
  }
  else{
    fixedR.shapeColor = "blue";
    movingR.shapeColor = "blue";
  }
  
  if(isTouching(apple,movingR)){
    apple.shapeColor = "green";
    movingR.shapeColor = "red";
  }
  else{
    apple.shapeColor = "red";
    movingR.shapeColor = "blue";
  }
  
  bounceOff(bapple,fixedR);

  background(0,255,0);  
  movingR.x = mouseX;
  movingR.y = mouseY;

  drawSprites();
}

