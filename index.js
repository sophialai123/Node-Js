//File system: https://nodejs.org/dist/latest-v17.x/docs/api/fs.html

const fs = require('fs');

//copy file1 into file2
fs.copyFileSync("file1.txt","file2.txt");





// use externerl node packages called : superheroes
const superheroes = require('superheroes');


//Generate a random superheroe name
var mysuperName = superheroes.random();
console.log(mysuperName);


//supervillains package
const supervillains = require('supervillains');

var all_names = supervillains.all;
//console.log(all_names);

var randomeName = supervillains.random()
console.log(randomeName);
