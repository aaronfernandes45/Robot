function Player(ccolor) //ccolor is color sent by controller
{
	this.color=ccolor;

}

Player.prototype.add= function(clickedSquare)
{
	if(grid.check(clickedSquare, this.color)){
		var orb = new Orb(this.color);
		grid.update(clickedSquare, orb);
	}
}

var grid= new Grid(4,4);
var player1= new Player("red");
var player2= new Player("blue");

function Orb(pcolor) //color sent by Player
{
	this.color=pcolor;

}

funtion controller()
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
 player1.add([2,2]);
 for(i=0;i<columns;i++)
 	for(j=0;j<rows;j++)
 		console.log(gridStructure[i][j].length);
}