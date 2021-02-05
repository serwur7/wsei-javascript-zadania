// Zadanie 1


function getTagNames(els) {
    const elsArr = Array.from(els);
    return elsArr.map((el) => el.tagName);
}

console.log(getTagNames(document.getElementsByClassName('more-divs')));


//Zadanie 2

function getCode(el) {
    // 2.1
    console.log(el.outerHTML)
    // 2.2
    console.log(el.innerHTML);
    // 2.3
    console.log(el.className);
    // 2.4
    console.log(el.classList);
    // 2.4
    console.log(el.dataset);
}


getCode(document.getElementsByClassName('short-list')[0]);

//Zadanie 3

function calcAttributes(el) {
    let numbers = Object.values(el.dataset).filter(v => Number(v));
    numbers = numbers.map(v => Number(v));
    console.log(numbers);
    return {
        add: numbers.reduce((a, b) => a + b),
      substract: numbers.reduce((a, b) => a - b)
    };
}

console.log(calcAttributes(document.getElementById('datasetCheck')));

//Zadanie 4

document.getElementById('spanText').innerText = 'dowolny';

// Zadanie 5

document.getElementById('spanText').className = 'dowolna';

// Zadanie 6

  function allClasses(classList){
    var list = [...classList];

        list.forEach((b) => console.log(b));
        console.log(list.join('+'));
  }
  var classes = document.querySelector('#classes');
    allClasses(classes.classList);
    classes.classList = '';
    console.log('Usunięto wszystkie klasy.');
    
//Zadanie 7

  var allLi = document.querySelector('#longList').querySelectorAll('li');
  allLi.forEach((c) => {
    if(c.dataset.text == null) c.setAttribute("data-text", "text");
  });
  
//Zadanie 8

function saveStringToObj(string) {
  const obj = {
    newClass: string
  }
  return obj;
}

function addNewClassToDiv(obj) {
  const newClass = obj.newClass;
  document.getElementById('myDiv').classList.add(newClass);
}

addNewClassToDiv(saveStringToObj('string_z_parametru'));


//Zadanie 9

function addEvenOddClass(number) {
  const newClass = number % 2 === 0 
    ? 'even'
    : 'odd';
  console.log(number, newClass);
  document.getElementById('numbers').classList.add(newClass);
}

addEvenOddClass(Math.floor(Math.random() * 11));

//Zadanie 10

function getValues(el) {
  return [...el.children].map(v => v.innerText);
}

console.log(getValues(document.getElementById('longList')));


//Zadanie 11

function switchThem(child) {
        let childs = [...child];
        childs.forEach((element) => {
            var newNmb = Math.round(Math.random() * 10);
            element.dataset.oldValue = element.innerHTML;
            element.innerHTML = newNmb;
        });
    }

    let child = document.querySelector('#longList').children;
    switchThem(child)
});

