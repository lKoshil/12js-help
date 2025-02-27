//const fs = require('fs')
//console.log("НАчинаем читать файл")
//fs.readFile('file.txt', 'utf8', () => {
  //  console.log("Файл прочитан")
//})
//console.log("Исполнение остального кода")

//console.log('A') //синхронный код1
//setTimeout(() => console.log('B'), 0) //макро4
//Promise.resolve().then(() => console.log('C')) //микро3
//console.log('D') //синхронный код2

//console.log('начинаем исполнять код')
//function fethData(callback) {
  //  setTimeout(() => {
    //    callback({name: 'petya'})
    //}, 5000)
//}
//fethData((data) => {
  //  console.log('Данные -',data)
//})
//console.log('исполняем код дальше')

//function operation(callback) {
  //  setTimeout(() => {
    //    if (Math.random() > 0,1) {
      //      callback(new Error('зря ты програмист'), null)
        //} else {
          //  callback(null, {success: true})
        //}
    //}, 1000)
//}
//operation((err, res) => {
  //  if (err) {
    //    console.error('Мама тебе говорила -', err.message)
    //} else {
      //  console.log('успешный успех', res)
    //}
//})

