var gif_loadImg, gif_createImg;

function preload() {
  gif_loadImg = loadImage("Sprite2.gif");
  gif_createImg = createImg("Sprite2.gif"); //I upload my gif
}

function setup() {
  createCanvas(windowHeight, windowWidth);
link = createA('https://dinosaurpower.github.io/PUFY1225-Digital_Craft/Pages/Page%203', 'Try again','self'); //I create link
  link.position(windowWidth/3,windowHeight/1.05); //I set up link position
}

function draw() {
  background(220);
  rectMode (CENTER); //make my life easier
  noStroke();
   fill("#535353"); //color
  rect(windowHeight/2,windowWidth/2,windowWidth*2, windowHeight*2); //background
   fill("#c6c6c6");
  rect(windowHeight/2, windowWidth/2, windowWidth/1.3, windowHeight/1.3); //One cool rectangle
  fill("#efefef");
   rect(windowHeight/2, windowWidth/2, windowWidth/1.3, windowHeight/1.75); //second cool rectangle
 image(gif_loadImg, 50, 50);
  
image(gif_loadImg, 50, 50);
  gif_createImg.position(50, 350); //I ad my gif and once it starts working I will set up its size and position



}
