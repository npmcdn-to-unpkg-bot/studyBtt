/**
 * Created by Truong on 04-Apr-16.
 */
var moment = require('moment');
var now = moment();

console.log(now.format('YYYY/MM/DD, HH:mm:ss'));
now.subtract(1, 'year');
console.log(now.format('YYYY/MM/DD, HH:mm:ss'));

var timestamp = 1444247486704;
var timestampMoment = moment.utc(timestamp);

console.log(timestampMoment.format('YYYY/MM/DD, HH:mm:ss'));