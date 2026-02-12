require('dotenv').config()
// console.log('ENV TEST =>', process.env.MONGODB_URI)
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Task = require('./models/task')
app.use(express.json())


const port = process.env.PORT || 3000


async function main(){
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('conected')

    }
    catch(error){
        
        console.log(error)
    }
    
}
main()


app.post('/api/tasks' , async(req,res)=>{
    try{
        const task = await Task.create(req.body)
        res.status(201).json({
            msg:"created",
            data:task
        })
    }
    catch(error){
        console.log(error)
        res.status(500).json({
            msg:"server error"
        })

    }
})

app.get('/api/tasks' , async(req,res)=>{
    try{
const task = await Task.find()
res.status(201).json({
    msg:"get",
    data:task
})
    }
    catch(error){
        console.log(error)
        res.status(500).json({
            msg:"cant get"
        })
    }
    

})


app.listen(port,()=>{
    console.log(`listend to ${port}`)
})
