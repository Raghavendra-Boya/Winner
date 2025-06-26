//Operators

//Why

//1. Arithmetic Operator
//+,_,*,/,%,**


let overs = 20;
let ballPerOver = 6;
let totalBalls = overs*ballPerOver;
console.log(totalBalls);//120

let runRate = "10";
let totalOvers = 20;
let totalRuns = runRate*totalOvers;
console.log(totalRuns);//200


//2. Assignment Operator
//=,+=,-=,*=,/=,%=

let teamScore = 142;
let extras = 10;
teamScore += extras;
console.log(teamScore);//152

let score = 50;
// score += "30";
score /= 30;//1
console.log(score);
score %= 30;//20

console.log(score);//5030

console.log("10"+20+30);//102030
console.log(10+"20"+30);//102030
console.log(10+20+"30");//3030

//3. Comaparison Operator
//==,===,<,>,!=,<=,>=

console.log("10"==10);//true
console.log("10"===10);
console.log(false == 0);

console.log(null >= 0);

//Logical Operators
//&&,||,!

//Bitwise operation
//&,|,^,~,<<,>>

let a = 10;//1010--0
let b = 5;// 0101
console.log(a&b);
console.log(a>>1);

//typeof
//ternary
//condition? exp1 : exp2;

let runs = 220;
let HighScore = 200;
let result = runs > HighScore ? (runs>200? "AVerage":"Below Avg") : "Low Score";
console.log(result);

////8. Increament &Decrement
//++a, --a, a++ , a--

// let c = 10;
// console.log(a++);//10
// console.log(a);//11
// console.log(a--);//11
// console.log(a);//10
// console.log(--a);//9
// console.log(a);

let x = 22;
console.log(x);//22
console.log(x++);//22
console.log(x);//23
console.log(x--);//23
console.log(--x);//21
console.log(x++);//21
console.log(++x);//
console.log(x);











