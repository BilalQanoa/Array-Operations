var numbers = [1, 5, 10, 15, 20, 25, 30];

var filteredNumbers = numbers.filter(function (num) {
    return num > 15;
});

console.log(filteredNumbers);