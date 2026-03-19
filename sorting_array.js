var scores = [50, 20, 70, 10, 40];
// Ascending order
scores.sort(
    function(a,b){
        return a - b;
    }
);
console.log(scores);

for (var i = 0; i <= scores.length-1; i++){
    for (var j = i + 1 ; j < scores.length; j++){
        if (scores[i] > scores[j]){
            var num = scores[i];
            scores[i] = scores[j];
            scores[j] = num;
        }
    }
}
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
