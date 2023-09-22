// while loop

var money = 0;
while(money <= 9){
    console.log('give me a egg');
    console.log(money);
    money++;
}

var number = 0;
while(number <= 100){
    console.log(number);
    number+= 2;
}


// for loop

for(var i = 0; i<=10; i++){
    console.log(i)
}
console.log('for lop practise');

for(var i = 1; i < 22; i +=2){
    console.log(i);
}

var numbers = [33, 22, 55, 78, 92, 23,99,17];
for(var i = 0; i < numbers.length; i++){
    var number = numbers[i];
    if(number > 40){
        continue;
    }
    console.log(number);
}

var names = ['mehedi', 'hasan', 'rana', 'rohim', 'karim'];
for(i = 0; i< names.length; i++){
    var name = names[i];
    if(name == 'rana'){
        break;
    }
    console.log(name);
}


// reverse ulta number theke suru korar
var num = 10;
while(num >= 1){
    console.log(num);
    num--;
}

for(var i = 20; i >= 1; i--){
    console.log(i);
}
