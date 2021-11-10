
function setup() {
  createCanvas(750,750);

  box = createSprite(325,325,75,75);
  box.shapeColor = "cyan";

  edges = createEdgeSprites();
}

function draw() 
{
  background(30);
 

  if (keyIsDown(UP_ARROW)){
    box.y = box.y - 5;
  }
  if (keyIsDown(DOWN_ARROW)){
    box.y = box.y + 5;
  }
  if (keyIsDown(RIGHT_ARROW)){
    box.x = box.x + 5;
  }
  if (keyIsDown(LEFT_ARROW)){
    box.x = box.x - 5;
  }
  box.bounceOff(edges);
  drawSprites();
}




