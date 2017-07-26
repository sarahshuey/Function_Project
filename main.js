// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// Then, write and example of using the function.

function max(x, y) {
  if (x > y) {
    return x
  } else if (y > x) {
    return y
  } else {
    return x
  } // Your answer here
}
console.log(max(4, 2));

// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// Then, write and example of using the function.

function maxOfThree(x, y, z) {
  return Math.max(x, y, z);
  // Your answer here
}
console.log(maxOfThree(2, 1, 5));

// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Then, write and example of using the function.

function isVowel(char) {
  if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
    return true
  } else {
    return false
  }
  // Your answer here
}
console.log(isVowel('d'));


// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// Then, write and example of using the function.

function sum(x, y) {
  return (x + y)
}
console.log(sum(5, 3));

// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// Then, write and example of using the function.
function avg(x, y, z) {
  return ((x * y * z) / 3)
}
console.log(avg(1, 2, 3));

// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// Then, write and example of using the function.
function getLength(x) {
  return (x.length)
}
console.log(getLength('hello world'));
// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// Then, write and example of using the function.

function greatherThan(x, y) {
  if (Math.max(x, y) === y) {
    return true
  } else {
    false
  }
}
console.log(greatherThan(4, 6));
// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// Then, write and example of using the function.
function greet(x) {
  return 'Hello ' + x
}
console.log(greet('Sarah'));

// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// Then, write and example of using the function.

function madLib(a,b,c,d) {
  return 'Hello my name is ' + a + ' my favorite ' + b + ' is ' + c + ' because it is my ' + d + " "+ b
}
console.log(madLib('Sarah', 'month','July','birthday'));
