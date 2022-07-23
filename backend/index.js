const express = require("express")
const path = require("path")
const app = express()

app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

// routes
const MainRouter = require("../backend/routes/main")

app.use("/", MainRouter)

app.use(express.static(path.join(__dirname)));
app.use(express.static('../frontend/'));

app.listen(8080, ()=> console.log("server started"))