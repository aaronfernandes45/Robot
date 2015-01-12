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
			mDown();
			break;
		}
		case "2":
		{
			var a = prompt("x co ord");
			var b = prompt("y co ord");
			player2.add([a,b]);
			display();
			mDown();
			break;
		}
		default:
		{
			display();
			mDown();
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



//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx


function mDown()
{
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
	ctx.font = "12px Ariel";
	for(var i=0; i<4; i++)
	{
		for(var j=0; j<4; j++)
		{
			ctx.clearRect((0+(j*100)), (0+(i*100)), 100, 100);
		}
	}

	for(var i=0; i<400; i+=100)
	{
		ctx.moveTo(0,i);
		ctx.lineTo(400,i);
		ctx.stroke();
	}

	for(var j=0; j<400; j+=100)
	{
		ctx.moveTo(j,0);
		ctx.lineTo(j,400);
		ctx.stroke();
	}

	for(var i=0; i<4; i++)
	{
		for(var j=0; j<4; j++)
		{
			ctx.textAlign = "start";
			ctx.fillText(grid.gridStructure[i][j].length,(10+(100*j)),((i*100)+50));

			// var popObj = grid.gridStructure[i][j].pop();
			// if(!popObj)
			// {
			// 	ctx.fillText(popObj.color,(10+(100*j)),((i*100)+65));
			// 	grid.gridStructure[i][j].push(popObj);
			// }
		}
	}
	console.log("bdhjgde");
}