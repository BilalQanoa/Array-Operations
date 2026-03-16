var scores = [50, 20, 70, 10, 40];
// Ascending order
scores.sort(
    function(a,b){
        return a - b;
    }
);
console.log(scores);

// Descending order
scores.sort(
    function (a, b) {
        return b - a;
    }
);
console.log(scores);

var names = ["Shatha", "Sara", "Lina", "Sami", "Dalia"];
names.sort();
console.log(names);
