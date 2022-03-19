var enemigoRojo;
var enemigoAzul;


function preload(){
  
  enemigoAzulImg=loadAnimation("imagenes/e_azul.png","imagenes/e_azul_der_abajo.png","imagenes/e_azul_izq_abajo.png");
  enemigoRojoImg=loadImage("imagenes/e_rojo.png");
 
 
}

function setup() {
  createCanvas(600, 700);
  
  enemigoRojo= createSprite(50,180,50,150);
  enemigoRojo.addImage(enemigoRojoImg);
  enemigoRojo.scale=1.5;

  enemigoAzul= createSprite(150,180,50,150);
  enemigoAzul.addAnimation("a_azul_animacion",enemigoAzulImg);
  enemigoAzul.scale=1.5;
 
  
}

function draw() {
  background(180);

 
  drawSprites();
}

