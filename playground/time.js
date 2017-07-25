// var date = new Date();
// console.log(date.getMonth());

const moment = require('moment');
// var date = moment();
// // date.add(1, 'years')
// console.log(date.format('LT'));
new Date().getTime();
var someTimesamp = moment().valueOf();
console.log(someTimesamp);
var createdAt= 1234;
var date = moment(createdAt);
console.log(date.format('h:mm a'));
