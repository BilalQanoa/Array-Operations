var numbers = [1, 2, 2, 3, 4, 4, 5];

var uniqueNumbers = [...new Set(numbers)];

console.log(uniqueNumbers);


var result = [];

for (var i = 0; i < numbers.length; i++) {
    if (!result.includes(numbers[i])) {
        result.push(numbers[i]);
    }
}
console.log(result);


console.log("--------------");

var arr = [1, 2, 3, 4, 5];
var n = 2;

var rotated = arr.slice(-n).concat(arr.slice(0, arr.length - n));

console.log(rotated);