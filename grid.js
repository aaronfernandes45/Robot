function Grid(rows, columns){ // x and y are dimensions of the grid
	this.rows=1;
	this.columns=1;
	this.gridStructure = [];

	if(rows){
		this.rows = rows;
	}else{
		this.rows = 8;
	}

	if(columns){
		this.columns = columns;
	}else{
		this.columns = 8;
	}

	for(i = 0; i < this.rows; i++){
		this.gridStructure[i] = [];

		for(j = 0; j < this.columns; j++){
			this.gridStructure[i][j] = [];
		}
	}



	//this.gridStructure = [[[0,1],[0,1],[0,1],[0,1]],[0,1,2,3],[0,1,2,3],[0,1,2,3]];

	// this.gridStructure = [[[],[],[],[],[],[],[],[]], [[],[],[],[],[],[],[],[]], [[],[],[],[],[],[],[],[]], [[],[],[],[],[],[],[],[]], [[],[],[],[],[],[],[],[]], [[],[],[],[],[],[],[],[]], [[],[],[],[],[],[],[],[]], [[],[],[],[],[],[],[],[]]];

	// this.gridStructure = new Array(this.columns);
	// for(var i = 0; i < this.columns; i++){
	// 	this.gridStructure[i] = new Array(this.rows);
	// 	for(var j = 0; j < this.rows; j++){
	// 		this.gridStructure[i][j] = [];
	// 	}
	// }
}



Grid.prototype.check = function(clickedSquare, color){
	console.log("Current Location:"+clickedSquare);
	//console.log("Checking availability of square");
	
		if(this.gridStructure[clickedSquare[0]][clickedSquare[1]].length == 0){
		//console.log("Square available (It's empty)");
		return true;
	}
	else{
		var popObj = grid.gridStructure[clickedSquare[0]][clickedSquare[1]].pop();
		if(/*this.gridStructure[clickedSquare[0]][clickedSquare[1]].color*/popObj.color == color){
		  this.gridStructure[clickedSquare[0]][clickedSquare[1]].push(popObj);
		  //console.log("Square available (Not empty but of same orb color");
			return true;
		}
		else{
			//console.log("Square unavailable");
			this.gridStructure[clickedSquare[0]][clickedSquare[1]].push(popObj);
			return false;
		}
	}
	

}

Grid.prototype.update = function(clickedSquare, orb){
	if(test)
	{
	console.log("In grid update");
	console.log("cur location"+clickedSquare);
	display();
	endConditionTest(orb);
	if((clickedSquare[0]<=grid.rows) && (clickedSquare[1]<=grid.columns))
	{
	if(this.gridStructure[clickedSquare[0]][clickedSquare[1]].length == 0)
	{
	//console.log("In IF loop of update");
	this.gridStructure[clickedSquare[0]][clickedSquare[1]].push(orb);  //had an =1   ??
	//console.log("Pushed Orb to empty square "+clickedSquare);
	}
	else{//this part changed
		//console.log("Pushing orb to unempty square"+clickedSquare);
		//var popObj = grid.gridStructure[clickedSquare[0]][clickedSquare[1]].pop();
		//if (popObj.color == orb.color)
		//{
			//grid.gridStructure[clickedSquare[0]][clickedSquare[1]].push(orb);
			var ob;
			//console.log("BEFORE FOR LOOP");
			for(ob=0; ob<this.gridStructure[clickedSquare[0]][clickedSquare[1]].length; ob+=1)
			{
				//console.log("COLOR BEFORE CHANGING" + this.gridStructure[clickedSquare[0]][clickedSquare[1]][ob].color);
				this.gridStructure[clickedSquare[0]][clickedSquare[1]][ob].color = orb.color;
				//console.log("COLOR  AFTER CHANGING" + this.gridStructure[clickedSquare[0]][clickedSquare[1]][ob].color);
			}
			//console.log("AFTER FOR LOOP");
			grid.checkSquareType(clickedSquare, orb);
				
		//}
		//else
		//{
			//console.log("Can't add.. colours don't match");
		//}
	}
}
}

}

Grid.prototype.checkSquareType = function(clickedSquare, orb)
{
	if(test)
	{
	if ((clickedSquare[0] == 0) || (clickedSquare[0] == this.rows) || (clickedSquare[0] == this.columns))
	{
		if ((clickedSquare[1] == 0) || (clickedSquare[1] == this.rows) || (clickedSquare[1] == this.columns))
		{
			grid.corner(clickedSquare, orb);
		}
		else 
			grid.edge(clickedSquare, orb, 1);
	}
	else 
	{
		if ((clickedSquare[1] == 0) || (clickedSquare[1] == this.rows) || (clickedSquare[1] == this.columns))
		{
			grid.edge(clickedSquare, orb, 2);
		}
		else
		{
			grid.middle (clickedSquare, orb);
		}
	}
}
	//Stop condition
}

Grid.prototype.corner = function(clickedSquare, orb){
	if(test)
	{
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
}


Grid.prototype.edge = function(clickedSquare, orb, r){
	if(test)
	{
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
}


Grid.prototype.middle = function(clickedSquare, orb){
	if(test)
	{
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

var grid= new Grid();
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
 //console.log("in controller");
 












 // for(i=0;i<grid.rows;i++)
 // 	for(j=0;j<grid.columns;j++)
 // 		console.log(grid.gridStructure[i][j].length);

}



