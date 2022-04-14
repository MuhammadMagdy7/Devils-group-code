// OOP


// OOP ~> methods, attributes 


// Javascript Es5 ~> classes ~> functions, objects


// let someObj = {
//     getName : ()=>{
//         return 'hello mr mohamed'
//     }
// }

// console.log(someObj.getName())

// let emp1 = {
//     fname : "mohamed sayed ahmed",
//     lname : " haikel",
//     gender: "male"
// }



// let emp2 = {
//     fname : "sayed ahmed mohamed",
//     lname : " haikel",
//     gender: "male"
// }

// let emp3 = {
//     fname : "sayed ahmed mohamed",
//     lname : " haikel",
//     gender: "male"
// }

// let emp3 = {
//     fname : "sayed ahmed mohamed",
//     lname : " haikel",
//     gender: "male"
// }


// let emp3 = {
//     fname : "sayed ahmed mohamed",
//     lname : " haikel",
//     gender: "male"
// }


// let emp3 = {
//     fname : "sayed ahmed mohamed",
//     lname : " haikel",
//     gender: "male"
// }

// const username = "moahmed";

// username = 'mosayed';

// var username = 'sayed'

// username = 'mohamed'


// function Employee(fname, lname, gender){
//     this.fname =  fname;
//     this.lname =  lname;
//     this.gender = gender;
// }


// Employee.prototype.getFullName = function(){
//     return `firstname is: ${this.fname} & lastname is: ${this.lname}`
// }

// const emp1 = new Employee('sayed', 'ahmed', 'male'); // instance new object
// console.log(emp1.getFullName())



// console.log(emp1)
// console.log(emp2)



// Built in constructors

// String
// let stringname = "mohamed";
// console.log(stringname)
// let stringObject = new String('mohamed sayed')
// console.log(stringObject)


// //Numbers

// let numbers = 10;
// console.log(numbers)
// let numberObject = new Number(20)
// console.log(numberObject)
// //Boolean
// let bools = true;
// console.log(bools)
// let boolObject = new Boolean(false)
// console.log(boolObject)

// //Function

// let funName = (a, b)=>{
//     return a * b
// }
// console.log(funName(10, 20));


// let funcObject = new Function('a', 'b', 'return a * b')

// console.log(funcObject(10, 20))


// //Object

// let objects = {
//     name : "mohamed",
//     gender: "male"
// }
// console.log(objects)


// let objectContructor = new Object({gender: "male", height: 197})
// console.log(objectContructor['height'])

// //Array

// let arrs = ['mohamed', 'sayed', 10, 30, true]
// console.log(arrs[0])

// let arrsObjectConstructor = new Array('sayed', 'karem', 'abdo', 40)
// console.log(arrsObjectConstructor[3])



// Prototypal Inheritance

// function Car(modelname, modelwheels, modelcolor, modeldate){
//     this.modelname = modelname;
//     this.modelwheels = modelwheels;
//     this.modelcolor = modelcolor;
//     this.modeldate = modeldate;
// }


// Car.prototype.getCarName = function(){
//     return `Car Name is: ${this.modelname}`
// }

// const bmw = new Car('bmw x3', 4, 'purple', 2022);

// console.log(bmw)
// function Toktok(modelname, modelwheels, doors, caset){
//     Car.call(this, modelname, modelwheels);
//     this.doors = doors;
//     this.caset = caset;
// }


// Toktok.prototype = Object.create(Car.prototype)
// const motoregl = new Toktok('mercedis', 3, 1, 2);

// console.log(motoregl)
// console.log(motoregl.getCarName())




// const somethingProtoType = {
//     getFunction : function(){
//         return `this is something goes here`
//     }
// }

// let some1 = Object.create(somethingProtoType)

// some1.fname = "hamada"
// console.log(some1.getFunction())

// console.log(some1.fname)




// classes es6

class Employee{
    constructor(fname, lname, gender){
        this.fname = fname;
        this.lname = lname;
        this.gender = gender;
    }

    getFull(){
        return `the Employee Name is: ${this.fname + " " + this.lname} And the Emplyee gender is: ${this.gender}`
    }
}


const emp1 = new Employee('mohamed', 'sayed', 'male');
console.log(emp1.getFull())



class Boss extends Employee{

    
    constructor(fname, lname, gender, permissions){
        super(fname, lname, gender);
        this.permissions = permissions;
    }

    static somestring(){
        return `welcome to the website devils page`
    }
    
}


const boss1 = new Boss('omar', 'ahmed', 'male', 'team leader')

console.log(Boss.somestring())


