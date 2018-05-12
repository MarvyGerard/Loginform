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