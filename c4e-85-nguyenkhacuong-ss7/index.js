// 1
// 1.b      2.a     3.c     4.d

// 2
// function sayhi(){
//     console.log('heeloo world');
// }
// setTimeout(sayhi,3000);     //hiện thị sau 3s
// setInterval(() => {
    // console.log('hello world')
// }, 3000);

// 3
// 3.1 No 
// 3.2 No 

// 4
// const Li = document.getElementsByTagName('li');
// console.log(Li[0]);
// for (let i = 0; i < Li.length; i++) {
//     console.log(Li[i]);
// };

// 5
//let Div = document.getElementsByClassName('single');
// console.log(Div[1].innerHTML);

// for(let i = 0; i < 4; i++){
//     console.log(Div[i].innerHTML);
// }

// 7
// 7.1
// let butn1 = document.getElementById('butn1');
// let butn2 = document.getElementById('butn2');
// butn1.addEventListener('click',(e) => {  
//     console.log(e.target);
// });
// butn2.addEventListener('click',(e) => {
//     console.log(e.target);
// });

// 7.2
// let inp = document.getElementById('inp');
// inp.addEventListener('keydown', (e) =>{
//     console.log(e.key);
// });

// 8
// function wish(){
//     alert('my name is Cuong \n I wish to rich next year');
// };
// wish();

// 9
// function mywish(name,wish){
//     alert(`${name} ${wish}`);
// };
// mywish('Cường', 'I Wish girl with love');

// 10
function mywish(name, wish){
    if(wish==undefined){
        alert('my name is ' + name + '\n' + 'i dont have a wish');
    }
    else{
        alert(`${name} ${wish}`)
    }
};
//mywish(`Cường`);
