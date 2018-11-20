const express = require('express')

var app = express();


//REST server operations
app.get('/user', function(req, res) {
    res.json('Get user operation')
})

app.post('/user/:id', function(req, res) {
    let myBody = req.body;
    //res.json(`Post user operation with body:${myBody}`); //TypeError: Cannot convert object to primitive value
    if (myBody.name == undefined)
        res.status(400).json({
            ok: false,
            msg: 'need a name'
        })
    res.json({ myBody });
})

//requesting some user put operation
app.put('/user/:id', function(req, res) {
    let myId = req.params.id;
    res.json(`PUT user id:${myId} operation`);
})

app.delete('/user', function(req, res) {
    res.json('Delete user operation')
})

module.exports = app; //this will export app when using require('/user/user.js') from other file