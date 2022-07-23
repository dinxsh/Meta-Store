const express = require("express")
const Router = express()

Router.get("/wishlist", (req,res)=>{
    res.json({wishlist:10, price:375})
})

Router.get("/vieworders", (req,res)=>{
    res.json({wishlist:10})
})

Router.get("/order", (req,res)=>{
    res.json({ordered:True, items:"10"})
})

Router.get("/vieworders", (req,res)=>{
    res.json({orders:10})
})

// Temp data filled in

module.exports = Router