const fs = require('fs');
const txt = fs.readFileSync('public/images/world-map.svg', 'utf8');
const paths = txt.match(/<path[^>]+>/g);
console.log('Total paths:', paths ? paths.length : 0);
console.log('Sample path 0:', paths[0]);
