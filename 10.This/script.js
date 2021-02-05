//Zadanie 1


let person = {
    name: "Kamil",
    surename: "Siedlak",
    age: 26, 
    country:"Poland",
    city: "Wroclaw",
    
  newAge:  
    
    function(){
      this.age++;
      return this.age;
    }
}

let person2 = {
    name:"Aleksander",
    surename:"Nowakowski",
    age: 50,
    country:"England",
    city:"London",
    
  newAge:  
    
    function(){
      this.age++;
      return this.age;
    }
}
Object.keys(person).forEach((key) => console.log(`${key}: ${person2[key]}`))
Object.keys(person2).forEach((key) => console.log(`${key}: ${person2[key]}`))

console.log(person.newAge());
console.log(person.newAge());
console.log(person.newAge());
Object.keys(person).forEach((key) => console.log(`${key}: ${person2[key]}`))

console.log(person2.newAge());
console.log(person2.newAge());
console.log(person2.newAge());
console.log(person2.newAge());
Object.keys(person2).forEach((key) => console.log(`${key}: ${person2[key]}`))

//Zadanie 2

person.dishes =['pierogi','spaghetti','salad'];
person2.dishes =['chicken','pizza','burger'];

person.favouriteDishes= function(dish){
    this.dishes.push(dish);}
person2.favouriteDishes= function(dish){
    this.dishes.push(dish);}
console.log(person);
console.log(person2);
console.log('After adding their dishes:');
person.favouriteDishes('dumplings');
console.log(person);
person2.favouriteDishes('lasagna');
console.log(person2)


//Zadanie 3

let calculator ={
    a:null,
    b:null,
    sum:()=>console.log(calculator.a + calculator.b), 
    sub:()=>console.log(calculator.a - calculator.b), 
    mul:()=>console.log(calculator.a * calculator.b), 
    div:()=>{
        if(calculator.b==0){
            console.log('nie można dzielić przez zero');
        }else{
            console.log(calculator.a / calculator.b);
        }
    } 

}

//Zadanie 4

let ladder ={
    level_0:0,
    level_max:5,
    currentLevel:0,
    stepDown: ()=>{
        if(ladder.currentLevel==ladder.level_0){
            ladder.currentLevel = null;
            console.log('zszedłeś z drabiny');
        }else{
            console.log('musisz byc na najniższym poziomie żeby zejśc');
        }
    },
    moveUp: ()=>{
        if(ladder.currentLevel<ladder.level_max){
            ladder.currentLevel++;
        }else{
            console.log('nie możesz wyjść wyżej')
        }
    }, 
    moveDown: ()=>{
        if(ladder.currentLevel>ladder.level_0){
            ladder.currentLevel--;
        }else{
            console.log('żeby zejść uzyj funkcji stepDown')
        }
    }, 
    
}
