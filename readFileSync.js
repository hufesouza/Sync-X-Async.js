const fs = require('fs');

console.log("Going to get the file");
const file = fs.readFileSync('readFileSync.js');
console.log("got the file");

console.log("App continues...");