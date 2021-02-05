//Zadanie 1

const list = document.querySelectorAll('.list');

//Zadanie 2

let showTags = function(tagName) {
            return document.querySelectorAll(tagName);
    }
let show = showTags('ul');

//Zadanie 3

let idList = document.querySelector('#list');

//Zadanie 4

let consoleLog = (whole) => console.log(whole);

    let li = document.querySelectorAll('li');
    let ul = document.querySelectorAll('ul');
    let spans = document.querySelectorAll('span');
    let spansList = document.querySelectorAll('div.list > span');
    let spansSpan = document.querySelectorAll('div#spans > span');
    consoleLog(li);
    consoleLog(ul);
    consoleLog(spans);
    consoleLog(spansList);
    consoleLog(spansSpan);
 });
