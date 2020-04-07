var gif_loadImg, gif_createImg;

function preload() {

  gif_createImg = createImg("Sprite3.gif", 0.80); //I upload my gif
}

function setup() {
  createCanvas(windowHeight, windowWidth);
link = createA('https://dinosaurpower.github.io/PUFY1225-Digital_Craft/Pages/Page%204', 'inspect the room','self'); //I create link
  link.position(windowHeight/5,windowWidth/1.05); //I set up link position
  
}

function draw() {
  background("#535353");
  rectMode (CENTER); //make my life easier
  noStroke();
  
   fill("#c6c6c6");
  rect(windowHeight/2, windowWidth/2, windowWidth/1.3, windowHeight/1.3); //One cool rectangle
  fill("#efefef");
   rect(windowHeight/2, windowWidth/2, windowWidth/1.3, windowHeight/1.75); //second cool rectangle

  gif_createImg.position(windowHeight/2, windowWidth/2); //I ad my gif and once it starts working I will set up its size and position
  
 



}
