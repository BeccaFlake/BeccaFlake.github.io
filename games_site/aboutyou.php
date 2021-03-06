<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">


<head>
	<title>Hall of Amusements| Sign Up</title>
	<link href="main.css" rel="stylesheet" type="text/css" />	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Philosopher|Catamaran">
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<!-- link to js page -->
	<script type="text/javascript" src="JS/mySource.js"></script>
	<script type="text/javascript">
	</script>
</head>

<body>
	<div id="container">
	<!--Header-->
	<header>
		<h1 id="logo">Hall of Amusements</h1>
		<h2 align="center">Games for Everyone!</h2>
		</header>
	<!-- navigation menu-->	
	<nav id="nav_menu">
	  <ul>
		  <li><a href="index.html">Home</a></li>
		  <li><a href="about.html">About</a></li>
		  <li><a href="play_games.html">Games</a>
		  <li><a href="signin.html">Sign In</a></li>
		  <li><a href="aboutyou.php">Sign Up</a></li>
		  <li><a href="contact.html">Contact</a></li>
	  </ul>
	</nav>
		<!--Main content of the page-->
		<div id="content">
			<h2><br/>Tell Us About You</h2>
			<h3>Your Information and Inventory</h3>
			<p>Enter your information below and then double check it before submitting it to the database.</p>
			<div>
			<!--Form-->	
			<form name = "inventory" action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
					<div></div>
					<!--Avatar selection-->
					<div>
					<fieldset id="avatar">
					<table  width ="45% "border="2" class="sInAvatar" id="avatarTable"> <br/>
					<!--Header-->
					<tr> 
						<td colspan="5" class="nobdr" id="headerRow"><h3>Your Avatar:</h3></td>
					</tr>
					<!--Images-->
					<tr> 
						<!--Bunny -->
						<td class="nobdr"><img src="images/bunny.jpg"/></td>
						<!--Elf-->
						<td class="nobdr"><img src="images/elf.jpg"/></td>
						<!--Ghost-->
						<td class="nobdr"><img src="images/ghost.jpg"/></td>
						<!--Princess-->
						<td class="nobdr"><img src="images/princess.jpg"/></td>
						<!--Wizard-->
						<td class="nobdr"><img src="images/wizard.jpg"/></td>
					</tr>
					<!--Radio buttons-->
					<tr>
						<!--Bunny -->
						<td class="nobdr"><input type="radio" name="avatar" id="bunny" value="Bunny" onclick="pickAvatar('bunny')"></td>
						<!--Elf-->
						<td class="nobdr"><input type="radio" name="avatar" id="elf" value="Elf" onclick="pickAvatar('elf')"></td>
						<!--Ghost-->
						<td class="nobdr"><input type="radio" name="avatar" id="ghost" value="Ghost" onclick="pickAvatar('ghost')"></td>
						<!--Princess-->
						<td class="nobdr"><input type="radio" name="avatar" id="princess" value="Princess" onclick="pickAvatar('princess')"></td>
						<!--Wizard-->
						<td class="nobdr"><input type="radio" name="avatar" id="wizard" value="Wizard" onclick="pickAvatar('wizard')"></td>
					</tr>
					</table>
					</fieldset>
					
					</div>
				<div>

					<!--basic information-->
					<fieldset id="basicInfo">
					<h3> Enter the following information: </h3>
						<!--Name-->
						<p>
							<label for="firstname"> Your first name:<br/></label>
							<input type="text" id="firstname" size="40" value=""/>
							<input type="button" onclick="getFirstName('firstname')" value="ok"></button>
						</p>
						<p>
							<label for="lastname"> Your last name:<br/></label>
							<input type="text" id="lastname" size="40" value=""/>
							<input type="button" onclick="getLastName('lastname')" value="ok"></button>
						</p>
						<!--username-->
						<p>
							<label for="username"> Your username:<br/></label>
							<input type="text" id="username" size="40" value=""/>
							<input type="button"  onclick="getUsername('username')" value="ok"></button>
						</p>
						<!--points-->
						<p>
							<label for="email"> Your Email<br/></label>
							<input type="email" id="email" size="29" value=""/>
							<input type="button"onclick="getEmail('email')" value="ok"></button>
						</p>
					</fieldset></div>
				<!--Weapon Selection-->
					<div style="width:31%; float:left;" id="weaponsDiv"><fieldset id="weapons">
						<h3>Select three weapons to help you in your quest: </h3>
						<!--Sword-->
						<input type="checkbox" name="weapons" id="w0" value="Sword"/> Sword<br/>
						<!--Slingshot-->
						<input type="checkbox" name="weapons" id="w1" value="War Hammer"/> Slingshot<br/>
						<!--Shield-->
						<input type="checkbox" name="weapons" id="w2" value="Shield"/> Shield <br/>
						<!--Bow and 10 arrows-->
						<input type="checkbox" name="weapons" id="w3" value="Bow and 10 Arrows"/> Bow and 10 Arrows<br/>
						<!--Magic Rocks-->
						<input type="checkbox" name="weapons" id="w4" value="Axe" /> Axe<br/>
						<!--Knife-->
						<input type="checkbox" name="weapons" id="w5" value="Daggers (2)"/> Daggers (2)<br/>
						<!--Staff-->
						<input type="checkbox" name="weapons" id="w6" value="Umbrella-Staff"/> Umbrella-Staff<br/>
						<!--Wizard's Wand-->
						<input type="checkbox" name="weapons" id="w7" value="Wizard's Wand"/> Wizard's Wand<br/>
						<!--Extra arrows-->
						<input type="checkbox" name="weapons" id="w8" value="Whip"/> Whip <br/>
						<!--Cloak of Invisibility-->
						<input type="checkbox" name="weapons" id="w9" value="Lance"/> Lance<br/>
						<input type="button" onclick="pickWeapons()" value="Enter "></button>
					</fieldset></div>
					<!--Item selection-->
					<div style="width:33%; float:left;" id="itemsDiv"><fieldset id="items">
						<h3>Select five items to carry with you on your journey: </h3>
						<!--Supplies-->
						<input type="checkbox" name="supplies" id="s0" value="3-Day Food and Water Supply"/> 3-Day Food and Water Supply<br/>
						<!--Slingshot-->
						<input type="checkbox" name="supplies" id="s1" value="Bag of Holding"/> Bag of Holding<br/>
						<!--Shield-->
						<input type="checkbox" name="supplies" id="s2" value="Leather Armor"/> Leather Armor <br/>
						<!--Bow and 10 arrows-->
						<input type="checkbox" name="supplies" id="s3" value="Spyglass"/> Spyglass<br/>
						<!--Magic Rocks-->
						<input type="checkbox" name="supplies" id="s4" value="Lantern" /> Lantern<br/>
						<!--Knife-->
						<input type="checkbox" name="supplies" id="s5" value="Tent"/> Tent<br/>
						<!--Staff-->
						<input type="checkbox" name="supplies" id="s6" value="Thieves' Tools"/> Thieves' Tools<br/>
						<!--Wizard's Wand-->
						<input type="checkbox" name="supplies" id="s7" value="Cloak of Invisibility"/> Cloak of Invisibility<br/>
						<!--Extra arrows-->
						<input type="checkbox" name="supplies" id="s8" value="3 Potions"/> 3 Potions<br/>
						<!--Cloak of Invisibility-->
						<input type="checkbox" name="supplies" id="s9" value="Book of Spells"/> Book of Spells<br/>
						<input type="button" onclick="pickSupplies()" value="Enter "></button>
					</fieldset></div>	
					</div><div style = "clear:both;"></div>
					<!--selecton reset-->
					<div><input type="reset" id="infoReset" value=" Reset all fields" onclick="resetInfo()"> <input type="submit" name="frmAddPlayer" value="Submit to Database"/><br/></div>
				</form>
				<!--display the information-->
				<div style="width:90%; float:left;" id="info">
					<h3>Your Information: <br/><br/>
					<h3>First Name: </h3><p id="first_name">&nbsp;</p> <br/>
					<h3>Last Name: </h3><p id="last_name">&nbsp;</p> <br/>
					<h3>Username: </h3><p id="user_name">&nbsp;</p> <br/>
					<h3>Email: </h3><p id="email_address">&nbsp;</p> <br/>
					<h3>Avatar: </h3><p id="my_avatar">&nbsp;</p> <span id="avatar_img">&nbsp;</span><br/><br/>
					
					<h3>Weapons: </h3><br/>
						<p id="weapon_one"></p> <br/>
						<p id="weapon_two"></p> <br/>
						<p id="weapon_three"></p> <br/><br/>
					<h3>Supplies: </h3><br/>
						<p id="supply_one"></p> <br/>
						<p id="supply_two"></p> <br/>
						<p id="supply_three"></p> <br/>
						<p id="supply_four"></p> <br/>
						<p id="supply_five"></p> <br/>
					</h3>
				</div>
				
		</div><div style = "clear:both;"></div>
	<footer>
		<p>Copyright &copy; 2017 Hall of Amusements || <a href="mailto:rebecca.c.rebecca@my.sfcollege.edu">rebecca.c.rebecca@my.sfcollege.edu</a></p>
	</footer>
	</div>
</body>
</html>
