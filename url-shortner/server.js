const express = require('express')
const app= express();
const makeid=require("./utils/uniqueidgenerator");
const { json } = require('body-parser');

//crud 

/*create->longURL => shortURL;req
get ->shortURL => longURL;
delet ->shortURL;*/
var database={
   // <key>:<value>
}
app.use(express,json());
app.post("/create-short-url",(req,res,next)=>{
       //create
       let longUrl =req.body.longUrl;
       //character generator
      // Math.random()*100
      let id=makeid(10);
      database[id]=longUrl;
      res.send({
        domain:"localhost",
        port:9090,
        shortUrl:id
      });

})

app.get("/get-long-url",(req,res,next)=>{ 
       //get
    const shortUrl=req.query.shortUrl;
    if(shortUrl){
        if(database[shortUrl]){
            return res.send({
                longUrl:databse[shortUrl]

            });
           
        }else{
            res.send("Id not valid");
        }
    }
});
app.delete("/delete-short-url",(req,res,next)=>{  

    const shortUrl=req.body.shortUrl;
    delete database[shortUrl];
    res.send("Deleted Sucessfully")


})




app.listen(9090,()=>console.log("on port 9090"))