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

//Example button writes down the haystack and the neddle on the textboxes
$("#exampleII").click(function(){
    $("#neddle").val("sqNgU");
    $("#haystack").val('"1rMTE", "bMatw", "LqKjd", "P1PXU", "bDP7z", "tEQDZ", "fJpkW",'+
        ' "L6G4M", "AACBY", "nc3mF", "0jSIl", "T5W12", "emIep", "sqNgU", "1kTsh", "8d9ri", "0iZrj", "sGTqK", "GKZxv", "cBTWL"');
    
});

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

  var stringsWithoutPrefix = new Array();
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

///////////////////////////////////////////////////////
//Stage IV
///////////////////////////////////////////////////////
/**
 * NAME : dateStampButton button click function
 *
 * Grab data from the timeStamp and irval text boxes and 
 * dellegates to addDate the addition of the interval with
 * the date stamp
 * Prints out the new date stamp
 */

$( "#dateStampButton" ).click(function() {

  var dateStamp = $("#timeStamp").val();
  var interval = parseFloat($("#interval").val());
    //Remove quoatations

  //Delegating index to lookForNeddle Function
  var dateResult = addDate(dateStamp,interval);
      //Print out results 
      if(!dateResult){
        document.getElementById('resultIV').innerHTML = 'Write the prefix and the string array on the texboxes, ' + 
                            'or look at an example by clicking the example button';
      }
      else{
        document.getElementById('resultIV').innerHTML = 'The date stamp plus the interval is  ' + dateResult;

      }

  });


/**
 * NAME: addDate
 * Adds the interval in seconds to the day stamp
 * @param array : interval in seconds
 * @param neddle :  Date stamp in ISO 8601 format
 * @return new date stamp
 */
function addDate(dateStamp,interval) {
  
    //Ratios
    var secYearRatio = 1/(60*60*24*30.4368*12);
    var yearMonthRatio  = 12;
    var monthDayRatio = 30.4;
    var dayHourRatio = 24;
    var hourMinRatio = 60;
    var minSecRatio = 60;

    //Datestamp date units
    var oldYear;
    var oldMonth;
    var oldDay;
    var oldHour;
    var oldMin;
    var oldSec;

    //Interval date units
    var addYears;
    var addMonths;
    var addDays;
    var addHours;
    var addMin;
    var addSec;

    //Unit Carry
    var unitCarry1;
    var temp;

    //Separate string
    //"2013-06-18T15:30:00.000Z"
    oldYear = parseFloat(dateStamp.substring(0,4));
    oldMonth = parseFloat(dateStamp.substring(5,7));
    oldDay = parseFloat(dateStamp.substring(8,10));
    oldHour = parseFloat(dateStamp.substring(11,13));
    oldMin = parseFloat(dateStamp.substring(14,16));
    oldSec = parseFloat(dateStamp.substring(17,19));

    //Converting Interval to years
    //Where the integers are sectoUnit ratios.
    addYears = Math.floor(interval / 31536000);
    addMonths = Math.floor((interval % 31536000) / (2652480 )); 
    addDays = Math.floor((interval % 31536000)%(2652480) / 86400); 
    addHours = Math.floor(((interval % 31536000) % 86400) / 3600);
    addMin = Math.floor((((interval % 31536000) % 86400) % 3600) / 60);
    addSec = (((interval % 31536000) % 86400) % 3600) % 60;


    //Adding intervals and the dateStamp
    //Adding seconds

    temp = oldSec;
    oldSec = (oldSec + addSec)%minSecRatio;
    unitCarry1 = Math.floor((temp+addSec)/minSecRatio);
    
    temp = oldMin;
    oldMin = (oldMin+addMin+unitCarry1)%hourMinRatio;
    unitCarry1 = Math.floor((temp+addMin+unitCarry1)/hourMinRatio);

    temp = oldHour
    oldHour = (oldHour+addHours+unitCarry1)%dayHourRatio;
    unitCarry1 = Math.floor((temp+addHours+unitCarry1)/dayHourRatio);

    temp = oldDay;
    oldDay = Math.round((oldDay+addDays+unitCarry1)%monthDayRatio);
    unitCarry1 = Math.floor((temp+addDays+unitCarry1)/monthDayRatio);

    temp = oldMonth;
    oldMonth = (oldMonth+addMonths+unitCarry1)%yearMonthRatio;
    unitCarry1 = Math.floor((temp+addMonths+unitCarry1)/yearMonthRatio);

    oldYear = (oldYear+addYears+unitCarry1);


    //String conversion
    var dateString = new Array(); 
    dateString.push(oldYear.toString());

    dateString.push(oldMonth.toString());
    if(dateString[1].length!=2)
        dateString[1] = "0" + dateString[1];

    dateString.push(oldDay.toString());
    if(dateString[2].length!=2)
        dateString[2] = "0" + dateString[2];

    dateString.push(oldHour.toString());
    if(dateString[3].length!=2)
        dateString[3] = "0" + dateString[3];

    dateString.push(oldMin.toString());
    if(dateString[4].length!=2)
        dateString[4] = "0" + dateString[4];

    dateString.push(oldSec.toString());
    if(dateString[5].length!=2)
        dateString[5] = "0" + dateString[5];

    //"datestamp": "2013-06-18T15:30:00.000Z"
    var result = dateString[0]+ "-"+dateString[1]+"-"+dateString[2]
                +"T"+dateString[3]+":"+dateString[4]+":"+dateString[5]
                +".000Z";

    return result;


}

//Example button writes down the prefix and the string array on the textboxes
$("#exampleIV").click(function(){
    $("#timeStamp").val("2013-06-18T15:30:00.000Z");
    $("#interval").val("375274601");
    
});


