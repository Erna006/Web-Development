// Can I add a string property?
let str = "Hello";

str.test = 5; // (*)

alert(str.test);


// An occasional infinite loop
let i = 0;
while (i < 11) {
  i += 0.2;
  if (i > 9.8 && i < 10.2) alert( i );
}


// A random number from min to max
function random(min, max) {
  return min + Math.random() * (max - min);
}

alert( random(1, 5) );
alert( random(1, 5) );
alert( random(1, 5) );


// Extract the money
alert( extractCurrencyValue('$120') === 120 ); // true
function extractCurrencyValue(str) {
  return +str.slice(1);
}