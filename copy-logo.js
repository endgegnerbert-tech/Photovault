const fs = require('fs');
const path = require('path');

const source = path.join(__dirname, 'SaecretHeavenLogo.svg');
const dest = path.join(__dirname, 'public', 'logo.svg');

try {
    fs.copyFileSync(source, dest);
    console.log('Logo copied successfully to ' + dest);
} catch (err) {
    console.error('Error copying logo:', err);
    process.exit(1);
}
