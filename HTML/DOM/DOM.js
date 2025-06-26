//DOM: DOcument Object Model
//Don enables the JS to easily access the Elements and helps us to manipulate easily

//why:

//Dom is used to dynamically  update the content of the web 
//DOm is used to add , remove the elements from the web pageb page by using 
// //Enables the interacction b/w user and web page by using addevent listerners 


//DOM Selectors:

//1. getElementByID()
//USe: selects the only single element
//syntax: document.getElementById("id name")

let title = document.getElementById("title");
title.style.color = "blue";

//2. getElementByClassName()

//3. getElementByTagName()

//4. QuerySelector
//Use Case: selects the first element that matches the CSS Selector
//SYntax: document.querySelector("selector")


// let item = document.querySelector(".item1");
// item.style.color="red";

//5. QuerySelectorAll

let item = document.querySelectorAll(".item1");
for(let i =0;i<item.length;i++){
    item[i].style.color="red";
}

//DOM Manipulations

//Crete element in HTML

let newDiv = document.createElement("div");
newDiv.textContent = "Hello i am NewDIv from JS";
document.body.appendChild(newDiv)

//remove ELement
let removeItem = document.getElementById("id1");
removeItem.remove();

//Replace an Element

// let olderElement = document.getElementById("para");
// olderElement.replaceChildren(newDiv,olderElement)

//Attribute manipulations

//getAtribute();
//SetAttribute();
//hasAtrritube();



//CLass Atrribute manipulation

//add
//remove
//toggle

let box = document.querySelector(".box");
box.classList.add("active");
box.classList.remove("inactive");
box.classList.toggle("toggleClass")
