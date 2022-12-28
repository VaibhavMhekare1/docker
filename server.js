const express = require("express")
const app = express();
const path=require("path")
app.use(express.static(path.join("./public")))
app.use("/",(req,resp)=>{
    resp.sendFile("./public/index.html",{root:__dirname})
})
app.listen(8080,()=>{
    console.log("server started at port 8080")
})