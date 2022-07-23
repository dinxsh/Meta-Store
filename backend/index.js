const express = require("express")
const app = express()

app.get("/", (req,res)=>{
    res.render("../frontend/")
})

app.listen(8080, ()=> console.log("server started"))