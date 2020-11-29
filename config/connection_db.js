const mongoose = require("mongoose")

const connection_db = async() => {
    try {
        await mongoose.connect(process.env.URI_DB,{useUnifiedTopology: true,useNewUrlParser: true,useCreateIndex:true})
        console.log("connected to database")
    } catch (error) {
        console.log(`can't connect to database ${error}`)
    }
}

module.exports = connection_db