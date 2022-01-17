// JavaScript Document

var buttons = document.getElementsByClassName("btn-expand");
var i;

for (i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
	  
	// set the button as active
    this.classList.toggle("active");
	
	// get parent header element
	var header = this.parentElement.parentElement;
	
	// get body element
	var content = this.parentElement.parentElement.nextElementSibling;
	
	// expand or collapse body (+ change icon)
	if (content.style.maxHeight){
	  
	  // add header border radius
	  header.style.borderRadius = "10px 10px 10px 10px";
	  
      content.style.maxHeight = null;
	  content.style.padding = 0 + "px";
	  this.childNodes[0].childNodes[0].className = "fas fa-angle-double-right";
	  
    } else {
	  
      content.style.maxHeight = content.scrollHeight + "px";
	  content.style.padding = 10 + "px";
	  this.childNodes[0].childNodes[0].className = "fas fa-angle-double-left";
	  
	  // remove header border radius
	  header.style.borderRadius = "10px 10px 0px 0px";
	  
    } 
	
  });
} 


function expandAll() {
	for(var i = 0; i < buttons.length; i++) {
		
		// get body element
		var content = buttons[i].parentElement.parentElement.nextElementSibling;
		
		if(buttons[i].parentElement.parentElement.parentElement.parentElement.classList.contains("show")){
		
			if (!content.style.maxHeight){
			
				// toggle active
				buttons[i].classList.toggle("active");
				
				// update icon
				buttons[i].childNodes[0].childNodes[0].className = "fas fa-angle-double-left";
		
				// get parent header element
				var header = buttons[i].parentElement.parentElement;
				
				// add header border radius
				header.style.borderRadius = "10px 10px 0px 0px";
				
				// expand body
				content.style.maxHeight = content.scrollHeight + "px";
				content.style.padding = 10 + "px";
				
			}
		}
		
	}
}

function collapseAll() {
	for(var i = 0; i < buttons.length; i++) {
		
		// get body element
		var content = buttons[i].parentElement.parentElement.nextElementSibling;
		
		if (content.style.maxHeight){
		
			// toggle active
			buttons[i].classList.toggle("active");
		
			// update icon
			buttons[i].childNodes[0].childNodes[0].className = "fas fa-angle-double-right";

	    	// get parent header element
			var header = buttons[i].parentElement.parentElement;
		
			// add header border radius
	    	header.style.borderRadius = "10px 10px 10px 10px";
		
			// collapse body
			content.style.maxHeight = null;
			content.style.padding = 0 + "px";
		}
		
	}
}