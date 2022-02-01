var count = 0;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);

}

function draw() {
  background(220);

  var x = -10
  var y = 200
  var z = 410


  // rectangle 1
  fill(255, 255, 212)
  rect(x + count*(0.30), y + count*(0.20), 30, 30)
  rect(x + count*(0.30), y - count*(0.20), 30, 30)  


  // rectangle 2
  fill(254, 217, 142)
  rect(x + count*(0.40), y + count*(0.30), 30, 30);
  rect(x + count*(0.40), y - count*(0.30), 30, 30);

  // rectangle 3
  fill(254, 153, 41)
  rect(x + count*(0.50), y + count*(0.40), 30, 30);
  rect(x + count*(0.50), y - count*(0.40), 30, 30);

  // rectangle 4
  fill(217, 95, 14)
  rect(x + count*(0.60), y + count*(0.50), 30, 30);
  rect(x + count*(0.60), y - count*(0.50), 30, 30);


  // rectangle 5
  fill(153, 52, 4)
  rect(x + count*(0.70), y + count*(0.60), 30, 30);
  rect(x + count*(0.70), y - count*(0.60), 30, 30);
  
  
  

  // rectangle 6 
  fill(255, 255, 212)
  rect(z - count*(0.30), y + count*(0.20), 30, 30)
  rect(z - count*(0.30), y - count*(0.20), 30, 30)  


  // rectangle 7
  fill(254, 217, 142)
  rect(z - count*(0.40), y + count*(0.30), 30, 30);
  rect(z - count*(0.40), y - count*(0.30), 30, 30);

  // rectangle 8
  fill(254, 153, 41)
  rect(z - count*(0.50), y + count*(0.40), 30, 30);
  rect(z - count*(0.50), y - count*(0.40), 30, 30);

  // rectangle 9
  fill(217, 95, 14)
  rect(z - count*(0.60), y + count*(0.50), 30, 30);
  rect(z - count*(0.60), y - count*(0.50), 30, 30);


  // rectangle 10
  fill(153, 52, 4)
  rect(z - count*(0.70), y + count*(0.60), 30, 30);
  rect(z - count*(0.70), y - count*(0.60), 30, 30);

  count = count + 1
}
