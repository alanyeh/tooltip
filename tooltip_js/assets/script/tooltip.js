'use strict'

var Tooltip = {
	init: function(){
		var theLinks = document.getElementsByTagName('a');

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
		var spanElm = document.createElement("span");
		//add className tooltip
		spanElm.className = "tooltip";
		//capture title data attribute information
		spanElm.innerHTML = event.target.title;


		//add child span to hover element
		event.target.appendChild( spanElm );
		//capture spanElm info to _spanRef
		event.target._spanRef = spanElm;
	},
	hideTip: function( event ){
		//remove child span
		event.target.removeChild( event.target._spanRef);
	}
};

window.addEventListener("load",Tooltip.init);
