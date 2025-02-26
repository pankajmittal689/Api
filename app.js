const express = require('express');
const app = express();
const list = require('./Basic/student');

app.get('/', (req,res) => {
    res.send({
        message : "Hello Express Js",
        status : 200
    })
})

app.get('/list', (req,res) => {
    res.send({
        message : list,
        status : 200
    })
})

app.post('/postItem', (req,res) => {
    res.send({
        message : req.body,
        status : 200,
    })
    console.log(req.body);
})

app.listen(3000, () => {
    console.log("Port Started At 3000");
});