//Product Data

export default const products = [
    {
        id : 1,
        name: "laptop",
        price: 10000
    },
    {
        id : 2,
        name: "phone",
        price: 5000
    }
    
]

function getAllProducts(){
    return products;
}

//cart logic

let cart = [];

function addToCart(product){
    cart.push(product);
    console.log(`${product.name} added to cart`);
}


function veiwCart(){
    return cart;
}

//payment logic

function makePayment(cartItems){
    const total = cartItems.reduce((sum,item)=>  sum+item.price,0);

    console.log(`payment of ${total} succesful`);
}


//main app function calls

const availableProducts = getAllProducts();

import ABC from 'path';
import {addToCart,viewCart} from 'path'
import {makePayments} from path 

console.log(`available products: ${availableProducts}`);
console.log(availableProducts[0]);

addToCart(availableProducts[0]);
addToCart(availableProducts[1])

const cartItems = veiwCart();

makePayment(cartItems);

