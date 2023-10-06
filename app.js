const express=require("express");
const app=express();
const path = require('path');
const ejsMate = require('ejs-mate');
app.engine('ejs', ejsMate)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
const mongoose = require('mongoose')


const auth = require('./routes/auth')
app.use(auth);

mongoose.connect('mongodb://localhost:27017/majorproject')
    .then(()=>{
        console.log('database connected');
    })
    .catch(err=>{
        console.log(err);
    })
try {
    app.listen(3000, () => {
      console.log('serving on 3000')
    })
  } catch (error) {
    console.error(error)
  }
