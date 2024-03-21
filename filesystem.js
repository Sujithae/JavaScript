/*
const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname,'file.txt'),'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
}); 

fs.writeFile(path.join(__dirname,'file1.txt'),'hello prands nan ungal sujitha ', (err) => {
  if (err) throw err;
  console.log('write complete')
  fs.appendFile(path.join(__dirname,'file1.txt'),'\n\n ellarum epdi irukinga nandrii !! ', (err) => {
    if (err) throw err;
    console.log('append complete');
    fs.rename(path.join(__dirname,'file1.txt'),path.join(__dirname,'myfile.txt'), (err) => {
      if (err) throw err;
      console.log('rename complete');
  })
  })
});

process.on('uncaughtException', err =>{
  console.error(`there was an uncaught error:${err}`)
  process.exit(1)
})
*/
// using promises


const fsPromises=require('fs').promises;
const path = require('path');

const fileOps=async()=>{
  try{
   const data= await fsPromises.readFile(path.join(__dirname,'myfile.txt'),'utf8')
    console.log(data);
    await fsPromises.writeFile(path.join(__dirname,'file1.txt'),'hello prands nan ungal sujitha ')
    console.log('write complete')
    await  fsPromises.appendFile(path.join(__dirname,'file1.txt'),'\n\n ellarum epdi irukinga nandrii !! ')
      console.log('append complete');
      await fsPromises.rename(path.join(__dirname,'file1.txt'),path.join(__dirname,'file1.txt'))
        console.log('rename complete');
       // await  fsPromises.unlink(path.join(__dirname,'myfile.txt'),'utf8') //deleting the file
       
  }
  catch(err){
    console.error(err);
  }
}
fileOps();


