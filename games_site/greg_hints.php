
		
<?php include ('include/header.php'); ?>
<!--Main content of the page-->		
	<div id="content">
		<h3>Forgot your username? <br />
		Start typing what you remember in the input box below:</h3>
		<form>
			<h3>Username: <input type="text" onkeyup="showHint(this.value)" size="20" /></h3>
		</form>
		<p>Suggestions: <span id="txtHint"></span></p>
	</div>
<?php include ('include/footer.php'); ?>
