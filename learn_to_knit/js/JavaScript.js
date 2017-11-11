	/*
	Name: Rebecca Flake
	Current Date: 7/17/2017
	Class.section: CGS1821.CM1 
	Assignment: Final Project
	Language: JavaScript/JQuery
	Purpose: Script for the survay validation and slider
	Linked files: survay.html
*/

//Slider
$(function sliderFunction() {
	$("#slidervisual").slider({
		value: 10,
		min: 10, 
		max: 90,
		step: 10,
		
		slide: function(event, ui) {
			$("#age").val(ui.value + "-" + (ui.value+9));
		}

	});
	$("#age").val("10-19");	
	if(ui.value < 10 || ui.value >99)
		{alert("Please use the slider to enter a number between 10 and 90")}
});	


//Form Validation
	//function that validates the email input
	function validateEmail(){
		var x = document.survey_form.email.value; //get the value
		var emailPattern = /^[a-zA-Z._-]{1,25}[@][a-zA-Z]{1,25}[.][a-zA-Z]{3}$/; //variable storing the pattern
		var emailPattern2 = /^[a-zA-Z._-]{1,25}[@][a-zA-Z]{1,25}[.][a-zA-Z]{1,25}[.][a-zA-Z]{3}$/; //variable storing the pattern
		if(emailPattern.test(x) ||emailPattern2.test(x)){;}
		else{alert("Please enter an email address. For example: name@email.com")}
	}
	
	//function that validates the username input
	function validateUsername(){
		var u= document.survey_form.username.value; //get the value
		var usernamePattern = /^[A-Za-z0-9]{1,17}$/; //variable storing the pattern
		if(usernamePattern.test(u)){;}
		else{alert("That is not a valid Ravelry username. Please enter a username no more than 17 characters long, using only letters and numbers.")}
	}
	
	//Functions that validates the text input
	function validateName(){
		var n = document.survey_form.name.value; //get the value
		var namePattern = /^[a-zA-Z\s]+$/; //variable storing the pattern
		if(namePattern.test(n)){;}
		else{alert("Please enter only alpabetical characters (A-Z)." )}
	}
	function validateSelfish(){
		var namePattern = /^[a-zA-Z\s]+$/; //variable storing the pattern
		var s = document.survey_form.selfish.value; //get the value
		if(namePattern.test(s)){;}
		else{alert("Please enter only alpabetical characters (A-Z)." )}
	}
	function validateExperience(){
		var namePattern = /^[a-zA-Z\s]+$/; //variable storing the pattern
		var e = document.survey_form.experience.value; //get the value
		if(namePattern.test(e)){;}
		else{alert("Please enter only alpabetical characters (A-Z)." )}
	}
	
	//Function that validates the time input 
	function validateTime(){
		var t = document.survey_form.knittime.value; //get the value
		var numPattern = /^[0-9]+$/;
		if(!numPattern.test(t)){alert("Please enter a numerical value equal to or greater than 0." )}
		if( t < 0){alert("Please enter a value equal to or greater than 0")}
	}
	
	//Function that validates the numeric input
	function validateNum(){
	var num = document.survey_form.informative.value; //get the value
	//make sure the entry is a number
	var numPattern = /^[0-9]+$/;
	if(!numPattern.test(num)){alert("Please enter a numerical value." )}
	//if the value is less than 0 or greater than 10, it is not valid.
	if (num < 0 || num > 10)			
		{alert("Please enter a number between 0 and 10" )}	
	}
	
	//Function that validates the age range
	function validateAge(){
	var age = document.survey_form.age.value; //get the value
	//make sure the entry is a number
	var numPattern = /^[0-9]+$/;
	if(!numPattern.test(age)){alert("Please enter a numerical value.")}
	if (age < 10 || age > 90)
		{alert("Please enter a value between 10 and 90")}
	}

	//function that validates the required input
	function validateReq(){
		//Variables
		var name = document.survey_form.name;
		var age = document.survey_form.age;
		var t = document.survey_form.knittime;
		var time = document.survey_form.time;
		var experience = document.survey_form.experience;
		var informative = document.survey_form.informative;
		var informPage = document.survey_form.informativePage;
		var objects = document.survey_form.objects;
		var selfish = document.survey_form.selfish;
		var ravelry = document.survey_form.Ravelry;
		var updates = document.survey_form.updates;
		var othercrafts = document.survey_form.othercrafts;
		var suggestions = document.survey_form.suggestions;
		//Makes the Name a required input
		if (name.value =="")
		{window.alert("Please enter your name")
		name.focus()
		return false;
		}
		//Makes the age range a required input
		if (age.value =="")
		{window.alert("Please enter your age range")
		age.focus()
		return false;
		}
		//Makes the experience level a required input
		if (experience.value =="")
		{window.alert("Please share your experience level.")
		experience.focus()
		return false;
		}
		//Makes the time a required input
		if (t.value =="")
		{window.alert("Please enter the amount of time")
		timeknitting.focus()
		return false;
		}
			//Makes the time radio a required input
		if (time.value == "")
		{window.alert("Please select an option")
		time.focus()
		return false;
		}
		//Makes the rating a required input
		if (informative.value =="")
		{window.alert("Please enter a value")
		informative.focus()
		return false;
		}
		//Makes the dropdown selection a required input
		if (informPage.value =="")
		{window.alert("Please select an option")
		informPage.focus()
		return false;
		}
		//Makes the object radio a required input
		if (objects.value =="")
		{window.alert("Please select an option")
		objects.focus()
		return false;
		}
		//Makes the who do you knit for question a required input
		if (selfish.value =="")
		{window.alert("Please share your thoughts")
		selfish.focus()
		return false;
		}
		//Makes the ralvery radio a required input
		if (ravelry.value =="")
		{window.alert("Please select an option")
		ravelry.focus()
		return false;
		}
		//Makes the email radio a required input
		if (updates.value =="")
		{window.alert("Please select an option")
		updates.focus()
		return false;
		}
		//Makes the ralvery username a required input if the 'yes' radio us check
		if (document.survey_form.yesRav.checked) {
			if (username.value =="")
			{window.alert("Please enter your username")
			username.focus()
			return false;}
		}
		//Makes the email a required input if the 'yes' radio us checked
		if (document.survey_form.yesEmail.checked) {
			if (email.value =="")
			{window.alert("Please enter your e-mail")
			email.focus()
			return false;}
		}
		//Makes the other crafts reply a required input
		if (othercrafts.value =="")
		{window.alert("Please share your thoughts")
		othercrafts.focus()
		return false;
		}
		//Makes the general suggestion reply a required input
		if (suggestions.value =="")
		{window.alert("Please share your thoughts")
		suggestions.focus()
		return false;
		}
	return true;
	}
	
	

//Conditional required fields
	//hides these inputs when the page loads
	window.onload = function () {
		document.getElementById('userop').style.display = 'none';
		document.getElementById('emailop').style.display = 'none';
	}	
	//if the yes radio for ravelry is checked, the username entry will be revealed
	function yesnoCheckUser() {
		if (document.getElementById('yesRav').checked) {
			document.getElementById('userop').style.display = 'block';
		} else {
			document.getElementById('userop').style.display = 'none';
		}
	}
	//if the yes radio for email updates is checked, the email entry will be revealed
	function yesnoCheckEmail() {
		if (document.getElementById('yesEmail').checked) {
			document.getElementById('emailop').style.display = 'block';
		} else {
			document.getElementById('emailop').style.display = 'none';
		}
	}



