const http = require('http')
const PORT = 3000

const Server = http.createServer((req,res)=>{
    res.end('hello world')
})

Server.listen(PORT,()=>{
        console.log(`Server is running on http://localhost:${PORT}`)
})

