var os = require('os'); 
var freemem = os.freemem(); 
console.log(freemem);

var colors = require('colors'); 
console.log('hello en vert'.green); 
console.log('hello en rouge'.bold.red);
console.log('hello en reverse'.inverse); 
console.log('Hello Arc en Ciel!'.rainbow);