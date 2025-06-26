//class

// class Products{
//     constructor(name,price,quantity){
//         this.name = name;
//         this.price = price;
//         this.quantity = quantity;
//     }

//     getInfo(){
//         return (`${this.name} costs $ ${this.price} and Quantiity ${this.quantity}`)
//     }
// }

// let pen = new Products("ball pen",10);
// console.log(pen.getInfo());;

//abstraction

class Atm{

    withdraw(){
        this.#aut();
        this.#processTransaction(2000)
        console.log(`Transaction Successful`);
    }

    #aut(){
        console.log("Authenticating.....");
        return false;
    }

    #processTransaction(ammount){
        console.log(`processing Rs: ${ammount}`);
    }

}

let result = new Atm();


result.withdraw()


class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    introduce(){
        console.log(`Hi, I am ${this.name} and i am ${this.age} years old`);
    }
}

class Student extends Person{
    constructor(name,age,ID){
        super(name,age);
        this.ID = ID;
    }
    study(){
        console.log(`Hi, I am ${this.name} and i am ${this.age} years old and my LMS ID is ${this.ID}`);
    }
}

const obj = new Student("Ravi",15,1234);
obj.introduce();
obj.study();