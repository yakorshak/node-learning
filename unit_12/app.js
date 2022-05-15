const config = require('./config');
const randomInt = require('./rand');
const config2 = require('./config2');
const indexArray = require('./indexArray');
const index = require('./hash/index');

// parameter for the task 4
let a = [ 
    { id : 24, name : 'Test', age : 23},
    { id : 34, name : 'User', age : 33}
]; 

// index for the task 4
let b = 'name'; 

console.log(config); // task 1
console.log( randomInt(5, 10) ); // task 2
console.log(config2); // task 3
console.log( indexArray(a, b) ); // task 4
console.log( index(10) ); // task 5
