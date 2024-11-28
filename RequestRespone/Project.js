const http = require('http')
const port = 4001

const server = http.createServer((req,res)=>{
        res.setHeader('Content-Type','text/html')
        res.write(`
             <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>This is Home Page</h1>
    <h2>Sunstone Eduversity</h2>
</body>
</html>
                    `)
        res.end()

})

server.listen(port,()=>{
    console.log(`server is listeing on http://localhost:${port}`)
})