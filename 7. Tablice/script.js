//Zadanie 1

    const tab = ["1", "2", "3"];
    console.log( tab[0] ); 
    console.log( tab[1] ); 
    console.log( tab[2] );     
    
    
//Zadanie 2

    //1
    console.log( tab[1] ); 
    console.log( tab[2] );    
    
    //2 
    console.log(tab[tab.length - 1]);
    
    //3
    for(let i=0;i<tab.length-1;i++)
    {
        console.log(tab[i]);
    }
    
    //4
    for(let i=0;i<tab.length;i+=2)
    {
        console.log(tab[i]);
    }
    
    //5
    
 
        for(let i=0;i<tab.length;i+=2)
    {
        console.log(tab[i]);
    }

tab.forEach(el => {
    if(typeof(el) === 'string'){
        console.log(el);
    }
});

    //6
    
    for(let i=0;i<tab.length;i+=2)
    {
        console.log(tab[i]);
    }

tab.forEach(el => {
    if(typeof(el) === 'number'){
        console.log(el);
    }
});

//Zadanie 3

const t2 = [1, 2, 3, 4, 5];

//1

const sum = t2.reduce((acc, number) => (acc + number));
console.log(sum)

//2

const dif = t2.reduce((acc, number) => (acc - number));
console.log(dif)

//3

const avg = sum / t2.length;
console.log(avg);

//4

t2.forEach((el) => {
	if (el % 2 === 0) {
		console.log(el);
	}
});

//5

t2.forEach((el) => {
	if (el % 2 !== 0) {
		console.log(el);
	}
});

//6

const result = t2.sort((a,b) => a - b);
console.log('max:', result[result.length - 1])


//7

t2.sort((a,b ) => b - a );
console.log('min', result[result.length - 1])

//8

t2.reverse().forEach(el => console.log(el))

//Zadanie 4

const t2 = [1, 2, 3, 4, 5, 22, 33, 44];

const func = tab => tab.reduce((a,b)=>a+b);

console.log(func(t2));

//Zadanie 5

function A(tab){
    const sum = tab.reduce((a,b)=>a+b);
    const avg = sum / tab.length;
    const result = tab.map(el => console.log(el * avg))
}

A(t2)

//Zadanie 6

const t2 = [1, 2, 3, 4, 5, 22, 33, 44];

function x(tab){
    const avg = tab.reduce((a,b)=> a+b) / tab.length ;
    console.log(avg)
}

x(t2);

//Zadanie 7







