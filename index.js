const express = require('express')
const app =express()
app.get('/',(req,res)=>res.json({message:'Hello World'}))
app.listen(process.env.PORT || 3000,()=>{
    console.log("server is running")
})