const express=require('express')
const cors=require('cors')
const configureDB=require('./config/database')
const app=express()
const port=3095
app.listen(port,()=>{
    console.log('server is running on port',port)
})