//Zadanie 1:

let n1 = 15,
    n2 = 6;

if(n1 > n2){
  console.log(n1);
} else {
    console.log(n2);
}

//Zadanie 2:
let x = 10,
    y = 16,
    z = 6;
if(x > y && x > z){
  console.log(x + ' jest największe');
} else if (y > z && y > x){
  console.log(y + ' jest największe');
} else {
  console.log(z + ' jest największe');
}

//Zadanie 3:

for (let i=0; i<10; i++) {
    console.log("Lubię Javascript");
}

//Zadanie 4:

let result = 0;
for(i=1; i<=10; i++){
    result += i;
}
console.log(result);

//Zadanie 5:

var n = 5;
for(let i=0; i<n; i++){
    if (i%2 === 0){
        console.log(i + " parzysta");
    }else{
        console.log(i + " nieparzysta");
    }
}

//Zadanie 6:

let n = 5;

for(let i = 0; i < n; i++){
    for(let j = 0; j < n; j++){
        console.log("i= " + i + ", j= " + j);
    }
}

//Zadanie 7:

for (i=1; i < 101; i++){
    if (i % 15 == 0) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
}

//Zadanie 8:

//a)

let star = 5;
let result = '';

for(let i = 1; i <= star; i++){
    for(let j = 0; j < i; j++){
         result += "*";
    }
    console.log(result);
    result = ""
}

//b)

for(let i=1;i<=5;i++){
   
    let row ='';
    for(let j =5-i;j>0;j--){
        row+=' ';
    }
    for(let k =0;k<i;k++){
        row+='* ';
    }
   
    console.log(row);
}

//c)

for(let i=1;i<=5;i++){
   
    let row ='';
    for(let j =5-i;j>0;j--){
        row+=' ';
    }
    if(i==1){
     row+='*';
   
    }else if(i==2){
      row+='***';
    }
    else{
      row+='***';
      for(let k =2;k<i;k++){
        row+='**';
    }
    }
    
    console.log(row);
}

//d)

for(let i=1;i<=5;i++){
   
    let row ='';

    for(let j =0;j<i;j++){
        row+='*';
    }
    let number=i;
    for(let k =5;k>i;k--){
        row+=number;
        number++;
    }
    console.log(row);
}

console.log('-'.repeat(5));

for(let i=5;i>0;i--){
   
    let row ='';

    for(let k =1;k<=i;k++){
        row+='*';
    }
    let number =i
    for(let j =5;j>i;j--){
      row+=number;
       number++;
    }

    console.log(row);
}

//e)

for(let i=1;i<=5;i++){
   
    let row ='';
    for(let j =5-i;j>0;j--){
        row+=' ';
    }
    for(let k =0;k<i;k++){
        row+='* ';
    }
   
    console.log(row);
}
for(let i=1;i<=3;i++){
  console.log(' '.repeat(4)+ '*');
}

