var box
function setup() {
  createCanvas(800,800);
  box = createSprite(200, 200, 100, 100);
  box.shapeColor = "blue";
  box.velocityY = -5;
}

function draw() 
{
  background(30);
drawSprites();
}




