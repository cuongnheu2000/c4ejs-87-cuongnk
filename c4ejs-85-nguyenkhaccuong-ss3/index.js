//array init exc
// let name = ['đấu la đại lục','tây du kí'];
// console.log(name);

//create
// name.push('hoa thiên cốt');
// console.log(name);

//exc create
// let name = ['đấu la đại lục','tay du kí'];
// console.log(name);
// let x = prompt('nhạp tên phim mới: ');
// name.push(x);
// console.log(name);

//read
// let name = ['đấu la đại lục','tay du kí'];
// console.log(name[1]);

//read exc
// let name = ['đấu la đại lục','tay du kí'];
// console.log(name);
// let i = prompt('nhap phim can xem: ');
// console.log(name[i]);

//update + exc
// let anh=['hello', 'goodbye',' hi'];
// console.log(anh);
// anh[1] = 'xin chào';
// console.log(anh[1]);
// console.log(anh);
// let i = prompt('nhap cai can doi: ');
// anh[i] = prompt('nhap ten can doi: ');
// console.log(anh[i]);
// console.log(anh);

//delete + exc
// let anh=['hello', 'goodbye',' hi'];
// console.log(anh);
// anh.splice(1,0);
// console.log(anh);
// let i = prompt('vị trí cần xóa: ');
// let j = prompt('xóa mấy cái bắt đầu vị trí cần xóa: ');
// anh.splice(i,j);
// console.log(anh);
;
//for and arr
// let anh=['hello', 'goodbye',' hi'];
// console.log(anh);
// for( let i = 0 ; i< anh.length; i++){
//   console.log(anh[i]);
// }

//exc for and arr
//1
// let phim  = ['Batman','Up', ' Attack of Titans','My bos my hero'];
// console.log(phim);

//2
// let phim  = ['Batman','Up', ' Attack of Titans','My bos my hero'];
// console.log(phim);
// for( let i = 0;i< phim.length/2;i++){
// console.log(phim[i]);
// }

//3
// let phim  = ['Batman','Up', ' Attack of Titans','My bos my hero'];
// console.log(phim);
// for( let i = 0;i< phim.length;i++){
// console.log(phim[i]);
// }

//arr update all
// let phim  = ['Batman','Up', ' Attack of Titans','My bos my hero'];
//  console.log(phim);
//  for(let i = 0; i< phim.length;i++){
//    phim[i] = phim[i].toLowerCase();
//  }
//  console.log(phim);

//while- Purpose of while
// let n = Number(prompt('nhập n: '));
// console.log(n);
// if(n){
//   console.log('is number');
// }
// else{
//   console.log('not is number');
// }
// while(true){
//  let n = Number(prompt('nhập n: '));
//  if(n){
//    break;
//  }
// }

//exc username
// while(true){
//   let ten = new String(prompt('nhap ten: '));
//   if(ten.length<=15){
//     alert('good user');
//     break;
//   }
//   else{
//     alert('too long');
//   }
//}

//exc quick quiz
// while(true){
//   let hoi = 'con nhện có bn chân? ';
//   alert(hoi);
//   let dapan = ['1.None', '2. 4 legs','3. 8 legs','4. 12 legs'];
//   alert(dapan);
//   let chon = prompt('chọn đáp án: ');
//   if(chon == 2){
//     alert('chính xác');
//     break;
//   }
//   else if( chon == 1){
//     alert('chúc may mắn lần sau');
//     break;
//   }
//   else if( chon == 3){
//     alert('chúc may mắn lần sau');
//     break;
//   }
//   else if( chon ==4){
//     alert('chúc may mắn lần sau');
//     break;
//   }
//   else {
//     alert('nhập lại');
//   }
// }

//ex1
//c1:
// let a=5,b=6;
// [a,b] = [b,a];
// console.log(`${a} ${b}`); // in ra 6 5

//c2
// let a = 5, b = 6;
// a = a ^ b;
// b = a ^ b;
// a = a ^ b;
// console.log('a is now:', a);
// console.log('b is now:', b);  // in ra 6 5

//ex2
// const s = "Hello daddy";
// let a = s.split(" ");
// console.log(a); // in ra ["hello","daddy"]

//ex3
// const a = ['hello','good bye','xin chào'];
// console.log(...a);   // in ra liền: hello good bye xin chào
// let x = [...a];
// console.log(x);   // in ra mảng ["hello","good bye","xin chào"]

//ex4
// let clothes = ['Jeans', 'T-Shirt', 'Socks'];
// let choice;
// let check = true;
// let getchoice = function(){
//     choice = prompt('Hi there, welcome to shop admin chanel, what do you want? (C, R, U, D)').toLowerCase();
//     while(choice != 'c' && choice != 'r' && choice != 'u' && choice != 'd') {
//         alert('This command is not supported');
//         choice = prompt('Hi there, welcome to shop admin chanel, what do you want? (C, R, U, D)').toLowerCase();
//     }
// };
// do{
// getchoice();
// switch(choice){
//     case 'r' :
//         console.log('the current items are: ');
//         for(let i=0; i<clothes.length; i++){
//             console.log(`${i+1}. ${clothes [i]}`);
//         }
//             check=false;
//             break;
        
//     case 'c' :
//         let newitems = prompt('thêm clothes mới: ');
//         clothes.push(newitems);
//         alert('Done');
//         break;
//     case 'u' :
//         let so = prompt('chon số cần đổi: ');
//         let newclothe = prompt('nhập tên mới: ');
//         clothes[so-1] = newclothe;
//         alert('done');
//         break;
//     case 'd' :
//         i = prompt('chọn cái cần xóa: ');
//         clothes.splice(i-1,1);
//         alert('done');
//         break;
//  }
// } 
// while(check);



//ex5
// let x = prompt('nhập chuỗi số được tách bởi dấu phẩy: ');
// let so = x.split(",");
// let sum = so.reduce((truoc, hientai) => Number(truoc) + Number(hientai) , 0); 
// alert(`tong dãy số là: ${sum}`);

//ex6
// let x = prompt('nhập chuỗi số được tách bởi dấu phẩy: ');
// let so = x.split(",");
// let min = so.reduce((i,j) => {
// if (j < i)
//     return(j);
//     return(i);
// } , so[0]);
// alert(`min = ${min}`);

//ex7
// const arr = [3,4,6,-9,10,-88,2];
// let x = prompt('nhập số: ');
// let y = arr.indexOf(Number(x));
// if(y == -1) {
//     alert(`${x} is NOT found in my array`);
// } 
// else {
//     alert(`${x} is FOUND in my array at index ${y}`);
// } 

//ex8
//8.1
// let x = [5,7,300,90,24,50,75];
// console.log('Hello, my name is cuong and here is my sheep sizes:');
// console.log(...x);

// //8.2
// let max = x.reduce((truoc,hientai) => {
//     if(hientai > truoc)
//     return (hientai);
//     return(truoc);
// });
// console.log(`max finding is: ${max}`);

// //8.3
// x[x.indexOf(max)] = 8;  //thay thế vị trí max
// console.log(`After shearing, here is my flock:`);
// console.log(...x);

// //8.4
// const y = 50;
// x = x.map(x => x +50 );

// console.log('MONTH 1\nOne month has, passed, my sheeps have grown, here are there sizes');
// console.log(...x);

//8.5
// let z = function(){
//  max = x.reduce((truoc,hientai) => {
//     if(hientai > truoc)
//     return (hientai);
//     return(truoc);
// });
// console.log(`max finding is: ${max}`);
// x[x.indexOf(max)] = 8;  //thay thế vị trí max
// console.log(`After shearing, here is my flock:`);
// console.log(...x);
// }
// console.log(`max finding is: ${max}`);
// x[x.indexOf(max)] = 8;  //thay thế vị trí max
// console.log(`After shearing, here is my flock:`);
// console.log(...x);

// let month = 1;
// let tang = 50*month;
// x=x.map(x => x + tang);
// console.log('MONTH 1\nOne month has, passed, my sheeps have grown, here are there sizes');
// console.log(...x);

// z();

// month = 2;
// tang = 50*month;
// x=x.map(x => x + tang);
// console.log('MONTH 2\nOne month has, passed, my sheeps have grown, here are there sizes');
// console.log(...x);
// z();

//8.6
//let tongsize = x.reduce((trc,hientai) => trc + hientai, 0);
//let tien = tongsize*2;
//console.log(`so tien la ${tien}`);

//ex10
// let names = prompt('nhập tên: ');
// changenames = names.split(",").map((name) => {
//     return `<${name}>`;
// });
// alert(`${names}=> ${changenames}`);

//ex11
// let so = prompt('nhap day so: ');
// let changeso = so.split(",").filter(le => {
//     if(le %2 == 1)
//     return le;
// })
// alert(`${so} => ${changeso}`);


