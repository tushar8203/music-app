let express=require("express");
let app=express();
let player=require("play-sound")(opts={});
let hbs=require("hbs");
let path=require("path");
app.set("view engine","hbs");
app.use(express.static(path.join(__dirname,"public")));
app.get("/",(req,res)=>{
    // player.play('./pirates.mpeg',(function(err){
    //     if(err){
    //         console.log(err);
    //     }
    //     else{
    //         console.log("music is playing");
    //     }
    // }));
    res.render("demo");
});
app.listen(5072);
console.log("Server is started at the port 5072...");