const express=require("express")
require('dotenv').config()
const connect_db = require("./config/connection_db")

const app = express()

//body parser
app.use(express.json())
//connect to database
connect_db()

//Router 
//User Router
app.use('/api/user',require("./routes/user"))


//configure PORT 
app.listen(process.env.PORT,(error)=>{
    if(error){
        console.log(`There is an Error ${error}`)
    }else {
        console.log("server is running")
    }
})