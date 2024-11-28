const http = require('http')
const PORT = 4000
const server = http.createServer((req,res)=>{
        res.setHeader('Content-Type','text/html')
        if(req.url === '/'){
            res.write(`  <html>
                <head>
                    <title>Hi, I am Shivi💕</title>
                </head>
                <body>
                    <h1>Welcome to my server!</h1>
                </body>
            </html>`)
        
           return res.end()
        }
        else if(req.url ==='/Products'){
            res.write(`  <html>
                <head>
                    <title>Hi, I am Shivi💕</title>
                </head>
                <body>
                    <h1>Welcome to my Home!</h1>
                </body>
            </html>`)
        
            return res.end();
        }
        else if (req.url === '/form') {
            res.write(`
                <html>
                    <head>
                        <title>Form Page</title>
                    </head>
                    <body>
                        <h1>Fill out this form</h1>
                        <form action="/submit" method="POST">
                            <label for="name">Name:</label>
                            <input type="text" id="name" name="name" required><br><br>
                            
                            <label for="email">Email:</label>
                            <input type="email" id="email" name="email" required><br><br>
                            
                            <label for="message">Message:</label>
                            <textarea id="message" name="message" rows="4" cols="50" required></textarea><br><br>
                            
                            <button type="submit">Submit</button>
                        </form>
                    </body>
                </html>
            `);
            return res.end();
        } 
        else{
            res.write(`  <html>
                <head>
                    <title>Hi, I am Shivi💕</title>
                </head>
                <body>
                    <h1>Band Karo!</h1>
                </body>
            </html>`)
        
            return res.end();
        }
})

server.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`)
})