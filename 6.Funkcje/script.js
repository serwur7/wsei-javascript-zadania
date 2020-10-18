// Zadanie 1


const randomName = () => {
    console.log("Udało się!");
  
}

randomName();

//Zadanie 2


function showParam(a){
    console.log(a);
}

//Zadanie 3

const x = (param) =>{
    return param;
}
x([1,2,3]);


//Zadanie 4

const func2 = (str) => {
    let c = 0;
    let time = setInterval(() => {
        console.log(str);
    if (++c >= 5) {
        clearInterval(time);
        console.log('Koniec');
    }                     
    }, 3000)
}

func2('string');
