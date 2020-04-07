var gif_loadImg, gif_createImg;

function preload() {

  gif_createImg = createImg("Sprite6.png"); //I upload my gif
}

function setup() {
  createCanvas(windowHeight, windowWidth);
link = createA('https://dinosaurpower.github.io/PUFY1225-Digital_Craft/Pages/Page%204', 'go back','self'); //I create link
  link.position(windowWidth/5,windowHeight/1.05); //I set up link position
  
}

function draw() {
  background("#535353");
  rectMode (CENTER); //make my life easier
  noStroke();
  
   fill("#c6c6c6");
  rect(windowHeight/2, windowWidth/2, windowWidth/1.3, windowHeight/1.3); //One cool rectangle
  fill("#efefef");
   rect(windowHeight/2, windowWidth/2, windowWidth/1.3, windowHeight/1.75); //second cool rectangle

  gif_createImg.mode (CENTER);
  gif_createImg.position(windowHeight/2, windowWidth); //I ad my gif and once it starts working I will set up its size and position


}
