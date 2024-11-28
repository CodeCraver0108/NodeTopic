const fs = require('fs');

fs.writeFile('example1.txt', 'Hello, Node.js!', (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('File has been written');

});

// fs.readFile('BCA.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log(data);
// });

