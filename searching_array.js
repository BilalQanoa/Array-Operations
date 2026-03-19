var numbers = [25, 5, 10, 15, 5 , 1 , 20, 25];

var index = -1;
for (var i = 0; i < numbers.length; i++){
    if (numbers[i] == 25){
        index = i;
        break;
    }
}

if (index != -1){
    console.log("Found at position: "+index);
} else {
    console.log("Not Found");
    
}