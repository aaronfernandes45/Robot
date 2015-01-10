function control()
{
	var choice = "1";
	while(choice!="3")
	{
	choice = prompt("1.player1\n2.player2\n3.exit");
	switch(choice)
	{
		case "1":
		{
			var a = prompt("x co ord");
			var b = prompt("y co ord");
			player1.add([a,b]);
			display();
			break;
		}
		case "2":
		{
			var a = prompt("x co ord");
			var b = prompt("y co ord");
			player2.add([a,b]);
			display();
			break;
		}
		default:
		{
			display();
			break;
		}
	}
	}
}


function display()
{
	var i;
	var j;
	for(i=0;i<4;i++)
	{
		for(j=0;j<4;j++)
		{
			console.log("\t"+grid.gridStructure[i][j].length);
		}
		console.log("\n");
	}
}

control();