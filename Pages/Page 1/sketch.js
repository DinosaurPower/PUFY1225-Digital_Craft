var gif_loadImg, gif_createImg;

function preload() {

  gif_createImg = createImg("Sprite1.gif"); //I upload my gif
}

function setup() {
  createCanvas(windowHeight, windowWidth);
link = createA('https://dinosaurpower.github.io/PUFY1225-Digital_Craft/Pages/Page%202', 'enter name','self'); //I create link
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

  
  gif_createImg.position(windowHeight/3.5, windowWidth/2); //I ad my gif and once it starts working I will set up its size and position
   gif_createImg.size(windowHeight/2.5, windowWidth/4);
  textSize(32);
  text.position(windowWidth/2, windowHeight/2);
text('A young man stands in his bedroom. It just so happens that today, the 8th of April, 2020, is this young mans birthday. Though it was eighteen years ago he was given life, it is only today he will be given a name');



}
