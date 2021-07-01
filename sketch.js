var bullet, wall, thickness;
var speed, weight;
var deformation;

function setup() {
  createCanvas(1600, 400);
  speed = random(220, 320);
  weight = random(30, 50);
  thickness = random(22,82);

  bullet  = createSprite(50, 200, 50, 20);
  wall = createSprite(1500, 200, thickness, height/2)

  bullet.velocityX = speed;
  wall.shapeColor = "white";
  deformation = 0.5*weight*speed*speed/(thickness*thickness*thickness);
}

function draw() {
  background("black");  
  if(car.isTouching(wall)){
    deformation;
  
  
  if(deformation <= 10){
    bullet.shapeColor = "green";
  }
  else {
      bullet.shapeColor = "red";
  }
 
}
bullet.collide(wall);
  drawSprites();

}