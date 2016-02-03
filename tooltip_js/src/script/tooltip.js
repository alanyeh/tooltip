'use strict'

var Tooltip = {
	init: function(){
		var theLinks = document.getElementsByTagName('a');
		console.log();
		if( theLinks ) {
			//find all links and loop through
			for(var i = 0; i < theLinks.length; i++) {
				//if loop is hovered over then show 
				if ( theLinks[i].title.length ){
					theLinks[i].addEventListener("mouseover",Tooltip.showTip);
					theLinks[i].addEventListener("mouseout",Tooltip.hideTip);
				}
			}
		}
	},
	showTip: function( event ){
		//create span element 
		var spanRef = document.createElement('span');
		//add class to it 
		spanRef.className = 'tooltip';
		// capture data attribute 
		// add data attribute to span tag 
		spanRef.innerHTML = event.target.title;
		//append to hovered element
		event.target.appendChild(spanRef);
		//event.target 
		event.target._spanRef = spanRef;

	},
	hideTip: function( event ){
		event.target.removeChild( event.target._spanRef);
	}
};

window.addEventListener("load",Tooltip.init);