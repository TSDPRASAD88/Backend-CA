const express=require("express");
const app=express();
app.use(express.json());


app.post("/sendingData",(req,res)=>{
    try {
        const {email,password}=req.body;
        if(!email || !password){
            return res.status(400).send({msg:"All fields are required and cannot be empty"});
        }

        const newArray=[];
        newArray.push({
            email,
            password
        })
        console.log(newArray);
        return res.status(200).send({msg:"data sended successfully"});
      
    } catch (error) {
        return res.status(500).send({msg:"Something went wrong"});
    }
})

app.get("/data",(req,res)=>{
    try {
        return res.status(200).send({msg:"successfully getting data",newArray})
    } catch (error) {
        return res.status(500).send({msg:"Something went wrong"});
    }
})

app.listen(5000,()=>{
    console.log("server connected successfully");
})