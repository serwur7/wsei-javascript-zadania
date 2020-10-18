//Zadanie 1

let counter=1;

let greetingCounter = setInterval(()=>{
    if(counter==15){
        clearInterval(greetingCounter);
    }    
console.log('Cześć po raz '+ counter);
counter++;
},2000);


//Zadanie 2


let array = [1,2,3];

setTimeout(() => {
    for(let i=0;i<array.length;i++){
        console.log(array[i]);
    }
}, 2000);


setTimeout(() => {

console.log('-------------------');

let i=0;

let arrayIterator = setInterval(()=>{
    if(i>=array.length-1){
        clearInterval(arrayIterator);
    }
    console.log(array[i]);
    i++;
},3000)


}, 3000);
