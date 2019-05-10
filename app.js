const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const router=express.Router();
const login= require('./login/controller/login');
const db=require('./db_connection/db');
const cors = require('cors')
const dashboard= require('./dashboard/controller/dashboard');

app.use(bodyparser.urlencoded({ extended: false }))
app.use(cors())
app.use(bodyparser.json());

db();

app.use("/api", router);
login(router);
dashboard(router);

app.get('*', (req, res) => {
    res.send("angularjs");
    
});

app.listen(process.env.PORT||3000, () => {
    console.log("server started");
});