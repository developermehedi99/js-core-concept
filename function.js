
function addNumber(num1, num2){
    console.log('adding your number:', num1, num2);
}
addNumber(33,44);

function add(a,b,c,d){
    console.log(a,b,c,d);
    var total=(a+b+c+d);
    console.log(total);
}
add(22, 42,77,3);

function jobSalary(money){
    var monthSalary = 500;
    quantity = money / monthSalary;
    return quantity;
}

var total = jobSalary(5000);
console.log('salary:', total);

function bringSingara(taka){
    var singaraPrice = 10;
    quantity = taka / singaraPrice;
    return quantity;
}
var mot =bringSingara(300);
console.log(mot);



function getAvarage(assignment1, assignment2,assignment3){
    const totalMark = assignment1 + assignment2 + assignment3;
    const avarage = totalMark / 3;
    return avarage;
}

const ass1Mark = 60;
const ass2Mark = 58;
const ass3Mark = 53;

const myAvarage = getAvarage(ass1Mark, ass2Mark, ass3Mark);
console.log(myAvarage);