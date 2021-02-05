//Zadanie 1

//1

console.log(document.querySelector('#buz').parentElement);
//2

console.log(document.querySelector('#baz').previousElementSibling);
//3

console.log(document.querySelector('#foo').children);
//4

console.log(document.querySelector('#foo').parentElement);
//5

console.log(document.querySelector('#foo').firstElementChild);
//6

console.log(document.querySelector('#foo').children[1]);

//Zadanie 2

 let downloadTxt = function(elementId) {
        let el = document.querySelector(`#${elementId}`);
        el.addEventListener('click', function(event) {
            console.log(event.target.textContent.trim());
        });
    }
    downloadTxt('ex2');
    
    
//Zadanie 3

document.querySelector('#ex3').querySelectorAll('button').forEach((element) => {
        element.addEventListener('click', (event) => {
            event.target.nextElementSibling.style.display = event.target.nextElementSibling.style.display == 'none' ? 'block' : 'none';
        });
    });

//Zadanie 4

document.querySelector('#ex3').querySelectorAll('button').forEach((element) => {
        element.addEventListener('click', (event) => {
            var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
            event.target.parentElement.style.backgroundColor = randomColor;
        });
    });
    
//Zadanie 5

document.querySelectorAll('div#ex5 div').forEach((el) => {
    const task = 1;
    let selector;
    switch (task) {
        case 1:
            selector = 'li:first-of-type'; break;
        case 2:
            selector = 'li:last-of-type'; break;
        case 3:
            selector = 'li:nth-child(even)'; break;
        case 4:
            selector = 'li'; break;
        case 5:
            selector = '';
    }
    const items = el.parentElement.querySelectorAll(`ul ${selector}`);
    el.addEventListener('mouseover', () => {
        items.forEach((item) => {
            item.style.backgroundColor = el.style.backgroundColor;
        });
    });
});

//Zadanie 6

// .1.
    let a  = document.querySelector('#ex6').firstElementChild.firstElementChild.firstElementChild;
// .2.
    let b = document.querySelector('#ex6').firstElementChild.parentElement.firstElementChild.firstElementChild.nextElementSibling.parentElement;
// .3.
    let c = document.querySelector('#ex6').parentElement.firstElementChild.parentElement.children[1].firstElementChild.firstElementChild.firstElementChild;
