require("dotenv").config();
const express = require("express")
const app = express()
const mysql = require("mysql")
const cors = require("cors")

app.use(express.json())
app.use(cors())

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});
app.get("/quiz",(req , res)=>{
    db.query("select * from games order by RAND()" , (err , result)=>{
        if(err){
            console.log(err)
        }else{
            res.send(result)
        }
    })
})

app.listen(3001, () => {
    console.log("server is running");
});
