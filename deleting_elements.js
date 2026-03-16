var fruits = ["apple", "banana", "cherry", "date"];

fruits.shift();
fruits.pop();
var index = fruits.indexOf("banana");
fruits.splice(index, 1);
console.log(fruits);
