// Twitter follow 
!function(d,s,id){
	var js,fjs=d.getElementsByTagName(s)[0],
    p=/^http:/.test(d.location)?'http':'https';
    if(!d.getElementById(id)){js=d.createElement(s);
	  js.id=id;js.src=p+'://platform.twitter.com/widgets.js';
	  fjs.parentNode.insertBefore(js,fjs);}}
	  (document, 'script', 'twitter-wjs');

// Facebook Like
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.6";
      fjs.parentNode.insertBefore(js, fjs);
  }
    (document, 'script', 'facebook-jssdk'));

// Google Map
var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var labelIndex = 0;

function initMap() {
  var myLocation = { lat: -33.91489, lng: 18.4137471 };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: myLocation
  });

    google.maps.event.addListener(map, 'click', function(event) {
    addMarker(event.latLng, map);
  });

  addMarker(myLocation, map);
}

function addMarker(location, map) {
  var marker = new google.maps.Marker({
    position: location,
    label: labels[labelIndex++ % labels.length],
    map: map,
    draggable: true,
    animation: google.maps.Animation.DROP
  });
}

$(document).ready(function() {
	// Scroll to Top
	var offset = 250;
	var duration = 300;

	$(window).scroll(function() {
	  if ($(this).scrollTop() > offset) {
	    $('.back-to-top').fadeIn(duration);
	  } else {
	    $('.back-to-top').fadeOut(duration);
	  }       
	});

	$('.back-to-top').click(function(event) {
	  $('html, body').animate({scrollTop: 0}, duration);
	    return false;
	});

	// Smooth scroll
	var $root = $('html, body');
	
	$('.navbar-nav a').click(function() {
    var href = $.attr(this, 'href');
    $root.animate({
        scrollTop: $(href).offset().top
    }, 500, function() {
        window.location.hash = href;
    });
      
    return false;
	});

	// Parallax effect
	$('#works').stellar();

  // Tooltips
	$('#tooltip1').tooltip();
	$('[data-toggle="tooltip"]').tooltip();  

	// Remove focus from button on click
	$(".btn").mouseup(function() {
		$(this).blur();
	});

	// Submit button
  $("#submit-button").on("click", function() {
  	console.log("clicked");
	  var comment = $(".message-box").val();
	  console.log(comment);

	  if(comment == "") {
			$(".message-box").css("border", "2px solid red");
	  } else {
	  	$(".message-box").hide();
			$("#visible-comment").html("Your message: " + comment);
	  };

	  return false;	  
  });

	// Running character count on message box
  $(".message-box").on("keyup", function() {
    console.log("keyup happened");
  	var charCount = $(".message-box").val().length;
  	console.log(charCount);

  $("#char-count").html(charCount);
	  if(charCount > 50) {
	  	$("#char-count").css("color", "red");
	  } else {
	  	$("#char-count").css("color", "white");
	  };

  	return false;  
  });

	// Work section
	for(var i = 0; i < works.length; ++i) {
		$("#work").append("\
			<div class='col-xs-12 col-sm-6 col-md-3'>\
        <a href='" + works[i].url + "' class='work-img'>\
        	<img src='" + works[i].pic + "' class='img-responsive work-panel'>\
      		<span class='info'><p class='proj-title'>Title:</p>" + works[i].title + "</span>\
      	</a>\
      </div>\
		");

		var images = $("#work img");

		if (i%2 === 0) {
			$(images[i]).css("border", "2px solid DodgerBlue");
		} else {
			$(images[i]).css("border", "2px solid salmon");
		};
	};
	
	$(".work-img").mouseenter(function() {
		$(".info", this).show();
	}).mouseleave(function(){
		$(".info", this).hide();
	}); 

// END DOCUMENT READY
});

    