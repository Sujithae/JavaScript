var fs = require('fs');
var path = require('path');
var rs = fs.createReadStream(path.join(__dirname,'read.txt'),{encoding:'utf8'});
var ws = fs.createWriteStream(path.join(__dirname,'bigread.txt'));

rs.on('data',(dataChunk)=> {
   ws.write(dataChunk);
});

 // rs.pipe(ws);

 