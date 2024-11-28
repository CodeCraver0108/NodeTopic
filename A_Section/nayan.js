const http = require ('http')
const PORT = 3006

const Server =http.createServer((req,res)=> {
    res.setHeader('context-Type','text/HTML')
    res.write(
        `<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>This h1</h1>
</body>
</html>`
    )
    res.end()
})
Server.listen(PORT,()=>{

    console.log(`Server is runnig on http://localhost:${PORT}`)
})