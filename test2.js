
var count = 0;
var test = true;
var padx=0;
var pady=0;
function control(coord)
{
	if((count % 2)==0)
	{
		var retval = player1.add(coord);
		//alert("calling end cond");
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


function endConditionTest(orb)
{
	//alert("count is" + " " + count);
	//alert("in endConditionTest");
	//display();
	if(test)
	{
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

			if(orb)
			{
				if(orb.color == "red")
				{
					redCount+=1;
				}
				if(orb.color == "blue")
				{
					blueCount+=1;
				}
			}
			//alert("RED COUNT IS" + redCount + "\n" + "BLUE COUNT IS" + blueCount);
			if(blueCount == 0)
			{
				display();
				alert("Red Player wins");
				test = false;
			}
			else
			{
				if(redCount == 0)
				{
					display();
					alert("Blue Player wins");
					test = false;
				}
			}
		}
	}
}
}


function display()
{
	var i;
	var j;
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
	ctx.font = "12px Ariel";
	for(i=0; i<=grid.yPosition; i++)
	{
		for(j=0; j<=grid.xPosition; j++)
		{
			ctx.clearRect((0+(j*pady)), (0+(i*padx)), padx, pady);
		}
	}

	for(i=0; i<=400; i+=pady)
	{
		ctx.moveTo(0,i);
		ctx.lineTo(400,i);
		ctx.stroke();
	}
	ctx.moveTo(0,400);
	ctx.lineTo(400,400);
	ctx.stroke();

	for(j=0; j<=400; j+=padx)
	{
		ctx.moveTo(j,0);
		ctx.lineTo(j,400);
		ctx.stroke();
	}
	ctx.moveTo(400,0);
	ctx.lineTo(400,400);
	ctx.stroke();

	for(i=0; i<=grid.yPosition; i++)
	{
		for(j=0; j<=grid.xPosition; j++)
		{
			ctx.textAlign = "start";
			//alert(i +":"+ j);
			//ctx.fillText(grid.gridStructure[i][j].length, (10+(100*i)), ((j*100)+50));
			if(grid.gridStructure[i][j].length > 0)
			{
				var popObj = grid.gridStructure[i][j].pop();
				
				
				ctx.fillStyle = popObj.color;
				ctx.fillRect((i*padx)+5, (j*pady)+5, padx-10, pady-10);
				//ctx.fillText(popObj.color, (10+(100*i)), ((j*100)+65));
				console.log(popObj.color);
				grid.gridStructure[i][j].push(popObj);
			}
			//ctx.fillText(grid.gridStructure[i][j].length, (10+(100*i)), ((j*100)+50));
		}
	}

	for(i=0; i<=grid.yPosition; i++)
	{
		for(j=0; j<=grid.xPosition; j++)
		{
			ctx.textAlign = "start";
			//ctx.fillText(grid.gridStructure[i][j].length, (10+(100*i)), ((j*100)+50));
			if(grid.gridStructure[i][j].length > 0)
			{
				var popObj = grid.gridStructure[i][j].pop();
				// ctx.fillStyle = "#CFFD01";
				if(popObj.color == "blue")
				{
					ctx.fillStyle = "#FDA501"
					//ctx.fillText(grid.gridStructure[i][j].length + 1, (45+(100*i)), ((j*100)+50));
				}
				else if(popObj.color == "red")
				{
					ctx.fillStyle = "#01FDF1"
					//ctx.fillText(grid.gridStructure[i][j].length + 1, (45+(100*i)), ((j*100)+50));
				}
				//ctx.fillText(popObj.color, (10+(100*i)), ((j*100)+65));
				console.log(popObj.color);
				//ctx.fillText(grid.gridStructure[i][j].length, (45+(100*i)), ((j*100)+55));
				grid.gridStructure[i][j].push(popObj);
				ctx.font="20px Georgia";
				ctx.fillText(grid.gridStructure[i][j].length, ((padx/2)-5+(padx*i)), ((j*pady)+(pady/2)+5));
			}
		}
	console.log("bdhjgde");
	}
}









function showCoords(evt) 
{
    //display();
    //mDown();
    
    console.log("In onclick handler");
    var x = evt.pageX - 100; //var x = event.clientX - 100;
    var y = evt.pageY - 227;
    var coords = "X coords: " + x + ", Y coords: " + y;
    console.log(coords);
    control([Math.floor(x/padx),Math.floor(y/pady)]);
    console.log([Math.floor((y-10)/100),Math.floor((x-10)/100)]);
    display();
}



var aa;
var bb;

function mDown()
{
		count = 0;
		test = true;
		// if((padx == 0) || (pady == 0))
		// {
		// 	var c = document.getElementById("myCanvas");
		// 	var ctx = c.getContext("2d");
		// 	ctx.font = "12px Ariel";
		// 	for(var i=0; i<=grid.yPosition; i++)
		// 	{
		// 		for(var j=0; j<=grid.xPosition; j++)
		// 		{
		// 			ctx.clearRect((0+(j*pady)), (0+(i*padx)), padx, pady);
		// 		}
		// 	}
		// 	padx = 400/(grid.xPosition+1);
		// 	pady = 400/(grid.yPosition+1);
		// 	display();
		// }
		if(count == 0)
		{
			aa = prompt("Enter no of columns(max allowed 8)");
			if(aa>8)
			{
				aa = 8;
			}
			bb = prompt("Enter no of rows(max allowed 8");
			if(bb>8)
			{
				bb=8;
			}
			alert("Xpos: " + aa + "YPos:" + bb);
			grid.xPosition = aa-1;
			grid.yPosition = bb-1;
			alert("Xposition: " + grid.xPosition + "YPos:" + grid.yPosition);
		}
		
		//showCoords(evt);
		// var x = event.clientX - 100; //var x = event.clientX - 100;
  //   var y = event.clientY - 77;
  //   var coords = "X coords: " + x + ", Y coords: " + y;
  //   console.log(coords);
  //   control([Math.floor(x/100),Math.floor(y/100)]);
  //   console.log([Math.floor((y-10)/100),Math.floor((x-10)/100)]);
  	padx = 400/(grid.xPosition+1);
		pady = 400/(grid.yPosition+1);
		display();
}