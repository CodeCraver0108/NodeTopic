const fs = require('fs');

fs.readFile('example.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error('Error reading file (async):', err);
        return;
    }//Non-Blocking
    console.log('Asynchronous read:', data);
});

console.log('This logs immediately, before the asynchronous file read completes.');
