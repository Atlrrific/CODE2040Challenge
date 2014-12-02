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
/**
 * NAME : find_Neddle button click function
 *
 * Grab data from the haystack andneddle text boxes and 
 * dellegates the search of the index of the string on an 
 * array of strings. Prints out the of the index if its found
 * or a it was not found message.
 */

$( "#find_Neddle" ).click(function() {

  var haystack = $("#haystack").val();
  var neddle = $("#neddle").val();
    //Remove quoatations
  haystack = haystack.replace(/['"]+/g, '');
  //Insert the string as a an array on the variable
  var array = haystack.split(',');

  var index;

  //Delegating index to lookForNeddle Function
  index = lookForNeddle(array,neddle);
      //Print out results 
      if(index == -1)
      {
            //Neddle was not in the haystack
            document.getElementById('result').innerHTML = 'The Neddle was not found';
      }
      if(index>-1){
            //Print out the index
            document.getElementById('result').innerHTML = 'The Neddle is at Index ' + index;
      }
      if(index==-2){
        document.getElementById('result').innerHTML = 'Write the neddle and haystack on the texboxes, ' + 
                            'or look at an example by clicking the example button';
      }

  });


/**
 * NAME: lookForNeddle
 * Looks for the index of a string on an array of strings.
 * @param haystack : array of strings 
 * @param neddle :  string to be looked for
 * @return index of the string on the array.
 */
function lookForNeddle(array,neddle) {
  
  var index = 0; 
  if(array&&neddle){
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

    return -2;
}

///////////////////////////////////////////////////////
//Stage III
///////////////////////////////////////////////////////
/**
 * NAME : prefixButton button click function
 *
 * Grab data from the prefix and stringArray text boxes and 
 * dellegates the comparison of the beggining of each element 
 * of the array of strings to the prefix to the stringsWithoutPrefix
 * function. Prints out the of the the array containing the strings
 * without the prefix or a "it was not found" message.
 */

$( "#prefixButton" ).click(function() {

  var prefix = $("#prefix").val();
  var stringArray = $("#stringArray").val();
    //Remove quoatations
  stringArray = stringArray.replace(/['"]+/g, '');
  //Insert the string as a an array on the variable
  stringArray = stringArray.split(',');

  var stringResult;
  //Delegating index to lookForNeddle Function
  stringResult = stringsWithoutPrefix(stringArray,prefix);
      //Print out results 
      if(!stringResult){
        document.getElementById('resultIII').innerHTML = 'Write the prefix and the string array on the texboxes, ' + 
                            'or look at an example by clicking the example button';
      }
      else{
        document.getElementById('resultIII').innerHTML = 'The strings that do not contain the prefix are ' + stringResult;

      }

  });


/**
 * NAME: stringsWithoutPrefix
 * Looks for the strings in an array that do not start with a prefix
 * and return the string.
 * @param array : array of strings 
 * @param neddle :  prefix to be checked
 * @return array with the strings that do not contain the prefix
 */
function stringsWithoutPrefix(array,prefix) {
  
  var index = 0; 
  var prefixLength = prefix.length;

  var result;

  var stringsWithoutPrefix = new Array();;
    if(array&&prefix){
    //Iterate thorugh the array, checking if the array element start with the prefix
        for(var i = 0; i < array.length;i++){
            /*Comparing neddle and every index on the haystack array
            Trim is to remove any empety spaces, and we compare the substring
            since we are only looking at the beginning of the element on the array*/
            if(prefix != array[i].trim().substring(0,prefixLength)){
                stringsWithoutPrefix.push(array[i].trim());
            }
        }

        //Return result
        result =  stringsWithoutPrefix;

    }

    else{
        result= false;   
    }

    return result;

}

//Example button writes down the prefix and the string array on the textboxes
$("#exampleIII").click(function(){
    $("#prefix").val("328");
    $("#stringArray").val('"405uBrMv", "554ahyBJ", "328pL5h0", "554h6WDR", "554NLOdv", "405DVNK6"');
    
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
