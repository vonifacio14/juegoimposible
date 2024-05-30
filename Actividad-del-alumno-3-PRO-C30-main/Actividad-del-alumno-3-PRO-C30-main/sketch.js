var boundary1;
var boundary2;
var pepito;
var car1;
var car2;
var car3;
var car4;
var attempts = 0;
  
 function setup(){
   createCanvas(400, 400);
   //Crea los límites del juego
   boundary1 = createSprite(190,120,420,3);
   boundary2 = createSprite(190,260,420,3);
   //Crea al sprite del personaje y dale color
   pepito = createSprite(20,190,13,13);
   pepito.shapeColor = "black";
   
   //Crea los carros que funcionarán como obstáculos y pintalos de rojo
   car1 = createSprite(100,130,10,10);
   car1.shapeColor = "red";
   car2 = createSprite(215,130,10,10);
   car2.shapeColor = "blue";
   car3 = createSprite(165,250,10,10);
   car3.shapeColor = "green";
   car4 = createSprite(270,250,10,10);
   car4.shapeColor = "purple";
   //Agrega velocidad  para hacer que los autos se muevan.
   car1.velocityY = 7;
   car2.velocityY = 7;
   car3.velocityY = -7;
   car4.velocityY = -7;
 }

  
  
function draw() {
   background("white");
  text("Intentos: " + attempts,200,100);
  strokeWeight(0);
  fill("lightblue");
  rect(0,120,52,140);
  fill("yellow");
  rect(345,120,52,140);
  
// Crea la función bounceoff para hacer que el auto rebote en los límites.
  car1.bounceOff(boundary1);
  car1.bounceOff(boundary2);
  car2.bounceOff(boundary1);
  car2.bounceOff(boundary2);
  car3.bounceOff(boundary1);
  car3.bounceOff(boundary2);
  car4.bounceOff(boundary1);
  car4.bounceOff(boundary2);
//Agregar la condición para hacer que Sam se mueva de izquiera a derecha.
if(keyDown("right")){
    pepito.x = pepito.x + 2;
  }
  if(keyDown("left")){
    pepito.x = pepito.x - 2;
  }
//Agregar la condición de reducir la vida de Sam si toca el carro.

if(
     pepito.isTouching(car1)||
     pepito.isTouching(car2)||
     pepito.isTouching(car3)||
     pepito.isTouching(car4))
  {
     pepito.x = 20;
     pepito.y = 190;
     attempts = attempts + 1;
  }
  
 drawSprites();
}
