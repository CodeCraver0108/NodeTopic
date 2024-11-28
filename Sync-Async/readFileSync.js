const fs = require('fs');

try {
    const data = fs.readFileSync('example.txt', 'utf-8'); // Blocking
    console.log('Synchronous read:', data);
} catch (err) {
    console.error('Error reading file (sync):', err);
}

console.log('This logs after the synchronous file read.');
