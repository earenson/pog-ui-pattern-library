$(function(){

	/** Navigation
	    Used in conjunction with scrollTo to hop to appropriate sections on the page
	**/

	$('#style-navigation li').bind('click' , function(event){

	// 	// Grab the section name from the LI, process and prep. Target elements match the LI names, with the following schema:
	// 	// Page Layouts = page-layouts

	section = $(this).text();
	section = section.replace(" ","-").toLowerCase();

	console.log(section);

	$('html, body').stop().animate({scrollTop: $('#' + section).offset().top}, 1500,'easeInOutQuad');
 //        /*
 //        if you don't want to use the easing effects:
 //        $('html, body').stop().animate({
 //            scrollTop: $($anchor.attr('href')).offset().top
 //        }, 1000);
 //        */
 //        	event.preventDefault();
 //    	});

	});

});