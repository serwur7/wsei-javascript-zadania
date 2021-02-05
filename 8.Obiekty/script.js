//Zadanie 1

var car = {

  name: 'Audi',
  model: 'A3',
  power: '140',
  color: 'black'
  
};

console.log(car);

//Zadanie 2


car.changeName = function(chg){
    this.name = chg;
}

car.changeName('Opel');
console.log(car);


//Zadanie 3

let a= {
 sum: function(arr){
        this.sum = arr.reduce((b, c) => b += c);
    }
} 
a.sum([4,5,6,7,23]);
console.log(a);

//Zadanie 4

let car ={
    name:'BMW',
    age: 12,
    color: 'Blue',
    model: 550
}

for(key in car){
  console.log(key,':', car[key])
}

//Zadanie 5

let car ={
    name:'BMW',
    age: 12,
    color: 'Blue',
    model: 550
    gearbox: {
        name: 'ABB',
        weight: 80
    }
}


console.log(car.gearbox.name);
console.log(car.gearbox.weight);


//Zadanie 6

const car = {
  name: 'Audi',
  age: 4,
  color: 'Graphite',
  model: 'Q4'
}

car.engine = "4.2 V8";

car.hello = function() {
    console.log("Hello");
}
car.hello();
