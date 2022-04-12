// Data Types ~> js

// variables

// var something = 10;

// something = 20;


// let something = 30;

// console.log(something)

// Numbers 

// var num = 10.5;

// console.log(typeof(num))


//strings 

// var name1 = "this is \"mohamed\" "
// var name2 = "this is 'mohamed' "
// var name3 = 'this is "mohamed" '


// var number = '10'
// console.log(name1 + name2 + name3)

//Booleans



// let zeko = false;
// console.log(typeof(zeko))
// console.log(typeof(number))



//null, undefined

// var something = null;
// var something = undefined;



// console.log(something)





// Arithmetic operator

// + , - , * , / , % , ** 

// var num1 = 10;
// var num2 = 6;



// console.log(num1 ** num2)




// // String ~> length


// var title = 'this is something from me';

// console.log(title[1]); //index



// console.log("hello".length % 'hi\\'.length)



// Concatenation

// var fname = "mohamed ahmed";
// var lname = ' sayed';
// var fullname = fname + lname;
// console.log(fullname)

// var names = 'mohamed ahmed';
// names += ' sayed kamal';

// console.log(names)


// let fname = prompt("Enter your fname: ")
// let lname = prompt("Enter your lname: ")

// console.log(fname + " " + lname)


// let age = Number(prompt("Enter your age: "))

// console.log(age);



// Control Structure ~> Conditions

// Comparison operator ~> == , != , ===, !== , > , <,  >=, <=, <>



// console.log(true >= false)

// let num1 = Number(prompt("Enter your number: "))
// if(num1 == 10){
//     console.log("ok!")
// }


// var username = prompt("Enter your username: ");
// var password = prompt("Enter your password: ");

// if(username == 'mohamed' && password == 'pass123'){
//     console.log('welcome ya mohamed')
// }else{
//     console.log('etl3 barra')
// }

// var num1 = 10;
// var num2 = 20;

// Binary ~> 10 


//           32      16    8    4    2    1
//                    1    1    1    1    0
//                    0    1    0    1    0 
//                    1    0    1    0    0             


//0    1    0    1    0
//1    0    1    0    0 
//---------------------
//

// console.log(num1 ^ num2);


// switch cases




// var num1 = Number(prompt("Enter your num1: "))
// var ops = prompt("Enter your operator: ")
// var num2 = Number(prompt("Enter your num2: "))


// switch(ops){
//     case "+":
//         console.log(num1 + num2)
//         break;
//     case '-':
//         console.log(num1 - num2)
//         break;
//     case '*':
//         console.log(num1 * num2)
//         break;
//     default:
//         console.log('sorry not defined operator!')
// }



// ternary condition

// var num1 = 11;

// num1 == 10 ? console.log('welcome') : console.log('not welcome')



//loops ~> while , for loops

// forloops

// for(x = 1; x <= 100; x++){

//     console.log('hello' + x)
// }


//  x= 1;
// while(x <= 100){
//     console.log('hello')
//     x++
// }



 
// arrays ~> work with indexes

// let arrs = [10, 230, 40, 60, 100];
// console.log(arrs[2])


// console.log(arrs.length)
// for(x = 0; x < arrs.length; x++){
//     console.log(arrs[x])
// }

// for(x = 1; x <= 20; x++){
//     console.log(x)
// }


// var name1 = prompt("Enter your name: ")

// switch(name1){
//     case 'mohamed':
//         console.log('welcome ya mhamaaa')
//         break;
//     case 'ahmed':
//         console.log('welcome ya ahmaaa')
//         break;
//     default:
//         console.log('emshy yaaaa')

//     }



// functions ~> default function, function with parameters(args) , arrow function

// function something(){

//     console.log('welcome ya something')
// }
// something()

// function paramsFunction(num1, num2){
//     console.log(num1 + num2)
// }

// paramsFunction(10, 20)

// Arrow function

// let funArrow = (num1, num2) =>{
//     console.log(num1 + num2)
// }
// funArrow(20, 20)

// const ~> immutable 

// var numz = 10;

// numz = 20;

// console.log(numz)

// const functionArrow = (num1, num2)=>{
//     summation = num1 + num2;
//     return summation;
// }

// let zeko = functionArrow(10, 20);

// console.log(zeko)


// global, local scope

// var number = 10; //global variable

// let arrFunction = ()=>{
     
//     window.number = 20; //local
// }
// // console.log(number)
// arrFunction()
// console.log(number)

let logo = document.querySelector('.imgs');

setInterval(()=>{
    logo.width -= 5
},100)