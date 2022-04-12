// Dom manipulation

// dom ~> querySelector/All , getElementById, getElmentsByClassName, getElementsByTagName


// let h1s = document.querySelectorAll('h1') 

// document.getElementsByTagName('h1')[0].style.color = "red"


// h1s.style.color = "red"
// h1s.forEach((itemsh1)=>{
//     itemsh1.style.color = "white"
//     itemsh1.style.backgroundColor = "green"; //studlyCase CamelCase
//     itemsh1.style.border = "2px solid black"
// })







// let inputs = document.querySelector("input[type='checkbox']:nth-of-type(3)");


// inputs.setAttribute('checked', true)
// inputs.setAttribute('disabled', true)



// let getInputsAttrs = document.querySelectorAll('input');


// getInputsAttrs.forEach((attrs)=>{
//     let getAttrs = attrs.getAttribute('type');
//     console.log(getAttrs)
// })




let somethingDiv = document.querySelector('.something');

somethingDiv.innerHTML = "<p>this is something new about paragraph form js</p> <br>";

somethingDiv.innerText += "hello from js"