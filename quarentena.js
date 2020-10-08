let f;
function preload() {
  f = loadFont('SecularOne-Regular.ttf');
}

var x=200;
var y=150;
var xspeed = 0.5;
var yspeed = -0.5;
var direita = false;
var esquerda = false;
var cima = false;
var baixo = false;
 
function setup() {
  createCanvas (400, 320);
  
  amarillo = color (255, 255,0);
  rosa = color (255, 0, 255);
  ciano = color (0, 255, 255);
  verde = color (57, 255, 20);
}

function draw() {
background(0);
  
  textFont(f);
  textSize (width/30);
  text ("quarentena", x, y);
  //stroke(20);
  //strokeWeight (3);
  fill (255);
  
  //print (mouseX); 
  //medir os pixels do txt, então diminuir esse valor do width
  
  x=x+xspeed;
  y=y+yspeed;
  
//____________________________________ROSA_________________________ 
//if (x > width - 59 || x < 0){
if (x > width - 72){
  xspeed = xspeed * -1;
  
  direita = true;
  esquerda = false;
  cima = false;
  baixo = false;
 }

 else if (direita == true){
  fill (rosa);
  }
//_________________________________CIANO___________________________ 
if (x < 0){
  xspeed = xspeed * -1;
  
  esquerda = true;
  direita = false;
  cima = false;
  baixo = false;
}
else if (esquerda == true){
  fill (ciano) 
}
//_______________________________VERDE_____________________________
//if (y > height || y < 6){ //menor que 6 pra não sumir a palavra do canvas
  if (y > height){
  yspeed = yspeed *-1;
    
  cima = true;
  direita = false;
  esquerda = false;
  baixo = false;
  
 }
 else if (cima == true){
   fill (verde);
 }
 //_____________________________AMARILLO____________________________
  if (y < 0 + 7) {
  yspeed = yspeed *-1;
    
  baixo = true;  
  direita = false;
  esquerda = false;
  cima = false;
 }
 else if (baixo == true){
  fill (amarillo);
 } 
}