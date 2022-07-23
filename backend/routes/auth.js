const express = require("express")
const Router = express()

Router.get("/register", (req,res)=>{
    res.json({status:200, info:"registered acc", registeredwith:"google"})
})

Router.get("/login", (req,res)=>{
    res.json({status:200, info:"logged in acc", logwith:"google"})
})

Router.get("/forgotpassword", (req,res)=>{
    res.json({status:200, info:"changed password"})
})

// Temp data filled in

module.exports = Router