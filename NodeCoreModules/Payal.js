const fs = require("fs");
// fs.writeFile('example.txt' , 'Hello , Node', (err)=>{
//     if (err){
//         console.error(err);
//         return ;
//     }

//     console.log("File has been written successfully");
// });

fs.readFile('example.txt'  ,(err , data)=>{
    if(err){
        console.error(err);
        return;
    }
    console.log(data);
});