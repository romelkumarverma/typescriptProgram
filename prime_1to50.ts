///     Write a program to print number between 1 to 50 in typeScript

var n:number=50
var prime:number[]=[]
for(let i:number=2; i<=n;i++){
    let flag:boolean=true
    for(let j:number=2; j<(i/2 + 1);j++){
        if(i%j==0){
            flag=false
            break;
        }
    }
    if(flag){
        prime.push(i);
    }
}
console.log("Prime numbers:",prime);