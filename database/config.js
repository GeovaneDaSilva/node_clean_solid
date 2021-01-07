const express = require("express")

const mongoose = require('mongoose');


var app = express();



mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true },
(res) => {
    try {
        console.log('Base de datos  puerto 27017: \x1b[32m%s\x1b[0m', 'online');
    } catch (error) {
        res.status(500).json({
            ok: false,
            message:' erros to connect database'
        })
    } 
    });




    module.exports = app;

