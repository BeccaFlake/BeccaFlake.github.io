<?php
print '
<!DOCTYPE html>
<html lang="en">
<head>
<title>Form Validation</title>
<link rel="stylesheet" type="text/css" href="formValid.css">
</head>
	<body>
		<div class="wrapper">
';

print '<h1 class="centerMe">Thank you!</h1>';

$tmp = $_POST['updates'];
if(strcmp($tmp,"no")==0){
	print "As per your request, we will not contact you in the future.";
}
else{
	print 'We will be contacting you in the future as per your request. ';
}

print '
		</div>
	</body>
</html>';

?>