var main = function () { 
    "use strict"; 

var total = 0;

for(var i = 0; i < 1000; i++) {
  if(i % 3 == 0 || i % 5 == 0) {
    total += i;
  }
}

$(".antwoord1").text("antwoord1: "+ total);


};
$(document).ready(main);

var main = function () { 
    "use strict"; 


function fib(stack, n) {
  if(n == 0) {
    return 1;
  }
  if(n == 1) {
    return 2;
  }
  return stack[n - 1] + stack[n - 2];
}

var max   = 4000000;
var total = 0;
var stack = [];

for(var i = 0; i < max; i++) {
  stack[i] = fib(stack,i);
  if(stack[i] > max) {
    break;
  }
  if(stack[i] % 2 == 0) {
    total += stack[i]
  }
}

$(".antwoord2").text("antwoord2: "+ total);


};
$(document).ready(main);

var main = function () {
 "use strict"; 

var fizzbuzz = 0;

for (var i = 0; i < 100; i++) {
  if(i% 3 == 0 || i % 5 == 0 ) {
    fizzbuzz += i;
 }
}
var resultFB; 

for (var i=1; i <= 100; i++)
{
  if (i % 15 === 0){
    resultFB = "fizzbuzz";
    $(".uitkomstfizzbuzz").append (resultFB);
    $(".uitkomstfizzbuzz").append ("<br>");
  }  
  else if (i % 3 === 0){
    resultFB = "fizz";
    $(".uitkomstfizzbuzz").append (resultFB);
    $(".uitkomstfizzbuzz").append ("<br>");
  }
  else if (i % 5 === 0){
    resultFB = "buzz";
    $(".uitkomstfizzbuzz").append (resultFB);
    $(".uitkomstfizzbuzz").append ("<br>");
  }
  else {
    resultFB = i;
    $(".uitkomstfizzbuzz").append (resultFB);
    $(".uitkomstfizzbuzz").append ("<br>");
  }

}

$(".uitkomstfizzbuzz").append (resultFB);


};
$(document).ready(main);
 

function slideSwitch() {
var $active = $('#slideshow div.active');

if ( $active.length == 0 ) $active = $('#slideshow div:last');

var $next = $active.next().length ? $active.next()
: $('#slideshow div:first');

$active.addClass('last-active');

$next.css({opacity: 0.0})
.addClass('active')
.animate({opacity: 1.0}, 1000, function() {
$active.removeClass('active last-active');
});
}

$(function() {
setInterval( "slideSwitch()", 3000 );
});



var main = function () { 
    "use strict";

    $('h4').css("color","red");
    $('h5').css("color","green");
    $('p.a1').css("color","blue");
    $('p2').css("color","brown");
    $('p').css("font-style","italic");
    $('div.relevant').css("color","purple");
    $('p4').css("font-style","oblique");

    };
$(document).ready(main);

