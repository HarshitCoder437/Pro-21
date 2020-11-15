var bullet, bulletImg;
var wall, thickness;
var speed, weight;

function setup() {
  createCanvas(windowWidth, 400);
  
  speed = Math.round(random(90, 223));  
  thickness = Math.round(random(22,83));
  weight = Math.round(random(30, 52));

  wall = createSprite(width - 100, 200, thickness, height / 2);
  wall.shapeColor = rgb(80, 80, 80);
  
  bullet = createSprite(50, 200, 50, 5);
  
  bullet.velocityX = speed;
}

function draw() {

  background(220);
  
  if (isTouching(bullet, wall)){
    bullet.velocityX = 0;
    
    var damage = 0.5 * weight * speed * speed / (thickness * thickness *     thickness)
    
    if (damage > 10) {
      wall.shapeColor = "red";
    }
    
    if (damage < 10) {
      wall.shapeColor = "green";
    }
  }
  
  drawSprites();
}

function isTouching(bullet, wall) {
     bulletRightEdge = bullet.x + bullet.width;
     wallLeftEdge = wall.x;
  
    if (bulletRightEdge >= wallLeftEdge) {
      return true;
    }
  else {
  
    return false;
  }
}