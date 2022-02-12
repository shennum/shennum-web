var x = 360;
var y = 180;

function setup() {
  createCanvas(x, y);
  rectMode(CENTER);


  lat = createInput("0","number").size(42,20);
  lat.position(120, 190);

  long = createInput("0","number").size(42,20);
  long.position(120,220);

  dataValue = createInput("0","number").size(42,20);
  dataValue.position(120,250);

  latLabelPrefix= createElement('p', 'Set latitude to');
  latLabelPrefix.position(9, 177);

  longLabelPrefix= createElement('p', 'Set longitude to');
  longLabelPrefix.position(9, 207);

  magLabelPrefix= createElement('p', 'Set magnitude to');
  magLabelPrefix.position(9, 237);


}

function draw() {
  background(220);


  longCoord = Number(
    long.value(),
    10) + 180;


  latCoord = 90 - Number(
    lat.value(),
    10);

  longCoordInput = Number(
    long.value(),
    10);

  latCoordInput = Number(
    lat.value(),
    10);



  // return to this later
  var objectProperty;

  objectProperty = Number(dataValue.value(), 10)

  var rightColor = getRightColor(objectProperty);

  // let's make one for the width

  var rightWidth = getWidth(objectProperty);

  // shape to be drawn

  var hasValidInput = isValidInput(longCoordInput, latCoordInput);

  var itIsCloseToObject = isCloseToObject(longCoord, latCoord, mouseX, mouseY);

  var isClose =  isCloseToObject(longCoord, latCoord, mouseX, mouseY);



 if ((itIsCloseToObject === true) && (objectProperty>= 0)) {
    fill(rightColor);
    line(longCoord, latCoord, longCoord+20, latCoord+20);
    rect(longCoord + 20, latCoord, rightWidth, 20);
  } else if((itIsCloseToObject === true) && (objectProperty<0)) {
    fill(255, 0, 0);
    stroke(255, 0, 0);
    text("X", longCoord +20, latCoord);
    } else {
    if ((hasValidInput === true) && (objectProperty>= 0)) {
    fill(rightColor);
    noStroke();
    rect(longCoord, latCoord, rightWidth, 20);
  } else if ((hasValidInput) && (objectProperty<0)) {
    fill(255, 0, 0);
    stroke(255, 0, 0);
    text("X", longCoord, latCoord);
  }
  };

}

function getRightColor(input) {
  if (input < 0) {
    return color(255, 0, 0);
  } else if (input => 0) {
    return color(0, 0, 0);
  }
}

function getWidth(input) {
  if (input > 200) {
    return 15;
    } else if (input <= 200 && input > 100) {
      return 10;
    } else if (input <= 100 && input >= 0) {
      return 5;
  }
}

/*function isValidInput(latCoord, longCoord) {
  if ((longCoord >= -180 || longCoord <= 180) && (latCoord >= -90 || latCoord <=90)) {
    return true;
  } else {
    return false;
  }
}
*/

function isValidInput(num1, num2) {
  if ((num1 < -180 || num1 > 180) || (num2 < -90 || num2 > 90)) {
    return false;
  } else {
    return true;
  }
};

// create a function in which is mouseX and mouseY is within a certain proximity of latCoord and longCoord

function isCloseToObject(position1, position2, long1, lat1) {
  if ((dist(position1, position2, long1, lat1) < 10)) {
      return true;
      } else {
        return false;
  }
};
