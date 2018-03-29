'use strict';

const express = require('express');
const app = express();

app.get('/api*', (req, res) => {
    res.send('api route!');
});

app.listen(8000);

console.log('listening on 8000')
