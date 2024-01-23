var odd = [];
var even = [];
for (var i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        even.push(i);
    }
    else {
        odd.push(i);
    }
}
console.log("Even number:", even);
console.log("Odd number:", odd);
