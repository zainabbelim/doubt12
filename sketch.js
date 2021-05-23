var wall,thickness;
var bullet,speed,weight;

function setup(){
createCanvas(1200,400)
thickness = random(22,83);
wall = createSprite(1200,200,thickness,height/2)
speed = random(223,321)
weight = random(30,52)
}
function draw(){
    if(wall.x-bullet.x < (bullet.width+wall.width)/2){
        bullet.velocityX = 0;
        var deformation = 0.5* weight * speed*speed/250;
        if(deformation>180){
          bullet.shapeColor = color(255,0,0)
        }
        if(deformation < 180 && deformation > 100){
          bullet.shapeColor = color(230,230,0)
        }
        if(deformation < 100){
          bullet.shapeColor = color(0,255,0)
        }
      }
      
}