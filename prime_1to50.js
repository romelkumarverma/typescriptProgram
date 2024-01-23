///     Write a program to print number between 1 to 50 in typeScript
var n = 50;
var prime = [];
for (var i = 2; i <= n; i++) {
    var flag = true;
    for (var j = 2; j < (i / 2 + 1); j++) {
        if (i % j == 0) {
            flag = false;
            break;
        }
    }
    if (flag) {
        prime.push(i);
    }
}
console.log("Prime numbers:", prime);
