const fs = require('fs');

try {
    fs.writeFileSync('example1.txt', 'Hello, world!'); 
    console.log('Synchronous write: File written successfully!');
} catch (err) {
    console.error('Error writing file (sync):', err);
}

console.log('This logs after the synchronous file write.');
