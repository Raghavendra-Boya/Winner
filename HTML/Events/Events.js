//Events:

// 

//Why Events are important?
//1. make webpages interactive
//2. allows user to interact with webpages
//3. improves the User Experience
//4. prevents the unexpected behacviour

//Event Handling JS

//There are 3 ways to handle the events in JS

//1. Inline Events Handling


//Why Not Recomended?

//1. Mixed HTML with JS
//2. Herd to Debug
//3. Cannot handle the multiple events




//2. Event Linsemer Handling
let btn = document.getElementById("btn");

// btn.addEventListener("click",()=>{
//     console.log("Clicked once");
// })

// btn.addEventListener("click",()=>{
//     console.log("Clicked Second Time");
// })

//Why?
//1. Supports multiple Events
//2. Kepps HTML and JS Separate
//3. Easy to Debug


//Types of Evnts in JS
//1. Mouse Events: CLick, dbclick,mouseover,mouseout,mousemove,mousedown,mouseup
//2. KeyBoard Events: KeyPress,KeyDown,KwyUp
//3. Form Events:submit,reset,change,focus,blur
//4. Window Events: resize,load,unload,scroll,






//3. Evennt Properties

//Assigning a function to the DOM Element
// let btn = document.getElementById("btn");
// btn.onclick = ()=>{
//     console.log("i am from Event Properties-1")
// }
// btn.onclick = ()=>{
//     console.log("i am from Event Properties-2");
// }

//Why not Recomended?
//1. Overwrites the previous event
//2. only one function can be Assigned to a property


//Event Bubbling/Event Capturing


//Event Bubling

// document.getElementById("btn1").addEventListener("click",(event)=>{
//     ;
//     console.log("Parent");
// },true)
// document.getElementById("btn2").addEventListener("click",(event)=>{
//     // event.stopPropagation()
//     console.log("Child-1");
// },true)
// document.getElementById("btn3").addEventListener("click",()=>{
//     console.log("Child-2");
// },true)

document.querySelector('.parent').addEventListener("click",(e)=>{
    console.log("Parent");
})
document.querySelector('.child-1').addEventListener("click",(e)=>{
   
    console.log("Child-1");
    // e.stopPropagation();
})
document.querySelector('.child-2').addEventListener("click",(e)=>{
    console.log("Child-2");
})


document.getElementById("clkButton").addEventListener("click",()=>{
    alert("Btton Clicked")
})
document.getElementById("dbClick").addEventListener("dblclick",()=>{
    console.log("Double Clicked")
})

let hover = document.getElementById("hover");
hover.addEventListener("mouseover",()=>{
    hover.style.backgroundColor = "Red";
})
hover.addEventListener("mouseout",()=>{
    hover.style.backgroundColor = "green";
})

//Keyboard Events:

let input = document.getElementById("textInput");

input.addEventListener("keydown",()=>{
    console.log("Key is pressed Down");
})

input.addEventListener("keyup",()=>{
    console.log("Key is Release");
})

// input.addEventListener("keypress",()=>{
//     console.log("Key is being typed");
// })

//Form Events

let userName = document.getElementById("form");

userName.addEventListener("submit",()=>{
    console.log("form Submitted");
})
userName.addEventListener("reset",()=>{
    console.log("form reseted");
})
userName.addEventListener("reset",()=>{
    console.log("form reseted");
})

let inputs = form.querySelectorAll("input[type='text']","input[type='email']");

inputs.forEach((input)=>{
   
    input.addEventListener("change",()=>{
        console.log(`${input.value} changed to ${input.value}`);
    });
    input.addEventListener("focus",()=>{
        input.style.border= "2px solid Red"
    });
    input.addEventListener("blur",()=>{
        input.style.border = ""
    });
})




  window.addEventListener('load', function() {
    console.log('Page fully loaded');
  });

  window.addEventListener('resize', function() {
    console.log('Window resized to ' + window.innerWidth + 'x' + window.innerHeight);
  });

  window.addEventListener('scroll', function() {
    console.log('User is scrolling the page');
  });

  window.addEventListener('beforeunload', function (e) {
    e.preventDefault();
    e.returnValue = '';
  });

  








