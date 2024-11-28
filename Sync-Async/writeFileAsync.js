const fs = require('fs');

fs.writeFile('example.txt', 'Hello, world!', (err) => {
    if (err) {
        console.error('Error writing file (async):', err);
        return;
    }
    console.log('Asynchronous write: File written successfully!');
});

console.log('This logs immediately, before the asynchronous file write completes.');
