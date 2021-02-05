//Zadanie 1

class Person{
    constructor(name, lastname, age, country, city, language){
        this.name = name;
        this.lastname= lastname;
        this.age = age;
        this.country = country;
        this.city = city;
        this.language = language;
    }
    newCity(city) {
        this.city = city;
    }
    newAge(age) {
            this.age = age;
    }
}
const personA = new Person('Kamil', 'Siedlak', 27, 'Poland', 'Kraków', 'polish');
const personB = new Person('Stefan', 'Nowak', 26, 'Poland', 'Poznan', 'polish');
const personC = new Person('Beata', 'Zorba', 56, 'Poland', 'Gdansk', 'polish');
const personD = new Person('Halina', 'Nowakowska', 70, 'Poland', 'Torun', 'polish');
const personE = new Person('Aleksander', 'Nowakowski', 50, 'Poland', 'Wroclaw', 'polish');

personB.newAge(75);
personE.newAge(20);
personA.newCity("LasVegas");

console.log(personA);
console.log(personB);
console.log(personE);


//Zadanie 2

function Calculator(a,b){
    this.a=a;
    this.b=b;
    this.operation='';
    this.outcome=null;
    this.clearMemory = ()=>{
        this.operation='';
        this.outcome=null;
    }
    this.showMemory = ()=>console.log(`${this.a} ${this.operation} ${this.b} = ${this.outcome}`); 
  

    this.sum = ()=> {
      this.outcome = this.a + this.b;
      this.operation='sum';
    }
    this.sub = ()=> {
      this.outcome = this.a - this.b;
      this.operation='sub';
    }
    this.mul = ()=> {
        this.outcome = this.a * this.b;
        this.operation='mul';
    }
    this.div = ()=> {
        this.outcome = this.a / this.b;
        this.operation='div';
    }
}

cal1 = new Calculator(1,2);
cal2 = new Calculator(3,5);


//Zadanie 3  

function Game(){
  let randomInterval;
  this.funcRandomNumber = ()=>{
   randomInterval = setInterval(()=>{
      this.randomNumber = Math.floor(Math.random()*10)+1;
      console.log(this.randomNumber);
      this.checkNumber();
    },1000)
    
  }

  this.checkNumber =()=>{
    if(this.randomNumber>5){
      clearInterval(randomInterval);
    }
  }
}
Game.prototype.randomNumber;


let g1= new Game();
let g2= new Game();
