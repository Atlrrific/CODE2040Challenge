/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});
///////////////////////////////////////////////////////
//Stage Code Begin
///////////////////////////////////////////////////////

///////////////////////////////////////////////////////
//Stage I
///////////////////////////////////////////////////////

$( "#reverse" ).click(function() {
  var str1 = $("#textbox1").val();
  //Reversed String container
  var str2 = "";
  //Reversing the string
  for (var i = str1.length-1; i > -1; i--) {
        str2+=(str1[i]);
    }
    $("#textbox1").val(str2);

});
///////////////////////////////////////////////////////
//Stage II
///////////////////////////////////////////////////////

$( "#find_Neddle" ).click(function() {

  var haystack = $("#haystack").val();
  var neddle = $("#neddle").val();
  var index;

  index = lookForNeddle(haystack,neddle);
      //Print out results 
      if(index == -1)
      {
            //Neddle was not in the haystack
            document.getElementById('result').innerHTML = 'The Neddle was not found';
      }
      else{
            //Print out the index
            document.getElementById('result').innerHTML = 'The Neddle is at Index ' + index;
      }

  });
function lookForNeddle(haystack,neddle) {
      //Remove quoatations
  haystack = haystack.replace(/['"]+/g, '');
  //Insert the string as a an array on the variable
  var array = haystack.split(',');
  
  var index = 0; 
  if(haystack&&neddle){
    //Check if the neddle is on the haystack, (comparing string and the array by indexes)
      for(var i = 0; i < array.length;i++){
        //Comparing neddle and every index on the haystack array
        if(neddle == array[i].trim()){
            index = i;
            break;
        }
        else{
            //Neddle is not on the haystack
            if(i == (array.length-1))
                index = -1;
        }
    }

    return index;

}
}
///////////////////////////////////////////////////////
//Stage II
///////////////////////////////////////////////////////


//Example button writes down the haystack and the neddle on the textboxes
$("#exampleII").click(function(){
    $("#neddle").val("sqNgU");
    $("#haystack").val('"1rMTE", "bMatw", "LqKjd", "P1PXU", "bDP7z", "tEQDZ", "fJpkW",'+
        ' "L6G4M", "AACBY", "nc3mF", "0jSIl", "T5W12", "emIep", "sqNgU", "1kTsh", "8d9ri", "0iZrj", "sGTqK", "GKZxv", "cBTWL"');
    
});



// Google Maps Scripts
// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 15,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(40.6700, -73.9400), // New York

        // Disables the default Google Maps UI components
        disableDefaultUI: true,
        scrollwheel: false,
        draggable: false,

        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 29
            }, {
                "weight": 0.2
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 18
            }]
        }, {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 16
            }]
        }, {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 21
            }]
        }, {
            "elementType": "labels.text.stroke",
            "stylers": [{
                "visibility": "on"
            }, {
                "color": "#000000"
            }, {
                "lightness": 16
            }]
        }, {
            "elementType": "labels.text.fill",
            "stylers": [{
                "saturation": 36
            }, {
                "color": "#000000"
            }, {
                "lightness": 40
            }]
        }, {
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 19
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }, {
                "weight": 1.2
            }]
        }]
    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using out element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Custom Map Marker Icon - Customize the map-marker.png file to customize your icon
    var image = 'img/map-marker.png';
    var myLatLng = new google.maps.LatLng(40.6700, -73.9400);
    var beachMarker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: image
    });
}
