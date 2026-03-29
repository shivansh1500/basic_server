const express = require("express") ;
const app = express() ;
const Path = require("path")

app.set("view engine", "ejs");
app.set("views" , Path.join(__dirname , "views")
) ;
app.use(express.json());

app.get("/get" , (req , res)=>{
 res.render("get");
})

app.get("/post" , (req , res)=>{
 
 res.render("post");
})

app.listen(8080) ;