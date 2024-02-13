require('dotenv').config()

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/twitter', (req, res) => {
    res.send('realinit');
});

app.get('/krsna', (req, res) => {
    res.send('dis dat dollar sign shit');
})

app.get('/instagram', (req, res) => {
    res.send('realkrsna fanpage');
});

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`);
});