const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.end('<h1>Hola Mundo con express!</h1>')
});

app.listen(3000);
console.log('Server on port 3000');
