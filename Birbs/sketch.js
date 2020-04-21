var stats;
var observations = []; //Claim as an array right away!
var photos = [];

function preload(){
	stats = loadTable("Peregrines.csv", "csv", "header");                  
}

function setup() {

  createCanvas(windowWidth, windowHeight);
  background("#d0d3ee");
  var rowCount = stats.getRowCount(); 
  //print(rowCount); //testing
  observations = stats.getColumn('observations');
  var counter = 0;
    for(var x = 0; x < width; x+=width/5){
      for(var y = 0; y < height; y+=height/5){
        
      
    //I wanted to make birds scatter on the certain distance from each other 
    //It doesn't work for some reason but okay
    
      //var r = photo/100; //trying to relate intensivity of red to amount of the photos of the birds taken
        // print("index " + f + " : " +observations[f]);
        var r = 255;
    
        var sc = map(observations[0], 0, 558012, 0, 1) ; //trying to make scale relate ro amount of the birbs observed
        print("x: " + x + ", y: " + y + ", scale: "+ sc);
        peregrine(sc, x, y, r, 150, 150); //Now I generate birds, see shape code below
        // counter++;
 
      }
    }
}

function draw() { //time to make fun

} 


function peregrine(sc, x, y, r, g, b) { //a shape of the birb
	
  fill(r, g, b);
  scale(sc);

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
