//fetch Syntax

//fetch('URL')
//.then(response => response.json())
//.then(data => {
    //work with data
// })
//.catch(e =>{
    //handle error
//})


const products = [
    {
        id:1,
        title: "Mouse",
        price: 799,
        category: "Electronics"
    },
    {
        id:2,
        title: "Watch",
        price: 1299,
        category: "Gadgets"
    },
    {
        id:3,
        title: "Speaker",
        price: 2999,
        category: "Audio"
    }
]
// console.log(products);
// console.log(JSON.stringify(products));
// let jsonString = JSON.stringify(products)
// console.log(JSON.parse(jsonString));
// console.log(products[0].id);


const productList = document.getElementById("productList");

// let output = '';

// products.forEach(product =>{
//     output += `
//     <div class="bg-red-400 p-4 rounded-lg">
//     <h3 class="text-lg font-bold">${product.title}</h3>
//     <p class="text-gray-600">${product.id}</p>
//     <pclass="text-blue-600">${product.category}</p>
//     <p class="text-purple-600">${product.price}</p>
//     <button class="bg-blue-500 text-white font-bold px-4 py-1 rounded">Buy Now</button>
//     </div>
//     ` ;
// });

// productList.innerHTML  = output;

let url = 'https://fakestoreapi.com/products';
fetch(url)
// console.log(url);
.then(res => res.json())
.then(products =>{
    let output = '';
    products.forEach(product =>{
        output += `
           <div class="bg-red-400 p-4 rounded-lg">
           <img src="${product.image}" alt="${product.tilte}" class="h-80 w-full  mb-2">
    <h3 class="text-lg font-bold">${product.title}</h3>
    <p class="text-gray-600">${product.id}</p>
    <pclass="text-blue-600">${product.category}</p>
    <p class="text-purple-600">${product.price}</p>
    <button class="bg-blue-500 text-white font-bold px-4 py-1 rounded">Buy Now</button>
    </div>
    ` ; 
        
    })
    productList.innerHTML = output;
})

.catch(e =>{
    productList.innerHTML = "Somthing went wrong"
    console.log(e);
})

//ForEach loop

//Array.forEach(function(element,index,array){
    //block of code
//})

// let fruits = ["Apple","Mango","Orange"]

// fruits.forEach(function(fruit,index){
//     console.log(`Fruit ${index + 1}: ${fruit}`);



console.log("i am pring after the fetch");
// })