var bullet;
var speed;
var wall;
var weight;
var thickness;

function setup() {
  createCanvas(1600,400);
  wall = createSprite(1200,200,thickness,height/2);
  bullet = createSprite(50,200,50,20);
  bullet.shapeColor = "white"
  speed = random(223,321);
  weight = random(30,52)
  thickness = random(22,83)
}

function draw() {
  background(0,0,0); 
  bullet.velocityX = speed;
  drawSprites();
if(wall.x - bullet.x < (bullet.width + wall.width)/2){
  bullet.velocityX = 0;
  var damage = 0.5 * weight * speed * speed/(thickness*thickness*thickness);
  if(damage>10){
    bullet.shapeColor = "red";
  }
  if(damage<10){
    bullet.shapeColor = "green";
  }
}
}