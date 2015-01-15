function middletest()
{
// Test case for middle squares
 player1.add([1,1]);
 console.log(grid.gridStructure[1][1].length);
 player1.add([1,1]);
 console.log(grid.gridStructure[1][1].length);
 player1.add([1,1]);
 console.log(grid.gridStructure[1][1].length);
 player1.add([1,1]);
 console.log(grid.gridStructure[1][1].length);
 console.log("adjacent grids are:");
 console.log(grid.gridStructure[1][0].length);
 console.log(grid.gridStructure[1][2].length);
 console.log(grid.gridStructure[0][1].length);
 console.log(grid.gridStructure[2][1].length);
}

function edgetest()
{
//Test case for edge square
player2.add([0,1]);
console.log(grid.gridStructure[0][1].length);
player2.add([0,1]);
console.log(grid.gridStructure[0][1].length);
player2.add([0,1]);
console.log(grid.gridStructure[0][1].length);
console.log("adjacent squares are");
console.log(grid.gridStructure[0][0].length);
console.log(grid.gridStructure[0][2].length);
console.log(grid.gridStructure[1][1].length);
}

function cornertest()
{
// Test case for corner
 player1.add([0,0]);
 console.log(grid.gridStructure[0][0].length);
 player1.add([0,0]);
 console.log(grid.gridStructure[0][0].length);
 console.log("adjacent grids are");
 console.log(grid.gridStructure[0][1].length);
 console.log(grid.gridStructure[1][0].length);
}

function twoplayeraddtest()
{
//If 2 players chose the same block;
player1.add([2,2]);
console.log(grid.gridStructure[2][2].length);
player2.add([2,2]);
console.log(grid.gridStructure[2][2].length);
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

var choice;
choice=prompt("1.Corner\n2.Edge\n3.Middle\n4.Testing for two player. \nAny other key to Exit")
switch(choice)
{
	case "1":
		cornertest();
		break;
	case "2":
		edgetest();
		break;
	case "3":
		middletest();
		break;
	case "4":
		twoplayeraddtest();
		break;
	default:
		break;

}

// for(i=0;i<grid.rows;i++)
// 	for(j=0;j<grid.columns;j++)
// 		alert(grid.gridStructure[i][j].length);
}
controller();