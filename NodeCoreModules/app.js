const http = require('http')
const Port = 3000
const server = http.createServer((req,res)=>{
    res.end('hello world')  
})

server.listen(Port,()=>{
    console.log('server is listening properly')
})









