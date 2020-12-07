// original function
function double(arr) {
  return arr.map(function (val) {
    return val * 2;
  });
}

/* Write an ES2015 Version */
const double = (arr) => arr.map((val) => val * 2);

// original functions
var squares = numbers.map(function (num) {
  return num ** 2;
});
var evens = squares.filter(function (square) {
  return square % 2 === 0;
});
// return evens;

// refactored functions
const squares = (numbers) => numbers.map((num) => num ** 2);
const evens = (squares) => squares.filter((square) => square % 2 === 0);

// invoke function to return the squared and even values of numbers array
const numbers = [1,2,3,4,5];
return evens(squares(numbers));
