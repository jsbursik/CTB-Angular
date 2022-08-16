const express = require('express');
const path = require('path');
const app = express();

const port = 80;

app.use('/', express.static(path.join(__dirname, 'dist/car-truck-buyer')));

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});