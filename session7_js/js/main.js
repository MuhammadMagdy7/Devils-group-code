//css selectors

// document.querySelector('.something');
// document.querySelector('#something');




// document.getElementById('something'); // id

// document.getElementsByClassName('zeko'); //class name `array`


// document.getElementsByTagName('h1') //select by tagname

// document.getElementsByName('fname'); //select by name

// let h1s = document.getElementsByTagName('h1');

// for(x = 0; x < h1s.length; x++){
//     h1s[x].style.cssText = 'color:green'
// }

// h1s[0].className = 'something'; //class add new classname

// let x = false;

// let par = document.querySelector('p');

// x == true ? par.classList.add('hidden') :  par.classList.remove('hidden')
// h1s[1].classList.remove('zeko')

// let h3s = document.querySelector('h3');
// h3s.innerText  = "welcome to h3";

// h3s.textContent = "anothers"

// let ulz = document.querySelector('ul');
// ulz.innerHTML = "<li>html</li><li>css</li>"


// insertBefore 

// let content  = document.querySelector(".content");
// let anothersClass = document.querySelector(".anothers")
//  let paragraph = document.createElement("p");
// // console.log(anothersClass)

// // content.appendChild(paragraph)

// content.insertBefore(paragraph, anothersClass);

// setAttribute , removeAttribute


// let paragraph = document.querySelector('p');
// paragraph.setAttribute('data', 'some')


// let h1 = document.querySelector('h1');
// console.log(h1.hasAttribute('value'))
// console.log(h1.getAttribute('value'));
// h1.removeAttribute('value')




// Nodes

// let ulz = document.querySelector('.unorderd');

// let felChild = ulz.firstElementChild

// felChild.classList.add('zeko')


// let h4 = document.createElement('h4');

// let someText = document.createTextNode('something')

// let child = document.querySelector('.child');
// let parent = document.querySelector('.parent');

// h4.appendChild(someText)


// parent.insertBefore(h4, child)


// child.classList.add('newClass')
// let textNode = document.createTextNode('sssss')

// h4.appendChild(textNode)



// let sib3 = document.querySelector('div > div > div:nth-of-type(2)');

// console.log(sib3)


// Event Listener

// function alertMe(){
//     alert('popupppps')
// }

// let btn = document.querySelector('button');
// // btn.onclick = ()=>{
// //     alert('zekooo')
// // }

// btn.addEventListener('click', (event)=>{
//     // alert('hello world ya zeko')
//     console.log(event.target.value)
// })

// let inputs = document.querySelector('input');

// // inputs.addEventListener('change', (events)=>{
// //     console.log(events.target.value)
// // })

// let h5z = document.querySelectorAll('h5');

// for(x = 0; x < h5z.length; x++){
//     h5z[x].addEventListener('mouseover', (events)=>{
//         console.log(events.target.innerText)
//     })
// }


// window.open();

// console.log(widthz)

// let checking = confirm('are you sure you want to leave this page');


// if(checking){
//     window.location.href = "https://yahoo.com";
// }else{
//     window.location.href= "/"
// }

console.log(window.location.hostname)
console.log(window.location.pathname)
console.log(window.location.protocol)
// console.log(window.location.assign('index.html'))


// window.history.back()

window.navigator.cookieEnabled