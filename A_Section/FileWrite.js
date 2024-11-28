const fs = require('fs');

fs.writeFile('BSection.txt', 'Hello, Node.js!', (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('File has been written');

});