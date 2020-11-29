const express = require('express')
const router = express.Router()

//import the USER model
const userModel = require("../models/User")

//@method : POST
//@desc : add a new user 
//@path : http://localhost:5000/api/user
//@params : body
router.post("/", async (req, res) => {
    try {
        const newUser = new userModel({ ...req.body })
        const response = await newUser.save()
        res.send({ response: response, message: "user added succesfully" })
    } catch (error) {
        res.send(`can't add a new user ${error}`)
    }

})


//@method : GET 
//@desc : get all users 
//@path :  http://localhost:5000/api/user
//@params : 
router.get("/", async (req, res) => {
    try {
        const response = await userModel.find()
        res.send({ response: response, message: "all users displayed successfully" })
    } catch (error) {
        res.send(`can't display users :  ${error}`)
    }
})

//@method : GET 
//@desc : get user by id 
//@path : http://localhost:5000/api/user/:id
//@params : id
router.get("/:id", async (req, res) => {
    try {
        const response = await userModel.findById({ _id: req.params.id })
        res.send({ response: response, message: "user displayed successfully" })
    } catch (error) {
        res.send(`can't display users :  ${error}`)
    }
})


//@method : DELETE 
//@desc : delete user by id 
//@path : http://localhost:5000/api/user/:id
//@params : id
router.delete("/:id", async (req, res) => {
    try {
        const response = await userModel.deleteOne({ _id: req.params.id })
        if(response.n ==0){
            res.send({message:"user already deleted"})
            return
        }
        res.send({ response: response, message: "user deleted successfully" })
    } catch (error) {
        res.send(`can't delete users :  ${error}`)
    }
})

//@method : PUT 
//@desc : update user by id 
//@path : http://localhost:5000/api/user/:id
//@params : id, Body
router.put("/:id", async (req, res) => {
    try {
        const response = await userModel.updateOne({ _id: req.params.id },{$set:{...req.body}})
        if(response.nModified ==0){
            res.send({message:"user already updated"})
            return
        }
        res.send({ response: response, message: "user updated successfully" })
    } catch (error) {
        res.send(`can't update users :  ${error}`)
    }
})




module.exports = router