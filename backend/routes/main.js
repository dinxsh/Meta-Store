const express = require("express")
const Router = express()

app.get("/", (req,res)=>{
    res.render("../frontend/")
})

module.exports = Router