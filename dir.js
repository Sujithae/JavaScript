const fs=require('fs');
// to create directory
/*
if(!fs.existsSync('./new')){
    fs.mkdir('./new',(err)=>{
        if(err) throw err;
        console.log('Directory created');

    })
    */
   //to delete directory
    if(fs.existsSync('./new')){
        fs.rmdir('./new',(err)=>{
            if(err) throw err;
            console.log('Directory deleted');
        })
        


}
process.on('uncaughtException', err =>{
    console.error(`there was an uncaught error:${err}`)
    process.exit(1)
  })