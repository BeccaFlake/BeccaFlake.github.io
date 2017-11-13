<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN""http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<title>Greg's Gambits | Find Your Username</title>
	<link href="main.css" rel="stylesheet" type="text/css" />
	<script language="JavaScript" type="text/javascript">
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
	</script>
</head>
<!-- end header, body begin-->
<body>
<div id="container">
	<header>
		<h1 id="logo">[Title Pending] </h1>
		<h2 align="center">Games for Everyone!</h2>
	</header>
	<nav id="nav_menu">
	  <ul>
		  <li><a href="index.html">Home</a></li>
		  <li><a href="about.html">About</a></li>
		  <li><a href="play_games.html">Games</a>
		  <li><a href="signin.html">Sign In</a></li>
		  <li><a href="aboutyou.html">Sign Up</a></li>
		  <li><a href="contact.html">Contact</a></li>
	  </ul>
	</nav>
<!-- end header div -->

	
	

	