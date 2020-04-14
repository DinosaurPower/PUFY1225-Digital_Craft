var Observations; //I allow some positions from the table
var Photos;
function preload(){
	stats = loadTable("Birbs/Peregrines.csv"); //I upload my data
}
function setup() {

  createCanvas(windowWidth, windowHeight);
  var rowCount = stats.getRowCount(); 
	Observarions = [];
	for (var i = 0; i < rowCount; i++){
		Observations[i] = stats.getNum(i, 1); //I forgot what it is, but it was in the professor's code w/ data so I ad it
	}
}

function draw() { //time to make fun
  background("#d0d3ee");
 for(var x= 100; x < windowWidth; x+=300){
    for(var y= 100; y < windowHeight; y+=300){
    
//I wanted to make birds scatter on the certain distance from each other 
    //It doesn't work for some reason but okay
    
for (var r = Photos/100;){ //trying to relate intensivity of red to amount of the photos of the birds taken
	
 for (var Sc = Observations/100;){ //trying to make scale relate ro amount of the birbs observed
  peregrine(Sc, x, y, r, 150, 150); //Now I generate birds, see shape code below
 }
 }
}

}

function peregrine(Sc, x, y, r, g, b) { //a shape of the birb
	
  fill(r, g, b);
 
	scale(Sc);

  beginShape();
  noStroke();
  vertex(x + 20, y + 20); //I made my code transformable without push-pop things
  vertex(x + 30, y + 21);
  vertex(x + 35, y + 25);
  vertex(x + 40, y + 25);
  vertex(x + 50, y + 30);
  vertex(x + 50, y + 40);
  vertex(x + 200, y + 50);
  vertex(x + 130, y + 80);
  vertex(x + 80, y + 75);
  vertex(x + 90, y + 120);
  vertex(x + 120, y + 150);
  vertex(x + 105, y + 160);
  vertex(x + 85, y + 165);
  vertex(x + 70, y + 130);
  vertex(x + 38, y + 90);
  vertex(x - 15, y + 115);
  vertex(x - 100, y + 110);
  vertex(x + 20, y + 50);



  endShape(CLOSE);
  
}
