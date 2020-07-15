// async function load () {
//     const conn = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu/');
//     const data = await conn.json();
//     console.log(data);
// }
// load();

// 1.1
// const aPromise = new Promise(
//     function(resolve , reject) {
//     setTimeout(() => resolve(console.log("done")), 5000)
    
// });
// Promise;
// 1.3 
//aPromise.then(() => console.log('promise is da best'));

// 1.2
// function wait(ms) {
//     return new Promise (r => setTimeout(r, ms))
// }
// async function main(){
//     await wait(5000);
//     console.log('promise da the best');
    
// };
// main();

// 2
    // const fetchPromise = fetch('https://pokeapi.co/api/v2/pokemon/pikachu/');
    // fetchPromise.then(connection => {
    //     console.log('connected');
    //     console.log(connection);
    //     const jsonPromise=  connection.json();
    //     console.log(jsonPromise);
    // });

//4
// function rndNumber (){
//     return y = Number(Math.floor(Math.random()*20));
// }
// const x = rndNumber();
// if(x < 0){
//     console.log(y);
//     console.log(`failed: the number  is smaller than 0`);
// } else if (x > 10){
//     console.log(y);
//     console.log(`failed: the number  is bigger than 0`);
// } else {
//     console.log(y);
//     console.log(` passed, bravo `);
// }

// 5
// function rndNumber(a,b){
//     return y = Number(Math.floor(Math.random()* (b-a) + a));
// }
// const x = rndNumber(0,20);
// if( x < 4){
//     console.log(y);
//     console.log('failed: the number  is smaller than 4');
// } else if( x > 16){
//     console.log(y);
//     console.log('failed: the number  is bigger than 16');
// } else{
//     console.log(y);
//     console.log(` passed, bravo `);
// }

// 6
// function calculateFunction(x1, y1, x2, y2){
//     let result = Math.sqrt((x1-x2)*(x1-x2) + (y1-y2)*(y1-y2))
//     return result;
// }
// const x = calculateFunction(3, 10, 0, 6);
// console.log(x);
// if (x !== 5) {
// console.log('Failed: the calculation is wrong');
// } else {
// console.log('Passed, bravo');
// }

