const fs = require('fs');

const onFileLoad = function(err, file) {
console.log("Going to get the file");
};

fs.readFile('readFileSync.js', onFileLoad);
    console.log("Got the file");

console.log("App continues...");