//Zadanie 1

let root = document.querySelector('#root');

let newDiv = document.createElement('div');
newDiv.textContent = "To jest nowy element";
root.appendChild(newDiv);

//Zadanie 2

let newUl = document.createElement('ul');

function favFood(){



let favFoodArr = ['jabłko','winogrona', 'mandarynki', 'pomarańcze', 'maliny','brzoskwinia'];
root.appendChild(newUl);
favFoodArr.forEach(el=>{
    let newLi = document.createElement('li');
    newLi.textContent=el;
    newUl.appendChild(newLi);
})

}

//Zadanie 3

newUl.addEventListener('click', ()=>{
    for(let i=newUl.children.length;i>=0;i--){
        if(i%2!=0){
            newUl.removeChild(newUl.children[i])
        }
    }
})


//Zadanie 4

let newBtn = document.createElement('button');
newBtn.textContent='Klik';
newBtn.addEventListener('click', ()=>{
    root.removeChild(newBtn)
})
root.appendChild(newBtn);

//Zadanie 5

const rand = Math.floor(Math.random() * 20);
for (let i = 0; i < rand; i++) {
    const randDiv = document.createElement('div');
    randDiv.innerText = `to jest div numer ${i}`;
    document.body.appendChild(randDiv);
}

//Zadanie 6

let obj={
    div1: 'to jest div',
    span1: 'to jest span',
    div2: {
        div3: 'to jest div',
    },
    span2: 'to jest span',
}

for(let i in obj){
    
    let newEl = document.createElement(i.slice(0,-1));
    if(typeof obj[i] == 'string'){
        newEl.textContent=obj[i];
    }else{
        for(let j in obj[i]){
        let newNestedEl = document.createElement(j.slice(0,-1));
        newNestedEl.textContent=obj[i][j];
        newEl.appendChild(newNestedEl);
    }
    }
    
    root.appendChild(newEl);

}

//Zadanie 7


let list1 = ['niebo', 'słońce', 'samochody', 'tańce', 'makarony', 'praca'];



let newUl1 = document.createElement('ul');
root.appendChild(newUl1);

list1.forEach(el=>{
    let newLi = document.createElement('li');
    newLi.textContent=el;
    newUl1.appendChild(newLi);
})
    
let list1Btn= document.createElement('button');

list1Btn.textContent = 'przenieś';
root.appendChild(list1Btn);
    
list1Btn.addEventListener('click', ()=>{
    newUl2.insertBefore(newUl1.lastChild, newUl2.lastChild);

    if(newUl1.children.length==0){
        list1Btn.disabled=true;
    }
    if(newUl2.children.length>0){
        list2Btn.disabled=false;
    }
})


let newUl2 = document.createElement('ul');
root.appendChild(newUl2);
    
let list2Btn= document.createElement('button');
list2Btn.textContent = 'przenieś';
root.appendChild(list2Btn);
list2Btn.disabled=true;

    list2Btn.addEventListener('click', ()=>{

        newUl1.insertBefore(newUl2.lastChild, newUl1.lastChild);

        if(newUl2.children.length==0){
            list2Btn.disabled=true;
        }
        if(newUl1.children.length>0){
            list1Btn.disabled=false;
        }
        
    })
    
    
//Zadanie 8

let br1 = document.createElement('br');
root.appendChild(br1);
let br2 = document.createElement('br');
root.appendChild(br2);


let formP = document.createElement('p');
formP.textContent='Stwórz element';
root.appendChild(formP);


let formInput1 = document.createElement('input');
formInput1.placeholder = 'element';
root.appendChild(formInput1);


let br3 = document.createElement('br');
root.appendChild(br3);


let formInput2 = document.createElement('input');
formInput2.placeholder = 'tekst';
root.appendChild(formInput2);


let br4 = document.createElement('br');
root.appendChild(br4);



let formInput3 = document.createElement('input');
formInput3.placeholder = 'kolor';
root.appendChild(formInput3);



let br5 = document.createElement('br');
root.appendChild(br5);



let formInput4 = document.createElement('input');
formInput4.placeholder = 'ile razy';
formInput4.type='number';
root.appendChild(formInput4);



let br6 = document.createElement('br');
root.appendChild(br6);



let formBtn = document.createElement('button');
formBtn.textContent='Utwórz';
root.appendChild(formBtn);



function createElements(){
   
    for(let i=0;i<formInput4.value;i++){

   let newElement = document.createElement(formInput1.value);
   newElement.textContent = formInput2.value;
   newElement.style.color = formInput3.value;

   root.appendChild(newElement);
}
}

formBtn.addEventListener('click', createElements);


//Zadanie 9

let tableHeadersArr = ['Imię',' Naziwsko','Wiek', 'Ilośc dzieci'];


let table3 = document.createElement('h3');
table3.textContent='Stwórz tablicę';
table3.style.margin='20px';
root.appendChild(table3);


let inputRowWrapper = document.createElement('div');
inputRowWrapper.className='inputRowWrapper';
let inputRow = document.createElement('div');
inputRow.className='inputRow';

for(let i=0;i<4;i++){
    
    let tableInput = document.createElement('input');
    tableInput.placeholder= tableHeadersArr[i];
    tableInput.className='tableInput';
    inputRow.appendChild(tableInput);

}

inputRowWrapper.appendChild(inputRow);
root.appendChild(inputRowWrapper);


let moreBtn = document.createElement('button');
moreBtn.textContent='Więcej';
root.appendChild(moreBtn);


let tableBtn = document.createElement('button');
tableBtn.textContent='Utwórz';
root.appendChild(tableBtn);


function createTable(){

    let table = document.createElement('table');
    let trh = document.createElement('tr');
    let deleteBtn = document.createElement('button');
   
    table.appendChild(trh);

    

    for(let i=0;i<4;i++){
        let th = document.createElement('td');
        th.textContent=tableHeadersArr[i];
        trh.appendChild(th);
    }


    let numberOfRows = inputRowWrapper.children.length;

    let valuesFromInputs = [...document.querySelectorAll('.tableInput')];


    for(let i=0;i<numberOfRows;i++){
        let newRow = document.createElement('tr');
        

        for(let j=0;j<4;j++){
        let td = document.createElement('td');
        td.textContent = valuesFromInputs[0].value;
        valuesFromInputs.shift();
        newRow.appendChild(td);
        }

        deleteBtn = document.createElement('button');
        deleteBtn.textContent='Usuń';
        newRow.appendChild(deleteBtn);
        table.appendChild(newRow);
        

    }
    
    

    deleteBtn.addEventListener('click', ()=>{
        deleteBtn.parentElement.remove();
    });


    root.appendChild(table)
   
}


function moreRows(){

    let inputRow = document.createElement('div');
    inputRow.className='inputRow';

    for(let i=0;i<4;i++){

        let tableInput = document.createElement('input');
        tableInput.placeholder= tableHeadersArr[i];
        tableInput.className='tableInput';
        inputRow.appendChild(tableInput);
    }

inputRowWrapper.appendChild(inputRow);

}


tableBtn.addEventListener('click', createTable);
moreBtn.addEventListener('click', moreRows);

//Zadanie 10

function capitalizeFirstLetter(){
    const inputs = document.querySelectorAll('input');

    inputs.forEach(input=>{
        input.addEventListener('keyup',()=>{
            if(typeof input.value == 'string' && input.value.length>0){
                input.value = input.value[0].toUpperCase() + input.value.slice(1)
            }
        })
    })

}

capitalizeFirstLetter()

//Zadanie 11

function findNumbers(str){
    let reg = /\d/g;
    if(reg.test(str)){
      
    let numbersArr = str.match(reg);
    let convertedNumbersArr = numbersArr.map(e=>Number(e));
    let sum = convertedNumbersArr.reduce((a,b)=>a+b);
    let mul = convertedNumbersArr.reduce((a,b)=>a*b);


    for(let i=0;i<mul;i++){
        let div = document.createElement('div');
        div.textContent = 'suma wynosi: '+sum;
        root.appendChild(div);
    }

    }
}

//Zadanie 12

let obj12={
    str:'',
    checkStr: ()=>{
        if(/Ala/.test(obj12.str)){
            obj12.str = 'Ola';
        }else{
            let div = document.createElement('div');
            div.textContent='Słowo Ala nie występuje w tekście.';
            root.appendChild(div);
        }
    }
}


function addStr(str){
    obj12.str=str;
    console.log(obj12)
}

//Zadanie 13

let arr13= ['aa2a2', 'sasa1', 'd2d10s']


function numberOfNumbers(str){
let newArr=[];
for(let i=0;i<str.length;i++){
     newArr.push((str[i].match(/\d/g)).length) 
}
console.log(newArr)
}


function sumOfNumbers(str){
    let sum=0;
    for(let i=0;i<str.length;i++){
         str[i].match(/\d+/g).forEach(nr=>{
             sum+=(Number(nr));
         })
    }
    console.log(sum);
    }


function averageOfNumbers(str){
    let sum=0;
    let amount=0;
    for(let i=0;i<str.length;i++){
         str[i].match(/\d+/g).forEach(nr=>{
             sum+=(Number(nr));
            amount++;
         })
    }
    console.log(sum/amount);
    }

//Zadanie 14

let obj14 = {
    name: '',
    surname: '',
    age: ''
}


function extendObj(name, surname, age){

    obj14.name =name;
    obj14.nameLen = obj14.name.length;
    obj14.surname =surname;
    obj14.surnameLen = obj14.surname.length;
    obj14.age =age;
    

    if(obj14.nameLen >5 || obj14.surnameLen >5){
        obj14 = {
            name: '',
            surname: '',
            age: ''
        }
    }

}







