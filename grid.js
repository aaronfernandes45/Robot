function Grid(x,y){ // x and y are dimensions of the grid
	this.xPosition = x;
	this.YPosition = y;
	this.gridStructure;

	//this.gridStructure = [[[0,1],[0,1],[0,1],[0,1]],[0,1,2,3],[0,1,2,3],[0,1,2,3]];

	this.gridStructure = [[[], [], [], []], [[], [], [],[]], [[], [], [], []], [[], [], [], []]];

	// this.gridStructure = new Array(this.yPosition);
	// for(var i = 0; i < this.yPosition; i++){
	// 	this.gridStructure[i] = new Array(this.xPosition);
	// 	for(var j = 0; j < this.xPosition; j++){
	// 		this.gridStructure[i][j] = [];
	// 	}
	// }
}


Grid.prototype.check = function(clickedSquare, color){
	console.log("Current Location:"+clickedSquare);
	console.log("Checking availability of square");
	// console.log(clickedSquare[0]);
	// console.log(clickedSquare[1])
	// console.log(clickedSquare.length);
	// console.log(this.gridStructure[0][0][0]);
	// console.log(this.gridStructure[0][0][1]);
	// console.log(this.gridStructure);
		if(this.gridStructure[clickedSquare[0]][clickedSquare[1]].length == 0){
		console.log("Square available (It's empty)");
		return true;
	}
	else{
		var popObj = grid.gridStructure[clickedSquare[0]][clickedSquare[1]].pop();
		if(/*this.gridStructure[clickedSquare[0]][clickedSquare[1]].color*/popObj.color == color){
		  this.gridStructure[clickedSquare[0]][clickedSquare[1]].push(popObj);
		  console.log("Square available (Not empty but of same orb color");
			return true;
		}
		else{
			console.log("Square unavailable");
			this.gridStructure[clickedSquare[0]][clickedSquare[1]].push(popObj);
			return false;
		}
	}
	

}

Grid.prototype.update = function(clickedSquare, orb){
	console.log("In grid update");
	console.log("cur location"+clickedSquare);
	if((clickedSquare[0]<4) && (clickedSquare[1]<4))
	{
	if(this.gridStructure[clickedSquare[0]][clickedSquare[1]].length == 0)
	{
	console.log("In IF loop of update");
	this.gridStructure[clickedSquare[0]][clickedSquare[1]].push(orb);  //had an =1   ??
	console.log("Pushed Orb to empty square "+clickedSquare);
	}
	else{//this part changed
		console.log("Pushing orb to unempty square"+clickedSquare);
		//var popObj = grid.gridStructure[clickedSquare[0]][clickedSquare[1]].pop();
		//if (popObj.color == orb.color)
		//{
			//grid.gridStructure[clickedSquare[0]][clickedSquare[1]].push(orb);
			grid.checkSquareType(clickedSquare, orb);
				
		//}
		//else
		//{
			//console.log("Can't add.. colours don't match");
		//}
	}
}

}

Grid.prototype.checkSquareType = function(clickedSquare, orb)
{
	if ((clickedSquare[0] == 0) || (clickedSquare[0] == this.xPosition) || (clickedSquare[0] == this.yPosition))
	{
		if ((clickedSquare[1] == 0) || (clickedSquare[1] == this.xPosition) || (clickedSquare[1] == this.yPosition))
		{
			grid.corner(clickedSquare, orb);
		}
		else 
			grid.edge(clickedSquare, orb, 1);
	}
	else 
	{
		if ((clickedSquare[1] == 0) || (clickedSquare[1] == this.xPosition) || (clickedSquare[1] == this.yPosition))
		{
			grid.edge(clickedSquare, orb, 2);
		}
		else
		{
			grid.middle (clickedSquare, orb);
		}
	}

	//Stop condition
}

Grid.prototype.corner = function(clickedSquare, orb){
	if (clickedSquare[0] == 0){
		if (clickedSquare[1] == 0){
			var popObj = grid.gridStructure[clickedSquare[0]][clickedSquare[1]].pop();
			grid.update([clickedSquare[0], Number(clickedSquare[1])+1], popObj);
			grid.update([Number(clickedSquare[0])+1, clickedSquare[1]], orb);
		}
		else{
			var popObj = grid.gridStructure[clickedSquare[0]][clickedSquare[1]].pop();
			grid.update([Number(clickedSquare[0])+1, clickedSquare[1]], popObj);
			grid.update([clickedSquare[0], Number(clickedSquare[1])-1], orb);
		}
	}
	else{
		if(clickedSquare[1] == 0){
			var popObj = grid.gridStructure[clickedSquare[0]][clickedSquare[1]].pop();
			grid.update([clickedSquare[0], Number(clickedSquare[1])+1], popObj);
			grid.update([Number(clickedSquare[0])-1, clickedSquare[1]], orb);
		}
		else{
			var popObj = grid.gridStructure[clickedSquare[0]][clickedSquare[1]].pop();
			grid.update([clickedSquare[0], clickedSquare[1]-1], popObj);
			grid.update([clickedSquare[0]-1, clickedSquare[1]], orb);
		}
	}
}


Grid.prototype.edge = function(clickedSquare, orb, r){
	if(this.gridStructure[clickedSquare[0]][clickedSquare[1]].length == 1){
		this.gridStructure[clickedSquare[0]][clickedSquare[1]].push(orb);
	}
	else{
		if(r == 1){
			if(clickedSquare[0] == 0){
				var popObj = grid.gridStructure[clickedSquare[0]][clickedSquare[1]].pop();
				var popObj1 = grid.gridStructure[clickedSquare[0]][clickedSquare[1]].pop();
				grid.update([Number(clickedSquare[0])+1, clickedSquare[1]], orb);
				grid.update([clickedSquare[0], Number(clickedSquare[1])+1], popObj);
				grid.update([clickedSquare[0], Number(clickedSquare[1])-1], popObj1);
			}
			else{
				var popObj = grid.gridStructure[clickedSquare[0]][clickedSquare[1]].pop();
				var popObj1 = grid.gridStructure[clickedSquare[0]][clickedSquare[1]].pop();
				grid.update([Number(clickedSquare[0])-1, clickedSquare[1]], orb);
				grid.update([clickedSquare[0], Number(clickedSquare[1])+1], popObj);
				grid.update([clickedSquare[0], Number(clickedSquare[1])-1], popObj1);
			}
		}
		else{
			if(clickedSquare[1] == 0){
				var popObj = grid.gridStructure[clickedSquare[0]][clickedSquare[1]].pop();
				var popObj1 = grid.gridStructure[clickedSquare[0]][clickedSquare[1]].pop();
				grid.update([clickedSquare[0], Number(clickedSquare[1])+1], orb);
				grid.update([Number(clickedSquare[0])+1, clickedSquare[1]], popObj);
				grid.update([Number(clickedSquare[0])-1, clickedSquare[1]], popObj1);
			}
			else{
				var popObj = grid.gridStructure[clickedSquare[0]][clickedSquare[1]].pop();
				var popObj1 = grid.gridStructure[clickedSquare[0]][clickedSquare[1]].pop();
				grid.update([clickedSquare[0], clickedSquare[1]-1], orb);
				grid.update([clickedSquare[0]+1, clickedSquare[1]], popObj);
				grid.update([clickedSquare[0]-1, clickedSquare[1]], popObj1);
			}
		}
	}
}


Grid.prototype.middle = function(clickedSquare, orb){
	if((this.gridStructure[clickedSquare[0]][clickedSquare[1]].length == 1)||(this.gridStructure[clickedSquare[0]][clickedSquare[1]].length == 2)){
		this.gridStructure[clickedSquare[0]][clickedSquare[1]].push(orb);
	}
	else{
		var popObj = grid.gridStructure[clickedSquare[0]][clickedSquare[1]].pop();
		var popObj1 = grid.gridStructure[clickedSquare[0]][clickedSquare[1]].pop();
		var popObj2 = grid.gridStructure[clickedSquare[0]][clickedSquare[1]].pop();
		grid.update([clickedSquare[0], Number(clickedSquare[1])-Number(1)], popObj);
		grid.update([clickedSquare[0], Number(clickedSquare[1])+Number(1)], orb);
		grid.update([Number(clickedSquare[0])+Number(1), clickedSquare[1]], popObj1);
		grid.update([Number(clickedSquare[0])-Number(1), clickedSquare[1]], popObj2);
	}
}








//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

function Player(ccolor) //ccolor is color sent by controller
{
	this.color=ccolor;

}

Player.prototype.add= function(clickedSquare)
{ 
	if(grid.check(clickedSquare, this.color)){
		var orb = new Orb(this.color);
		grid.update(clickedSquare, orb);
		return true;   //value added
	}
	else 
	{
		return false;   //value added
	}
}

var grid= new Grid(4,4);
var player1= new Player("red");
var player2= new Player("blue");


function Orb(pcolor) //color sent by Player
{
	this.color=pcolor;

}




function controller()
{
	var turn;
	turn=0;
	// while(1)
 // 	{
 // 		if(turn%2==0)
 // 			player1.add([]);
 // 		else
 // 			player2.add([]);
 // 		turn+=1;
 // 		//
 // 		//
 // 	}
 console.log("in controller");
 












 // for(i=0;i<grid.xPosition;i++)
 // 	for(j=0;j<grid.yPosition;j++)
 // 		console.log(grid.gridStructure[i][j].length);

}



