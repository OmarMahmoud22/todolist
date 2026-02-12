const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    isConected:{
        type:Boolean,
        default:false
    }
},{timestamps:true})


const task = mongoose.model('Task',TaskSchema)
module.exports = task