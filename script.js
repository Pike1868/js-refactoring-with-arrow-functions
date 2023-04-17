/*
// ES5 Map callback
function double(arr){
    return arr.map(function(val){
        return val * 2;
    });
}
*/

//ES2015 Arrow Function Shorthand
const numbers = [1, 2, 3, 4, 5];

const double = (arr) => arr.map((num) => num * 2);


/*
//Refactor the following function to use arrow functions:

function squareAndFindEvens(numbers{
    var squares = numbers.map(function(num){
        return num ** 2;
    });
    var evens = square.filter(function(square){
        return square % 2 === 0;
    });
    return evens;
})

*/

//ES2015 Arrow Function Shorthand

const squareAndFindEvens = (numbers) => {
  let squares = numbers.map((num) => num ** 2);
  let evens = squares.filter((square) => square % 2 === 0);
  return evens;
};
