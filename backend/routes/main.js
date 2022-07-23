const express = require("express")
const Router = express()

Router.get("/", (req,res)=>{
    res.render("../frontend/")
})

module.exports = Router