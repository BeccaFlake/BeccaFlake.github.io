<?php
	$dbConn = mysqli_connect('localhost', 'rebecca', 'kravitz');

	if (!$dbConn){
		die('Could not connect: ' . mysqli_error($dbConn));
	}
?>