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

//function fethData(url) {
  //return new Promise((resolve, reject) => {
    //setTimeout(() => {
      //if (Math.random() < 0.8) {
        //resolve({user: 'Peter'})
      //} else {
        //reject(new Error('invalid'))
      //}
    //}, 3000)
  //})
//}
//fetchDAta('http://google.com')
  //  .then((data) => console.log('Данные -', data))
    //.catch((err) => console.error('Ошибка -', err.message))
    //.finally(() => console.log('Конец операции'))

//fethData('url-1')
  //.then((data1) => {
    //console.log('запрос 1', data1)
    //return fethData('url-2')
  //})
  //.then((data2) => {
    //console.log('запрос 2', data2)
    //return fethData('url-3')
  //})
  //.then((data3) => console.log('запрос 3', data3))
  //.catch((err) => console.error('Ошибка -', err.message))

//Promise.all([fetchData("url-1"), fetchData("url-2"), fetchData("url-3")])
    //.then((res) => console.log('все данные:', res))
    //.catch((err) => console.error('Ошибка -', err.message))
            

