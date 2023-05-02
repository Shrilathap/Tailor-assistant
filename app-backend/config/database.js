const mongoose=require('mongoose')

const configureDB=()=>{
    mongoose.connect('mongodb://localhost:27017/Tailor-assistant')
    .then(()=>{
        console.log('connected to DB')
    })
    .catch((err)=>{
        console.log(err)
    })
}

module.exports=configureDB