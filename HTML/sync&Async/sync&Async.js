console.log(1);
setTimeout(()=>{
    console.log(2);
},2000)
console.log(3);
console.log(4);

// setTimeout(function,delay)

//Where:
    //1. Showing splash screen
    //2. Auto redirecting Users

//SetIntervel:   Executes the function repetedly at a specific time intervel

//Why:

//to reapeated tasjs, like caruosel, date every second(time), page auto frefress

//Syntax: setInterval(function,interval)

setInterval(()=>{
    console.log("i am printing every 2 sec");
},2000)

//callbacks

//why:

function task(callback){
    console.log("doing task.....");
    callback()
}
task(task1)

function task1(){
    console.log("Task Completed");
}


//callback hell

//Asituation where many nested callbacks make code hard to debug,read and maintance

//why:
    //1. Hard to debug
    //2. Difficult to manage
    //3. porr readability

function loginUser(userName,callback){
    setTimeout(()=>{
        console.log(`User ${userName} logged in Successfully`);
        callback();
    },1000)
}

function registerUser(callback){
    setTimeout(()=>{
        console.log(`User Registerd Successfully`);
        callback();
    },1000)
}

function userOrders(callback){
    setTimeout(()=>{
        console.log(`User Order Successfully`);
        callback();
    },1000)
}

//callback hell

loginUser("Amar",()=>{
    registerUser(()=>{
        userOrders(()=>{
            console.log("All Callback functions are executed");
        })
    })
})


//Promises

//Syntax:
    //const promises = new Promise(function)

    // let success = true;

    // if(success){
    //     console.log("task Completed");
    // }
    // else{
    //     console.log("task failed");
    // }

    const promises = new Promise((a,b)=>{
        let success = false;
        if(success){
            a("task Completed..........");
        }
        else{
            b("task failed");
        }
    })
    promises
    .then((result)=>{
        console.log(result);
    })
    .catch((error)=>{
        console.log(error);
    })