var Observations;
var Photos;
function preload(){
	stats = loadTable("Assets/Peregrines.csv");
}
function setup() {

  createCanvas(windowWidth, windowHeight);
  var rowCount = stats.getRowCount();
	Observarions = [];
	for (var i = 0; i < rowCount; i++){
		Observations[i] = stats.getNum(i, 1);
	}
}

function draw() {
  background("#d0d3ee");
 for(var x= 100; x < windowWidth; x+=400){
    for(var y= 100; y < windowHeight; y+=300){
    

    
    


  peregrine(0.5, x, y, 200, 150, 150);
 }
 }

}

function peregrine(Sc, x, y, r, g, b) {
  fill(r, g, b);
  scale(Sc);
  beginShape();
  noStroke();
  vertex(x + 20, y + 20);
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
