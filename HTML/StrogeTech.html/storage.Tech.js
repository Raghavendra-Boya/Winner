localStorage.setItem("state","AP");
localStorage.setItem("state1","TG");
localStorage.setItem("state2","TN");
console.log(localStorage.getItem("state"));

let numbers = [1,2,3]
localStorage.setItem("array",JSON.stringify(numbers))

let result = localStorage.getItem("array");
console.log(result);
console.log(typeof result);
console.log(JSON.parse(result));
console.log(typeof JSON.parse(result));
// console.log(JSON.parse(result[2]));

// localStorage.getItem()

sessionStorage.setItem("country","India");

sessionStorage.setItem("id1",6)


let products = {
    "product1":"Mobile",
    "product2":"laptop"
}

localStorage.setItem("details",JSON.stringify(products))
let productDetails = JSON.parse(localStorage.getItem('details'));
console.log(productDetails.product2);

let a =0;
if(a == false){
    console.log("true");
}
else{
    console.log("false");
}


const box = document.querySelector(".box");
box.classList.add("active");
box.classList.remove("inactive");
box.classList.toggle("highlight");