const bodyParser = require("body-parser");
const cors = require("cors");
const Sequelize=require('sequelize');
const express = require("express");
const app = express();
const shopRoutes=require('./routes/shopRoutes');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());


app.use('/',shopRoutes);


app.listen(3000,()=>{
    console.log("Server is listening on port 3000");
})
