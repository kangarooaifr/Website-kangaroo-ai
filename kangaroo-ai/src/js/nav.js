// JavaScript Document


// set the menu item as active
function setActive(){
	
	// set active
    this.className += 'active';
	
	// remove from home
	document.getElementById("home").className = "none";
	
	}