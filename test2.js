
var count = 0;

function control(coord)
{
	if((count % 2)==0)
	{
		var retval = player1.add(coord);
		endConditionTest();
		
		
		if(retval)
		{
			count += 1;
		}
		//console.log("AFTER PLAYER1... BEFORE DISPLAY");
		display();
		//console.log("Call mDown");
	}
	else
	{
		var retval = player2.add(coord);
		endConditionTest();
		
		if(retval)
		{
			count += 1;
		}
		display();
	}
	
}


function endConditionTest()
{
	//alert("count is" + " " + count);
	if(Number(count) != 1)
	{
		if(Number(count) != 0)
		{
			var redCount = 0;
			var blueCount = 0;
			for(var i=0; i<=grid.xPosition; i++)
			{
				//alert("grid.xPosition" + "is" + grid.xPosition + "\n" + "grid.yPosition" + "is" + grid.yPosition);
				for(var j=0; j<=grid.yPosition; j++)
				{
					//alert("Inside both for loops");
					if(grid.gridStructure[i][j].length > 0)
					{
						//alert("length of" + i + "," + j + "is" + grid.gridStructure[i][j].length)
						var popObj = grid.gridStructure[i][j].pop();
						if(popObj.color == "red")
						{
							redCount+=1;
						}
						else
						{
							blueCount+=1;
						}
						grid.gridStructure[i][j].push(popObj);
					}
					
				}
			}
			//alert("RED COUNT IS" + redCount + "\n" + "BLUE COUNT IS" + blueCount);
			if(blueCount == 0)
			{
				alert("Red Player wins");
			}
			else
			{
				if(redCount == 0)
				{
					alert("Blue Player wins");
				}
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





//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx


function showCoords(event) 
{
    //console.log("In onclick handler");
    var x = event.clientX;
    var y = event.clientY;
    var coords = "X coords: " + x + ", Y coords: " + y;
    console.log(coords);
    control([Math.floor(x/100),Math.floor(y/100)]);
    console.log([Math.floor((y-10)/100),Math.floor((x-10)/100)]);
}


//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

display();

function mDown()
{
	showCoords(event);
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
			ctx.fillText(grid.gridStructure[i][j].length, (10+(100*i)), ((j*100)+50));  //changed here

			if(grid.gridStructure[i][j].length > 0)
			{
				var popObj = grid.gridStructure[i][j].pop();
				ctx.fillText(popObj.color, (10+(100*i)), ((j*100)+65));
				console.log(popObj.color);
				grid.gridStructure[i][j].push(popObj);
			}
		}
	}
	console.log("bdhjgde");
}