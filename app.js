
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