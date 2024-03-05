import express from "express"
const app = express()


app.get('/',(req,res)=>{
    res.send("hello satyajeet")
})

app.listen(5000,()=>{
    console.log("server started on port 5000")
})