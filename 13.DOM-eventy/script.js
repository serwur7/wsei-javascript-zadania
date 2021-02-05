//Zadanie 1

// 1.1
document.getElementById('test-event').addEventListener('click', (e) => {
    console.info(e);
});
// 1.2
document.body.addEventListener('mousemove', (e) => {
    console.info(e);
});
// 1.3
document.getElementById('test-event').addEventListener('mouseover', (e) => {
    console.info(e);
});

// 1.4
document.addEventListener('keydown', (e) => {
    console.info(e);
});

// 1.5
document.addEventListener('scroll', (e) => {
    console.info(e);
});

// 1.6
document.getElementById('input-test').addEventListener('input', (e) => {
    console.info(e);
});

//Zadanie 2

document.getElementById('ex2').addEventListener('click', (e) => {
    document.getElementById('span-ex2').innerText = e.target.getAttribute('data-text');
});

//Zadanie 3

const div = document.getElementById('ex3');
div.addEventListener('mouseover', (e) => {
    div.style.backgroundColor = 'blue';
});

div.addEventListener('mouseout', (e) => {
    div.style.backgroundColor = 'red';
});

//Zadanie 4


const illegalChars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const errorSpan = document.getElementById('ex3-err');
document.getElementById('input-test').addEventListener('input', (e) => {
    errorSpan.innerText = illegalChars.some(char => e.target.value.includes(char))
        ? "Nie możesz wpisywać cyfr!"
        : null;
});

//Zadanie 5

const counterBtn = document.getElementById('ex5-button');
const counterContainer = document.getElementById('ex5');
let counter = 0;
function counterAction () {
    counter++;
    counterContainer.innerText = counter;
    if(counter >= 10) {
        counterBtn.removeEventListener('click', counterAction);
    }
}
counterBtn.addEventListener('click', counterAction);

//Zadanie 6

document.addEventListener('scroll', (e) => {
    document.body.style.backgroundColor = window.scrollY >= 200
        ? 'red'
        : 'white';
});

//Zadanie 7


var ourInput = document.querySelector('#calculator > input');
    var clearFlag = false;
    var another = false;

    document.querySelectorAll('#calculator > div > button').forEach((element) => {
        element.addEventListener('click', (event) => {
            if (clearFlag == true) {
                ourInput.value = "";
                clearFlag = false;
            }
            ourInput.value = ourInput.value + event.target.innerText;
            if (another == true) {
                ourInput.value = eval(ourInput.value);
                another = false;
                clearFlag = true;
            }
            if (['/', '*', '+', '-'].includes(event.target.innerText)) {
                another = true;
            }
        });
    });
  
});




