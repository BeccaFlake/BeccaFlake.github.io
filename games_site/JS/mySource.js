function checkRange(x,low,high)
{
	var x; var low; var high;
	var result = true;
	if (x < low || x > high)
		result = false;
	return result;
}
function charAtPlace(x, y, z)
{
	var x; var y; var z; var result = false;
	if (x.charAt(y-1) == z)
		result = true;
	return result;
}
function checkForChar(x, y)
{
	var x; var y; var i; var lgth; var result = false;
	lgth = x.length;
	for (i=0; i < lgth; i++)
	{
		if (x.charAt(i) == y)
			result = true;
	}
	return result;
}
function checkPercent(x, y, z)
{
	var x; var y; var z; var percent;
	percent = (y/100)*x;
	if (z == "y")
		return (x - percent);
	else
		return percent;
}
function checkWord(x,y)
{
	var x; var y; var spell = true;
	if (x != y)
		spell = false;
	return spell;
}


function buildTable(rows, cols, fill, style)
{	
	var rows; var cols; var fill; var ranNum;
	var i; var j; var style;
	document.write("<link href='" + style + "' rel='stylesheet' type='text/css' />");
	document.write("<div id='content'><p>&nbsp;</p>");
	document.write("<table width = '60%' border = '1' align = 'center' cellpadding = '5' cellspacing = '5'>");
	ranNum = (rows + 1) * (cols + 1);
	for (i = 0; i < rows; i++)
	{
		document.write("<tr>");
		for (j = 0; j < cols; j++)
		{
			if (fill == "empty")
				document.write("<td width = '" + (1/cols) + "%'><h1>&nbsp;<br /></h1> </td>");
			if (fill == "random")
			{
				entry = parseInt(Math.random()*ranNum)+1;
				document.write("<td width = '" + (1/cols) + "%'><h1>" + entry + "</h1></td>");
			}
			if (fill == "prompt")
			{
				entry = prompt("Enter a value for the cell in row " + (i + 1) + ", column " + (j + 1));
				document.write("<td width = '" + (1/cols) + "%'><p>" + entry + "</p></td>");
			}
		}
		document.write("</tr>");
	}
	document.write("</table> </div>");
}
/*Function that checks for the inpasses in the maze game*/
function checkImpasses(pitfalls)
	{
		//cells[0][1], cells[1][0] 
		while ( ( (pitfalls[0] == cells[0][1] )  &&  (pitfalls[1] == cells[1][0])) ||
		(   (pitfalls[1] == cells[0][1]) && (pitfalls[2] == cells[1][0]) ) ||
		( (pitfalls[0] == cells[1][0])  &&  (pitfalls[2] == cells[0][1]) ) )
		{placePitfalls(pitfalls); }
		
		//cells[0][1], cells[1][0], cells[1][1] 
		while ( ( (pitfalls[0] == cells[0][1] )  &&  (pitfalls[1] == cells[1][0]) && (pitfalls[2] == cells[1][1] ) ) ||
		( (pitfalls[0] == cells[1][1] )  &&  (pitfalls[1] == cells[0][1]) && (pitfalls[2] == cells[1][0]) ) ||
		( (pitfalls[0] == cells[1][0])  &&  (pitfalls[1] == cells[1][1] ) && (pitfalls[2] == cells[0][1]) )) 	
		{placePitfalls(pitfalls); }
			
		//cells[0][1] , cells [1][1], cells[2][0]
		while ( ( (pitfalls[0] == cells[0][1] )  &&  (pitfalls[1] == cells[1][1]) && (pitfalls[2] == cells[2][0] ) ) ||
		( (pitfalls[0] == cells[2][0] )  &&  (pitfalls[1] == cells[0][1]) && (pitfalls[2] == cells[1][1]) ) ||
		( (pitfalls[0] == cells[1][1])  &&  (pitfalls[1] == cells[2][0] ) && (pitfalls[2] == cells[0][1]) ) ) 
		{placePitfalls(pitfalls); }
				
		//cells[0][2], cells[1][1], cells[2][0]
		while ( ( (pitfalls[0] == cells[0][2] )  &&  (pitfalls[1] == cells[1][1]) && (pitfalls[2] == cells[2][0] ) ) ||
		( (pitfalls[0] == cells[2][0] )  &&  (pitfalls[1] == cells[0][2]) && (pitfalls[2] == cells[1][1]) ) ||
		( (pitfalls[0] == cells[1][1])  &&  (pitfalls[1] == cells[2][0] ) && (pitfalls[2] == cells[0][2]) ) ) 
		{placePitfalls(pitfalls); }		
		
		//cells[2][4], cells[3][3], cells[2][4] 
		while ( ( (pitfalls[0] == cells[4][2] )  &&  (pitfalls[1] == cells[3][3]) && (pitfalls[2] == cells[2][4]) ) ||
		( (pitfalls[0] == cells[2][4] )  &&  (pitfalls[1] == cells[4][2]) && (pitfalls[2] == cells[3][3]) ) ||
		( (pitfalls[0] == cells[3][3])  &&  (pitfalls[1] == cells[2][4] ) && (pitfalls[2] == cells[4][2]) ) ) 
		{placePitfalls(pitfalls); }	
				
		//cells[4][3], cells[3][3], cells[3][4],
		while ( ((pitfalls[0] == cells[4][3] )  &&  (pitfalls[1] == cells[3][3]) && (pitfalls[2] == cells[3][4])) ||
		((pitfalls[0] == cells[3][4] )  &&  (pitfalls[1] == cells[4][3]) && (pitfalls[2] == cells[3][3])) ||
		((pitfalls[0] == cells[3][3])  &&  (pitfalls[1] == cells[3][4] ) && (pitfalls[2] == cells[4][3])) ) 
		{placePitfalls(pitfalls); }
		
		//cells[4][3], cells[3][4]
		while ( ( (pitfalls[0] == cells[4][3])  &&  (pitfalls[1] == cells[3][4])) ||
		((pitfalls[1] == cells[3][3]) && (pitfalls[2] == cells[3][4])) ||
		( (pitfalls[0] == cells[3][4]  &&  (pitfalls[2] == cells[4][3])) ) )
		{placePitfalls(pitfalls); }
		
		// cells[4][3], cells[3][3], cells[3][4]
		while ( ((pitfalls[0] == cells[4][3] )  &&  (pitfalls[1] == cells[3][3]) && (pitfalls[2] == cells[3][4])) ||
		((pitfalls[0] == cells[3][4] )  &&  (pitfalls[1] == cells[4][3]) && (pitfalls[2] == cells[3][3])) ||
		((pitfalls[0] == cells[3][3])  &&  (pitfalls[1] == cells[3][4] ) && (pitfalls[2] == cells[4][3])) ) 
		{placePitfalls(pitfalls); }
		//cells[0][1], cells[1][0], cells[1][1]  cells[4][3], cells[3][3], cells[3][4]
		while (	(pitfalls[4] == cells[0][1] )  || (pitfalls[4] == cells[1][0]) || (pitfalls[4] == cells[1][1]) || (pitfalls[4] == cells[4][3] ) || (pitfalls[4] == cells[3][3] ) || (pitfalls[4] == cells[3][4]))
		{placePitfalls(pitfalls); }
	}
	
	/*Sign up page */
	//function that sets the avatar
	function pickAvatar(picked)
	{
		var avatar = document.getElementById(picked).value;
		document.getElementById('my_avatar').innerHTML = avatar;
		avatar = avatar.toLowerCase();
		document.getElementById('avatar_img').innerHTML = ("<img src='images/" + avatar + ".jpg'/>"); 
	}
	//function that sets the real name
	function getFirstName(firstname)
	{
		var firstname = document.getElementById(firstname).value;
		document.getElementById('first_name').innerHTML = firstname;
	}
		//function that sets the real name
	function getLastName(lastname)
	{
		var lastname = document.getElementById(lastname).value;
		document.getElementById('last_name').innerHTML = lastname;
	}
	//function that sets the username
	function getUsername(username)
	{
		var user = document.getElementById(username).value;
		document.getElementById('user_name').innerHTML = user;
	}
	//function that sets the user email
	function getEmail(email)
	{
		var email = document.getElementById(email).value;
		document.getElementById('email_address').innerHTML = email;
	}
	//function that sets the user password
		function getPassword(password)
	{	
		var password = document.getElementById(password).value;
		if ( (password.length < 8) || (password.length > 15))
		{
			alert("Please enter a password that is between 8 and 15 characters");
		}
		else
		{
			var hiddenPassword  = " ";
			for (var i = 0; i< password.length; i++)
			{	hiddenPassword += "*";}
			document.getElementById('hidden_password').innerHTML = hiddenPassword;
		}
	}

	//functions that sets the three weapons
	function pickWeapons()
	{
		var i = 0; var j = 0; var k=0;
		var weapon1 = ""; var weapon2 = "";  var weapon3 = ""; 
		//set the first weapon
		for (i=0; i <=9; i++)
		{
			if (document.getElementById("w"+ i).checked==true)
			{
				weapon1 = document.getElementById("w"+i).value;
				document.getElementById('weapon_one').innerHTML = weapon1;
				break;
			}
		}
		//set the second weapon
		for (j=(i+1); j<=9; j++)
		{
			if (document.getElementById("w"+ j).checked==true)
			{
				weapon2 = document.getElementById("w"+j).value;
				document.getElementById('weapon_two').innerHTML = weapon2;
				break;
			}
		}
		//set the third weapon
		for (k=(j+1); k <=9; k++)
		{
			if (document.getElementById("w"+ k).checked==true)
			{
				weapon3 = document.getElementById("w"+k).value;
				document.getElementById('weapon_three').innerHTML = weapon3;
				break;
			}
		}
	}
	//function that sets the five supplies
	function pickSupplies()
	{
		var i = 0; var j = 0; var k=0; var m=0; var p = 0; 
		var supply1 = ""; var supply2 = "";  var supply3 = "";   var supply4 = "";  var supply5 = "";
		//Get the first item
		for (i =0; i <=9; i++)
		{
			if (document.getElementById("s" + i).checked == true)
			{
				supply1 = document.getElementById("s"+i).value;
				document.getElementById('supply_one').innerHTML = supply1;
				break;
			}
		}
		//get the second item
		for (j =(i +1); j <=9; j++)
		{
			if (document.getElementById("s" + j).checked == true)
			{
				supply2 = document.getElementById("s"+j).value;
				document.getElementById('supply_two').innerHTML = supply2;
				break;
			}
		}
		//get the third item
		for (k =(j+1); j <=9; k++)
		{
			if (document.getElementById("s" + k).checked == true)
			{
				supply3 = document.getElementById("s"+k).value;
				document.getElementById('supply_three').innerHTML = supply3;
				break;
			}
		}
		
		for (m =(k +1); j <=9; m++)
		{
			if (document.getElementById("s" + m).checked == true)
			{
				supply4 = document.getElementById("s"+m).value;
				document.getElementById('supply_four').innerHTML = supply4;
				break;
			}
		}
		
		for (p =(m +1); j <=9; p++)
		{
			if (document.getElementById("s" + p).checked == true)
			{
				supply5 = document.getElementById("s"+p).value;
				document.getElementById('supply_five').innerHTML = supply5;
				break;
			}
		}

	}
	//Function that clears the entered information from the display when the reset button is clicked
	function resetInfo()
	{
	document.getElementById('my_avatar').innerHTML = "";
	document.getElementById('avatar_img').innerHTML = "";
	document.getElementById('first_name').innerHTML = "";
	document.getElementById('last_name').innerHTML = "";
	document.getElementById('user_name').innerHTML = "";
	document.getElementById('email_address').innerHTML = "";
	document.getElementById("hidden_password").innerHTML ="";
	
	document.getElementById('weapon_one').innerHTML = "";
	document.getElementById('weapon_two').innerHTML = "";
	document.getElementById('weapon_three').innerHTML = "";
	
	document.getElementById('supply_one').innerHTML = "";
	document.getElementById('supply_two').innerHTML = "";
	document.getElementById('supply_three').innerHTML = "";
	document.getElementById('supply_four').innerHTML = "";
	document.getElementById('supply_five').innerHTML = "";
	}
	
		//Script to get the username
	//str is passed to the function by the onkeyup event
	function showHint(str)
	{ 
		//if nothing is typed, nothing is returned
		if(str.length==0)
		{
			document.getElementById("txtHint").innerHTML="";
			return;
		}
		//handle older browsers
		if (window.XMLHttpRequest)					//new browser
		{var xmlhttp = new XMLHttpRequest();}
		else														//old browser
		{var xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");}
		
	//onreadystatechange triggers whenthe readyState changes
		xmlhttp.onreadystatechange = function()
		{
			//check that the request is finished and the page is found
			if ((xmlhttp.readyState == 4) && (xmlhttp.status ==200))
			{
				//get the server responce as a string
				document.getElementById("txtHint").innerHTML = xmlhttp.responseText;
			}
		}
		xmlhttp.open("GET", "getName.php?q="+str, true);
		//execute the request
		xmlhttp.send();
	}
	
	
	/*function to get the picture array for the memory game*/
	
	function getPictures(num)
	{

		var pictures;
		switch(num)
		{
			case 0:
			{ pictures =	new Array(["castle", "horse", "smallWizard2", "elf"],
										  ["ghost", "lich", "ghost", "smallWizard1"],
										  ["flowers", "smallWizard2", "horse", "castle"],
										  ["smallWizard1", "flowers", "elf", "lich"]);
				break;
			}
			case 1:
			{ pictures =	new Array(["smallWizard1", "horse", "smallWizard2", "elf"],
								  ["ghost", "lich", "flowers", "castle"],
								  ["flowers", "smallWizard2", "horse", "castle"],
								  ["lich", "ghost", "elf", "smallWizard1"]);
				break;
			}
			case 2:
			{ pictures =	new Array(["flowers", "smallWizard2", "horse", "castle"],
								  ["smallWizard1", "lich", "ghost", "ghost"],
								  ["castle", "horse", "smallWizard2", "elf"],
								  ["smallWizard1", "flowers", "elf", "lich"]);
				break;				  
			}
			case 3: 
			{ pictures =	new Array(["castle", "horse", "smallWizard2", "elf"],
								  ["flowers", "smallWizard2", "horse", "castle"],
								  ["smallWizard1", "flowers", "elf", "lich"],
								  ["ghost", "lich", "ghost", "smallWizard1"]);
				break;
			}
		}
		return pictures;

	}