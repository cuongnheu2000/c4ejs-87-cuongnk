//init-exc
//  let phim = {
//     name: 'đấu la đại lục',
//     year: 2012,
//     rate: 8.4,
//  };
//  console.log(phim);
//read
//exc1
//  let prop = 'name';
//  console.log(phim[prop]);        //c1
//  console.log(phim['name']);      //c2
//  console.log(phim.name);         //c3
//console.log(phim.director);  //in ra undefined
//exc2
// let list = {
//   sport: 'football',
//   game: 'LoL',
//   music: 'Twice',
//   photo: 'Nikon',
// };
  // console.log(list.sport.toUpperCase());
  // console.log(list.music.toUpperCase());
  // console.log(list.photo.toUpperCase());
//exc3
// let x = 5;
// if (x == null || undefined){
//   alert('x is null or undefined');
// }
// else{
// alert('x has real value');
// };
//   let phim = {
//     name: 'đấu la đại lục',
//     year: 2012,
//     rate: 8.4,
//  }
//  let x = prompt('what you want to know? ');
//  if(x == 'name'){
//    alert(phim[x]);
//  } 
//  else {
//    alert(`'${x}' does not exist in our data `);
//  };
//update
//ex1
//  let phim = {
//     name: 'đấu la đại lục',
//     year: 2012,
//     rate: 8.4,
//  };
//  console.log(phim);
//  phim.rate = 8.7;
//  console.log(phim.rate);
//  phim.rate+=0.5;
//  console.log(phim.rate);
// console.log(phim);
//ex2
// let phim = {
//       name: 'đấu la đại lục',
//       year: 2012,
//       rate: 8.4,
//    };
//    let u = prompt('what u want to update?');
//    if (u == 'name'){
//     let newu = prompt('what is the update?');
//     phim[u] = newu;
//     console.log(phim[u]);
//    }
//    console.log(phim); 
//create
// let phim = {
//   name: 'đấu la đại lục',
//   year: 2012,
//   rate: 8.4,
// };
// console.log(phim);
// phim.age = 8;
// console.log(phim);
//create-exc
//  let phim = {
//     name: 'đấu la đại lục',
//     year: 2012,
//     rate: 8.4,
//  };
//  console.log(phim);
//  let u = prompt('what u want to update?');
// if(u == 'name'){
//   console.log(phim[u]);
// }
// else if(u == 'rate'){
//   console.log(phim[u]);
// }
// else if(u == 'year'){
//   console.log(phim[u]);
// }
// else{
//   alert('add new data');
//   let cr = prompt('enter new data');
//   phim[u] = cr;
//   console.log(phim);
// }
//delete
// let phim = {
//   name: 'đấu la đại lục',
//   year: 2012,
//   rate: 8.4,
// };
// console.log(phim);
// delete phim.year;
// console.log(phim);
//arr object
// let person1 = {
//   name: 'Nam',
//   age: 18,
// }
// let person2 = {
//   name: 'Thu',
//   age: 20,
// }
// let personArr = [];
// personArr.push(person1);
// personArr.push(person2);
// console.log(personArr);
// // console.log(personArr[0].name);
// // let n = personArr[0].name;
// // console.log(n);
// for(let i = 0;i<personArr.length;i++){
//   console.log(personArr[i]);
//   let p = personArr[i];
//   console.log(p.age); 
// }
//arr-object-exc
//ex1
// let phim1 = {
//   name: 'đấu la đại luc',
//   year: 2012,
//   rate: 8.4,
// };
// let phim2 = {
//   name: 'đhoa thien cot',
//   year: 2012,
//   rate: 8.0,
// };
// let phim3 = {
//   name: 'tru tien',
//   year: 2012,
//   rate: 8.1,
// };
// let phimArr = [];
// phimArr.push(phim1);
// phimArr.push(phim2);
// phimArr.push(phim3);
// console.log(phimArr);
//ex2
// console.log(phimArr[0]);
//ex3
// console.log(phimArr[2].name);
//ex4
// for(let i=0;i<phimArr.length;i++){
//   console.log(phimArr[i]);
// }
//ex5
// for(let i=0;i<phimArr.length;i++){
//   console.log(phimArr[i].name);
//   console.log(phimArr[i].year);
//   console.log(phimArr[i].rate);
//}
//ex6
// console.log(phimArr[2].rate+=0.7);
//object-containing arr
// let person1 = {
//   name: 'Nam',
//   age: 18,
//   fav: ['cafe','football','photo'],
// }
// // console.log(person1.fav[1]);
// let fav = person1.fav;
// for(let i = 0; i <fav.length;i++){
//   console.log(fav[i]);
// }
// fav.push('hello');
// console.log(fav);
// console.log(person1);
//ex1
// let movie = {
//   title: 'đấu la đại lục',
//   year: 2018,
//   rate: 8.8,
//   charaters: ['Đường tam','Đại sư','Đường Hạo'],
//}
//ex2
// console.log(movie.title);
// console.log('year: ' +movie.year);
// console.log('rate: '+movie.rate);
// console.log(...movie.charaters);
//ex3
// charaters = movie.charaters;
// charaters.push('Độc cô  bác');
// console.log(charaters);
// console.log(movie);
//mix
//ex1
// let movie1 = {
//   title: 'đấu la đại lục',
//   year: 2018,
//   rate: 8.8,
//   charaters: ['Đường tam','Đại sư','Đường Hạo'],
// }
// let movie2 = {
//   title: 'hoa thiên cốt',
//   year: 2015,
//   rate: 9.0,
//   charaters: ['Bạch tử họa','thiên cốt','đường bảo'],
// }
// let movie3 = {
//   title: 'tru tiên',
//   year: 2018,
//   rate: 8.6,
//   charaters: ['Tiểu Phàm','Lệ dĩnh','tuyết'],
// }
// let movieArr = [];
// movieArr.push(movie1);
// movieArr.push(movie2);
// movieArr.push(movie3);
// for (let i = 0;i<movieArr.length;i++){
//   console.log(movieArr[i].title);
//   console.log('year: ' +movieArr[i].year);
//   console.log('rate: ' +movieArr[i].rate);
//   console.log('casts: ' + movieArr[i].charaters);
// }
//sse4
//ex1
// const product = {
//   name: 'Xiaomi rice cooker',
//   price: 1700,
//   brand: 'Xiaomi',
//   color: 'white'
//   };
//   for (let x in product) {
//   console.log(x);
// }
//1.1
// console.log('x là property');
//1.2
// console.log('name: ' + product.name);
// console.log('price: ' + product.price);
// console.log('brand: ' + product.brand);
// console.log('color: ' + product.color); 
// ex2
// const task = {
//   subject: 'Implement login feature',
//   createdBy: 'Hoang Ngoc Duc',
//   assignTo: 'Nguyen Phuong Nam',
//   dueDate: '2019-10-08T18:00:24+0000',
//   expectedHours: 0.5,
//   };
// let {subject,assignTo,dueDate} = task;
// console.log(subject);
// console.log(assignTo);
// console.log(dueDate);
//ex3
//3.1: kiểu dữ liệu lớp ngoài cùng là object
//3.2: Hits property đó là Mảng
//3.3:
//ex4
//4.1
// let dictionnary = {
//   debug: 'The process of figuring out why your program has a certain error and how to fix it',
//   done: 'When your task is complete, the only thing you have to do is to wait forusers to use it (no additional codes or actions needed)',
//   defect:'The formal word for ‘error’',
//   pm: 'The short version of Project Manager, the person in charge of the final result of a project',
//   uiux: 'UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels'
// }
// alert('hi there, this is dev dictionary');
// let keyword = prompt('nhập keyword: ');
// if(keyword == 'debug'){
//   alert(dictionnary[keyword]);
// }
// else if(keyword == 'done'){
//   alert(dictionnary[keyword]);
// }
// else if(keyword == 'defect'){
//   alert(dictionnary[keyword]);
// }
// else if(keyword == 'pm'){
//   alert(dictionnary[keyword]);
// }
// else if(keyword == 'uiux'){
//   alert(dictionnary[keyword]);
// }
// else{
//   alert(`we could not find your word: ${keyword}`);
// }
//4.2
// else{
//   let upd = prompt('we could find the word,leace your explanation');
//   alert('done');
//   keywords = prompt('enter a keyword');
//   dictionnary.keywords = `${upd}`;
//   alert(dictionnary.keywords);
// }
//ex5
// let nameprd = [];
// let product1 = {
//   name: 'xiaomi portable charger 20000mah',
//   brand: 'Xiaomi',
//   price: 428,
//   color: 'white',
//   category: 'charger'
// } 
// let product2 = {
//   name: 'VSmart Active 1',
//   brand: 'VSmart',
//   price: 5487,
//   color: 'black',
//   category: 'phone'
// } 
// let product3 = {
//   name: 'IPhone X',
//   brand: 'Apple',
//   price: 21490,
//   color: 'Gray',
//   category: 'Phone'
// } 
// let product4 = {
//   name: 'samsung galaxy A9',
//   brand: 'Samsung',
//   price: 8490,
//   color: 'Blue',
//   category: 'Phone'
// }
// nameprd.push(product1);
// nameprd.push(product2);
// nameprd.push(product3);
// nameprd.push(product4);
//5.1
// for(let i=0;i<nameprd.length;i++){
//   console.log( 'name: ' +nameprd[i].name);
//   console.log('price: ' +nameprd[i].price);
// }
//5.2
// for(let i=0;i<nameprd.length;i++){
//   console.log( `#${i+1}.` +nameprd[i].name);
//   console.log(' price: ' +nameprd[i].price);
// }
// let choice = prompt('enter product position');
// console.log(nameprd[choice-1].name);
// console.log(nameprd[choice-1].brand);
// console.log(nameprd[choice-1].price);
// console.log(nameprd[choice-1].color);
// console.log(nameprd[choice-1].category);
//5.3
//  cat = prompt('enter your category? ');
//  switch (cat){
//    case 'charger':
//      console.log('name:' +nameprd[0].name);
//      console.log('price:' +nameprd[0].price);
//    case 'phone':
//      for ( let j = 1;j<nameprd.length;j++){
//       console.log('name:' +nameprd[j].name);
//       console.log('price:' +nameprd[j].price);
//      }
//  }
//5.4
// nameprd[0].providers = 'phukienzero Dientuccc';
// console.log(nameprd[0]);
// nameprd[1].providers = 'Tgdd Ddghn Vhstore';
// console.log(nameprd[1]);
// nameprd[2].providers = 'tgdd';
// console.log(nameprd[2]);
// nameprd[3].providers = 'tgdd';
// console.log(nameprd[3]);
// for ( let j = 0;j<nameprd.length;j++){
//   console.log(`#${j}.` +nameprd[j].name);
//   console.log('price:' +nameprd[j].price);
//   console.log('providers:' +nameprd[j].providers);
// }
//5.5
// let prov = prompt('enter provider');
// if(prov == 'tgdd'){
//   for(let z =1; z<nameprd.length;z++){
//     console.log('name:' +nameprd[z].name);
//     console.log('brand:' +nameprd[z].brand);
//     console.log('price:' +nameprd[z].price);
//     console.log('color:' +nameprd[z].color);
//     console.log('category:' +nameprd[z].category);
//     console.log('providers:' +nameprd[z].providers);
//   }
// }
//ex6
// console.log('hi there, this is your learning tasks to front-end developer carreer:');
// let frEnd = [];
// let HTml = {
//   name: 'HTML',
//   com: 'false'
// }
// let Css = {
//   name: 'CSS',
//   com: 'false'
// }
// let bJS = {
//   name: 'bJS',
//   com: 'false'
// }
// let NPM = {
//   name: 'NPM',
//   com: 'false'
// }
// let Git = {
//   name: 'git',
//   com: 'false'
// }
// frEnd.push(HTml);
// frEnd.push(Css);
// frEnd.push(bJS);
// frEnd.push(NPM);
// frEnd.push(Git);
// //6.1
// console.log(`1. ${frEnd[0].name}`);
// console.log(`complete: ${frEnd[0].com}`);
// console.log(`2. ${frEnd[1].name}`);
// console.log(`complete: ${frEnd[1].com}`);
// console.log(`3. ${frEnd[2].name}`);
// console.log(`complete: ${frEnd[2].com}`);
// console.log(`4. ${frEnd[3].name}`);
// console.log(`complete: ${frEnd[3].com}`);
// console.log(`5. ${frEnd[4].name}`);
// console.log(`complete: ${frEnd[4].com}`);
//6.2
// let choice = prompt('enter your command(new,delete,update,complete)');
// if(choice == 'new'){
// let cr = prompt('enter new task:');
// cr = {
//   name: `${cr}`,
//   com: 'false'
// }
// frEnd.push(cr);
// console.log( `6. ${frEnd[5].name}`);
// console.log(`complete: ${frEnd[5].com}`);
// }
//6.3
// let choice = prompt('enter your command(new,delete,update,complete)');
// if (choice =='update'){
//   let up = prompt('enter possition');
//   let newname = prompt('enter new name');
//   frEnd[Number(up)-1].name = newname;
//   for(let i = 0;i<frEnd.length;i++){
//     console.log(`${i+1}. ${frEnd[i].name}\n   complete: ${frEnd[i].com}`);
//   }
// }
//6.4
// let choice = prompt('enter your command(new,delete,update,complete)');
// if(choice == 'complete'){
//   let comp = prompt('enter position');
//   let newcom = 'true';
//   frEnd[Number(comp)-1].com = newcom;
//   for(let i = 0;i<frEnd.length;i++){
//   console.log(`${i+1}. ${frEnd[i].name}\n   complete: ${frEnd[i].com}`);
//    }
// }
//6.5
// let choice = prompt('enter your command(new,delete,update,complete)');
// if(choice == 'delete'){
//   let det = prompt('Enter the index of task to delete:');
//   frEnd.splice(det-1,1);
//   for(let i = 0;i<frEnd.length;i++){
//     console.log(`${i+1}. ${frEnd[i].name}\n   complete: ${frEnd[i].com}`);
//   }
// }
//6.6
// for(let i = 0; i < frEnd.length; i++) {
//   console.log(`${i + 1}. [${(frEnd[i].com ? 'X' : ' ')}] ${frEnd[i].name}`);
// }