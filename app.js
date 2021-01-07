require('./config/config')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()     

app.use(cors())



app.use(bodyParser.urlencoded({ extended: false }))// parse application/x-www-form-urlencoded
app.use(bodyParser.json())


require('./database/config'); // IMPORT MONGODB                             


//=====================================
// IMPORTS ROUTES                          
//=====================================

const userRoutes = require('./routes/user')

app.use('/api', userRoutes)


//FileSysten Images
var serveIndex = require('serve-index');
app.use(express.static(__dirname + '/'))
app.use('/uploads', serveIndex(__dirname + '/uploads'));

//=====================================
// SERVER LISTEN                         
//=====================================

app.listen(process.env.PORT, () => {
    console.log(`'Express server port: ${process.env.PORT} \x1b[32m%s\x1b[0m', 'online'`);
});

module.exports = app;          




