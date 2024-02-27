
//Callback function
// const myFunc = (callbackFunc) => {
//     let number = 50
//     callbackFunc(number)
// }
// myFunc (function(value) {   //Bu yerda "function" kalit suzini olib quysak bu funksiya array kuinishida ishlaydi
//     console.log(value)
// })

//ARRAY

// const mehmon1 = `Azizbek`
// const mehmon2 = `Muhammadrizo`
// const mehmon3 = `Ilyos`
// const mehmon4 = `Asror`

// array => massive  array bazan massive deb aytiladi chunki ular bir nechta ishni jamlamamasi bulib keladi

// const mehmonlar = [`Azizbek`, `Muhammdarizo`,`Ilyos`,`Asror`]

// mehmonlar[0] = `Abduhamid`
// console.log(mehmonlar)

// let numbers = [12,21,2,84,8.68,86]

//property
// const result = numbers.length
// console.log(result);

// let result = mehmonlar.indexOf(`Asror`)
// let result = mehmonlar.concat(numbers)

// mehmonlar.push(`Nurullo`)
// mehmonlar.pop(` Adham`)

// console.log(mehmonlar)

//==========================  Amaliy mashq    ===================================
/*
 1) promptdan ism va yosh kiritilsa kiritilgan yosh orqali ushbu ma'lumotlar hisoblanib berilishi kerak:
 tug'ilgan yili 2005, yashagan oy, hafta, kun, soat,daqiqa,sekund
  */

//  const ism = prompt(`Ismingizni kiriting`)
// const yosh = +prompt(`Yoshingizni kiriting`)

// let tugilganYil = 2024 - yosh
// let oy = yosh * 12
// let hafta = ((yosh * 365) / 7).toFixed(0)
// let kun = yosh * 365
// let soat = kun * 24
// let daqiqa = soat * 60
// let soniya = daqiqa  * 60

// const result = `Qadrli ${ism}. Siz ${tugilganYil} yilda tug'ilgansiz. Va siz ${oy} oy ,${hafta} hafta, ${kun} kun, ${soat} soat, ${daqiqa } daqiqa ,${daqiqa}soniya yashagansiz.😊`

// alert(result)

/*
2) - ismlar arrayi ichidan promptdan so'ralayotgan ism bo'lsa unda ha bunday ism bor agar bo'lmasa afus bunday ism yo'q degan yozuv chiqarilishi kerak
*/

// const ism = prompt("Ism kiriting")

// //includes
// const ismlar = [`Ilyos`,`Muhammadrizo`,`Jasur`]

// if (ismlar.includes(ism)){
//     alert(`Ha ${ism} ismi bizning ro'yxatda bor`)
// }else{
//     alert(`Afsus ${ism} ismi bizning ro'yxatda yo'q`)
// }

/*
3) - array ichidagi ismlarning oxiriga bek qo'shimchasni qo'shing.Va console ga chiqaring
*/

// const ismlar = [`Jasur`, `Adham`, `Muhammadrizo`];

// for / while => loop

// for
// for (let i = 0; i < ismlar.length; i++) {
//   let result = ismlar[i] + `bek`;
//   console.log(result);
// }


//while

// let i = 0

// while (i < ismlar.length) {
//     let result = ismlar[i] + `bek`;
//     console.log(result);
//     i++
// }


/*
4) - promptdan kritilgan viloyat nomi orqali o'sha viloyatda qancha aholi borligni chiqaring
*/

// const viloyatNomi = prompt(`Qaysi viloayt kerak ?`)

// switch(viloyatNomi){
//     case "Farg'ona":
//         alert("Farg'ona viloyatida 2 mln aholi bor")
//         break
//         case "Andijon":
//             alert("Andijon viloyatida 1.5 mln aholi bor")
//             break
//             case "Namangan":
//                 alert("Namangan viloyatida 1 mln aholi bor")
//                 break
//              default:
//                 alert(`Hozircha ba'zada ${viloyatNomi} viloyat mavjud emas`)
// }

/*
5) - promptga kritilgan belgilar soni meyprdan oshsa qancha oshgani va qancha yozgani agar meyoridan kam yozilgan bo'lsa qancha yozgani va qancha yana belgi kiritilishi kerakligini yaratish kerak
*/


// const belgilar = prompt(`Nimadir kiriitng ...`)

// let meyor = 20

// if(belgilar.length > meyor ) {
//     alert(`Siz ${meyor} ta belgi kiritishingiz mumkin, lekin hozirda siz ${belgilar.length} ta belgi kiritdingiz. Bu me'yordan ${belgilar.length - meyor} ta ko'p`)
// }else{
//     alert(`Siz ${meyor} ta belgi kiritishingiz mumkin, va hozirda siz ${belgilar.length} ta belgi kiritdingiz.Ya'na ${belgilar.length - meyor} ta belgi kiritishingiz mumkin `)
// }

// array mashqlari 2
// 1 mashq
// arraydagi stringni indexni topish

// const myArray =[[false,true], [1,2], 99 ,`yaxshi`]

//for
// for( let i = 0; i < myArray.length; i++) {
//   if (typeof  myArray[i] == `string`){
//     console.log(`string index:`, i);
//   }
// }

// myArray.forEach((item, i) =>{
//   if (typeof item == `string`){
//     console.log(`string index:`,i );
//   }
// })

// 2 mashq
// Array ichidagi fqat arraylarni Elementlarini ajratib beradi

// const data = [[1,2,3,], `qizil`, [4,5,6], true, false,]
// const newData = []
// data.forEach((item)=>{
//   const res = Array.isArray(item)
//   if(res){
//     item.forEach((num)=>{
//       newData.push()
//     })
//   }
// })
// console.log(newData);

// 3 mashq
// array ichidagi [null, 0, false, undefined ] qiymatlarini ajratib oling

// const checkData = [null,`false`,0,99, false,undefined,'',NaN, ]

// const falsey = []

// checkData.forEach((item) =>{
//   if(!item){
//     falsey.push(item)
//   }
// })
// console.log(falsey);

// 4 mashq
// berilgan qiymar samarqand :
// kutilayotgan qiymat dnaqramas

//  1 - usul
//  const word = `Samarqand`
//  const splitWord = word.split('').reverse()
// let newWord = ''
//  for (let i = 0; i<splitWord.length; i++) {
//   newWord += splitWord[i]
//  }

//  console.log(newWord);

// 2 usul
// const word = `Samarqand`
// const splitWord = word.split('')
// let newWord = ''

// for(let i = word.length-1;i >=0; i--){
//   newWord += splitWord[i]
// }
// console.log(newWord);

// 5 mashq
// promptadn kiritilgan istalgan suzlarni suzlarni birinchi harfi kichik qoganlari katta chiqarish kerak

// const word = propmt`Biror gap kiriting`
// const splitWord = word.split(' ')
// let newWord = ''


// splitWord.forEach((item)=>{
//   const boshi = item.charAt().toLowerCase()
//   const davomi = item.slice(1).toUpperCase()

//   newWord += ` ` + (boshi + davomi)
// })

// console.log(newWord.trimStart());

// 6 mashq
// array ichidagi natural raqamlar yigindisini toping
// const numbers = [1,2.5,-9,89,-9,45,Infinity,2,0]
// naturalNumber = 0
// numbers.forEach((num)=>{
//   if(num>=0.0 && Math.floor(num) === num && num!== Infinity && num !== 0){
//     naturalNumber +=num
//   }
// })
// console.log(naturalNumber);

// 7 mashq
// promptdan bitta suz kiritilgan ichidagi 'a' harfi necha marta ishlatilanini aniqlang

// const word = `salom alekum bratim `
// let splitWord = word.split ('')
// let counter = 0 


// splitWord.forEach((words) => {
//   if(words == `a` || words == `A`){
//     counter++
//   }
// })
// console.log(counter);


// 8 mashq

// const types = [21.1,`Roziya`,`arrow`,[`I am  array`], null, true,245]
// const newTypes = []


// types.forEach((types)=>{
//   newTypes.push(typeof types)
// })
// console.log(newTypes);

// 9 mashq

// kiritilgan textni uzunligini aniqlang length dan foydalanmang

// const word = `salom alekum bratim`
// console.log(word.lastIndexOf(word.slice(-1))+1);

// 10 mashq

// const number = [1,2,3,4,5,7]
// let result = []

// number.forEach((num,i)=>{
//   result.push(num + 1)
// })

// console.log(result);

// 11 mashq tarkinidagi yigindsi

//  let counter = 0
//  for ( let  i = 0; i <= 10; i++){
//   counter +=i
 
//  }
//  console.log(counter);

// 12 mashq 

// let num = 9

// for(i = 1; i<=10;i++){
//  result =  num * i +1
// }
// console.log(result);

// 13 mashq
// let numbers = [1,2,3,4,5]
// let result = []

// const reverseFunc = (arr) => {
//   arr.forEach(num => {
//    result.push(num * -1)
//   })
// }
// reverseFunc(numbers)
// console.log(result);

// 14 mashq
//  const result = []
// const fizzBuzzFunc = function (number) {
//    for ( let i =1; i<=number; i++){
//     if(i % 3 == 0 && i % 5==0){
//       result.push(`FizzBuzz`)
//     }else if (i % 3 == 0){
//       result.push(`Fizz`)
//     }else if( i % 5 == 0 ){
//       result.push(`Buzz`)
//     }else {
//       result.push(i)
//     }
//    }
// }

// fizzBuzzFunc(30)
// console.log(result);

// 15 mashq

// const MuhammadrizaObj = {
//   name: `Muhammadrizo`,
//   lastName: `Pulatov`,
//   age: 19,
//   region: `Fergana`,
//   isMerried: false , 
//   job: `Programmer`,

//   haqida: function( ){
//     return `
//     Assalomu alekum, Mening ismim ${this.name}, Familyam ${this.lastName}. Yoshim ${this.age}da. ${this.region} fa yashayman. ${this.job} bo'lib faoliyat olib boraman. ${this.isMerried ? "Uylanganman" : "Hali uylanmaganman"}
//     `
//   }
// }