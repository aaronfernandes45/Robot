function Robot() {
  this.position = [4, 4];
  this.horz_idx = 0;
  this.vert_idx = 1;
}

Robot.prototype.move = function(direction) {
  var retVal = grid.checkBoundary(this.position, direction);
  if (retVal == "left") {
    this.position[this.horz_idx] -= 1;
  } else if (retVal == "right") {
    this.position[this.horz_idx] += 1;
  } else if (retVal == "up") {
    this.position[this.vert_idx] += 1;
  } else if (retVal == "down") {
    this.position[this.vert_idx] -= 1;
  } else {
    return false;
  }

  return (this.position);
}



function Grid(x,y) {
  this.maxX = x;
  this.maxY = y;
}

Grid.prototype.checkBoundary = function(position, direction){
  if(((position[0] == this.maxX)&&(direction == "right"))||((position[0] == 0)&&(direction == "left"))){
    return("invalid");
  }
  else{
    if(((position[1] == this.maxY)&&(direction == "up"))||((position[1] == 0)&&(direction == "down"))){
      return("invalid");
    }
    else{
    return(direction);
  }
  }
  
}

var robot = new Robot();
var grid = new Grid(8,8);


// userInput();

function movePosition(direction){
       var position = robot.move(direction);
      if (!position) {
        alert("Can't move");
      } else {
         document.getElementById("demo").innerHTML = "Position :"+position;
      }
    }

