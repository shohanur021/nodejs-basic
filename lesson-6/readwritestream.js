const fs = require('fs');

const myReadStream = fs.createReadStream(__dirname+"/bigdata.txt");
const myWriteStream = fs.createWriteStream(__dirname+"/output.txt");

myReadStream.on('data', (chunk) => {
    myWriteStream.write(chunk);
});

// or
// myReadStream.pipe(myWriteStream)