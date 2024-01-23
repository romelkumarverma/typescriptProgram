///     Write a program of even and odd between 1 to 50 using typescript

var odd : number[]=[]
var even: number[]=[]

for(let i:number=1; i<=50; i++){
    if(i%2===0){
        even.push(i)
    } else {
        odd.push(i)
    }
}
console.log("Even number:", even);
console.log("Odd number:", odd);