let express=require("express");
let app=express();
let https=require("https");
let hbs=require("hbs");
let path=require("path");
app.set("view engine","hbs");
app.use(express.static(path.join(__dirname,"public")))
hbs.registerPartials(path.join(__dirname,"partials"));
app.get("/",(req,res)=>{
    res.render("main");
});
app.get("/songs",(req,res)=>{
    res.render("songs");
})
app.listen(5071);
console.log("Server is started at the port 5071...");