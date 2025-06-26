//Array:-  array is a collection of sigle or multiple data types
//Everythng is trated as Objevt
//object is a collection of Key and Values pairs

//1. length----->proprty
// it will checks length of the arry

let cart = [];

console.log(cart.length);

if(cart.length>0){
    console.log("cart is not empty");
}
else{
    console.log("cart is empty");
}

//2. Push:--->adds one more element to the array at the end

cart.push("iPhone13","HP Laptop","VIVO")
console.log(cart);

//3. pop()---reoves and retun the last element form an array

console.log(cart.pop());
console.log(cart);
//4. Shift-->remove and retun the first value from an array

console.log(cart.shift());
console.log(cart);

//5. unshift--->adds elements to the start of the array

console.log(cart.unshift("Dell Laptop"));
console.log(cart);

//6. IndexOf and Last Index

// IndexOf--->returns the index position of the first occurence value
//lastIndexOf()---->returns the position of last  ocuurece value


let cart1 = ["laptop","phones","mouse","laptop","keyboard","coolers"]

console.log(cart1.indexOf("laptop"));
console.log(cart1.lastIndexOf("laptop"));

//7. includes()---> return the true/false if an element exists

console.log(cart1.includes("mousee"));

//8 join()--->combines the array elements into a string

let convertedValue = cart1.join(",");
console.log(convertedValue);
console.log(typeof convertedValue);
// convertedValue = "laptop,phones,mouse,laptop,keyboard,coolers"

//9. concat()

let array1 = [4,1,3];
let array2 = [6,2,5];


console.log(array1.concat(array2));

//Sort()--->sorts an array()

console.log(array1.concat(array2).sort());

//reverse--->revrse the array 
console.log(array1.concat(array2).sort().reverse());


//FindIndex()----

let numbers = [10,20,30,40,50,60,70,80];

console.log(cart1.findIndex());