console.log("sourced!");


//made a jQuery variable so my linter would stop yelling at me
var $ = jQuery;

// was going to make these global variables but then moved them into my document
// ready function to see what it did and it made it work.

// var redButtonCount= 0;
// var yellowButtonCount= 0;
// var greenButtonCount= 0;
// var blueButtonCount= 0;

// create an array of the colors- thought I would use this over the document ready
//changed my mind

var colors = ["red", "yellow", "green", "blue"];

$(document).ready(function(){
  console.log( 'Ready for JQ!');


//create variables to count the number of times the buttons are clicked

var redButtonCount= 0;
var yellowButtonCount= 0;
var greenButtonCount= 0;
var blueButtonCount= 0;

//Create red div on click
$('[data-color="red"]').on('click', function(){
    console.log('The red button was clicked');
    //create red div
    $('<div class= "color-cube red"></div>').appendTo('.container');
//make sure the count goes up by 1 each time the button is clicked
redButtonCount++;
console.log('redButtonCount:', redButtonCount);
//update total red paragraph
$('#red').html('Total red: ' + redButtonCount);
});
 //end red



//Create yellow div on click
$('[data-color="yellow"]').on('click', function(){
    console.log('The yellow button was clicked');
    //create yellow div
    $('<div class= "color-cube yellow"></div>').appendTo('.container');
//make sure the count goes up by 1 each time the button is clicked
yellowButtonCount++;
console.log('yellowButtonCount:', yellowButtonCount);
//update total yellow paragraph
$('#yellow').html('Total yellow: ' + yellowButtonCount);
}); //end yellow

//Create green div on click
$('[data-color="green"]').on('click', function(){
    console.log('The green button was clicked');
    //create green div
    $('<div class= "color-cube green"></div>').appendTo('.container');
//make sure the count goes up by 1 each time the button is clicked
greenButtonCount++;
console.log('greenButtonCount:', greenButtonCount);
//update total green paragraph
$('#green').html('Total green: ' + greenButtonCount);
});

//Create blue div on click
$('[data-color="blue"]').on('click', function(){
    console.log('The blue button was clicked');
    //create blue div
    $('<div class= "color-cube blue"></div>').appendTo('.container');
//make sure the count goes up by 1 each time the button is clicked
blueButtonCount++;
console.log('blueButtonCount:', blueButtonCount);
//update total blue paragraph
$('#blue').html('Total blue: ' + blueButtonCount);
});
});

// create function using a loop to count all the buttoncounts

/// this doesn't have functionality. :(

var updateCounts = function() {
  for (var i = 0; i < $('#button p').length; i++) {
       updateCounts += '<button class="redButton" data-id=' + i +'>' + colors[i].redButton + '</button>';
}
 $( '#button' ).append( buttoncounts );
};
