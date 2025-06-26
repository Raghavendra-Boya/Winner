//let pattern = /methods/;
//let pattern = new RegExp(methods)


//1. (.)--->Dot
let pattern = /a.b/;
console.log(pattern.test("acb"));
console.log(pattern.test("abc"));
//2. ^ (Caret)--->Matches the start of the String

let pattern1 = /^Hello/;
console.log(pattern1.test("Hello World"));
console.log(pattern1.test("World Hello"));
console.log(pattern1.test("hello WOrld"));

//$ --->matches the End of the String

let pattern2 = /World$/;
console.log(pattern2.test("Hello World"));
console.log(pattern2.test("World Hello"));
console.log(pattern2.test("hello WOrld"));

//* (0 or more Occurences)

let Asterisk = /go*gle/;
console.log(Asterisk.test("ggle"));
console.log(Asterisk.test("gogle"));
console.log(Asterisk.test("google"));
console.log(Asterisk.test("gooogle"));
console.log(Asterisk.test("goooogle"));
console.log(Asterisk.test("World"));
console.log(Asterisk.test("ooooooggle"));


//5. + (Plus)---->1 or more occurences

let plus = /go+gle/;
console.log(plus.test("ggle"));
console.log(plus.test("ggole"));
console.log(plus.test("google"));
console.log(plus.test("gooogle"));
console.log(plus.test("goooogle"));
console.log(plus.test("World"));
console.log(plus.test("ggleooo"));

//?  ---> 0 or 1 time

let Quation = /colo?ur/

console.log(Quation.test("colur"));
console.log(Quation.test("colour"));
console.log(Quation.test("colouur"));
console.log(Quation.test("coloor"));


//7. \d----[0-9]---->Digit(0-9)

let digit = /\d/;
console.log(digit.test("Year2025"));
console.log(digit.test("1234567890"));
console.log(digit.test("Year"));
console.log(digit.test("Hello"));

//8. \w ---Word Characters(A-Z,a-z,0-9,_)

let word = /\w/;

console.log(word.test("test 123"));
console.log(word.test("test"));
console.log(word.test("123"));
console.log(word.test("-------"));
console.log(word.test("@@@@"));

//9. \s-->Whitespace

let space = /\s/;
console.log(space.test("@@ @@"));
console.log(space.test("Hello World"));
console.log(space.test(" HelloWorld"));

//10.[abc] --->character set

let set = /[aeiou]/;
console.log(set.test("dOg"));
console.log(set.test("sky"));

//11.[^abc] Negated Set 
let negatedSet = /[^aeiou]/;
console.log(negatedSet.test("aea"));
console.log(negatedSet.test("sky"));

//12. {n}--->Exact number of times

let number = /^\d{3}$/;
console.log(number.test("12345678990"));

//13. {min,max}--->Range of times

let number1 = /^\d{2,}$/;
console.log(number1.test("12345678990"));
console.log(number1.test("12"));
console.log(number1.test("123"));
console.log(number1.test("1234"));
console.log(number1.test("12345"));
console.log(number1.test("1"));

//14. | (OR)

let or = /cat|dog/

//15. (abc)---->Groupimg

let grp = /(ha)/;
console.log(grp.test("ah"));
console.log(grp.test("hia"));
console.log(grp.test("haha"));
console.log(grp.test("hahahia"));

//16. flags: g,i,m

let text = "Hello Hello";

let pattern3 = /hello/i;
console.log(pattern3.test(text));

let pattern4 = /l/g;
console.log(text.match(pattern4));


//Abc123.abc@gmail.com

let emailPattern = /^[a-zA-Z0-9.%+-]+@[a-z0-9.]+\.[a-z]{2,}$/;
let email = "test.user@gamil.com";

console.log(emailPattern.test(email));

let email2 = "user@.com";
console.log(emailPattern.test(email2));

let password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\)
