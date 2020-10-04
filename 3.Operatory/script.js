//Zadanie 1:

let x = true,
    y = false;

console.log(x === y)

//Zadanie 2:

const numOne = 10;
const numTwo = 3;

let moduloResult = 0;
moduloResult = numOne % numTwo;
console.log(moduloResult); //1  

//Zadanie 3:

let stringsResult = "",
    a = "test",
    b = " foo";

stringsResult = a + b;
console.log(stringsResult);

//Zadanie 4:

var someNumber = 425;
var someString = "425";

console.log(someNumber==someString); 
//True, ponieważ wartość jest ta sama
console.log(someNumber===someString);
//False, ponieważ jest inny typ danych

//Zadanie 5:

let counter = 30;

console.log(counter); //30

counter++; 
console.log(counter); // 31

counter--;
console.log(counter); // 30

//Zadanie 6:

let x = 2,
    y = 4,
    result = null;

result = x > y;

console.log(result); // false

