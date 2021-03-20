const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.end('Hola Mundo con express!')
});

app.listen(3000);
console.log('Server on port 3000');
