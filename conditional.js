const mobilePrice = 12000;
const myTaka = 9000;

if(mobilePrice < myTaka) {
    console.log('i will by mobile phone');
}
else{
    console.log('i will button phone')
}

const job = true;
const salary = 30000;
const home = 1;

if(job == true && salary > 25000){
    console.log('good work and working hard');
}else{
    console.log('bad work and try again');
}
if ( job == true || (salary >= 30000 && home >= 1)){
    console.log('requaired full');
}else{
    console.log('not requaird full');
}

const myMoney = 450;
const mobile = 300;
const laptop = 400;
const pc = 500;

if(pc < myMoney){
    console.log('pc nibo');
}
else if(laptop < myMoney){
    console.log('lapton nibo');
}
else if(mobile < myMoney){
    console.log('mobile nibo');
}
else{
    console.log('kichu nibo na');
}