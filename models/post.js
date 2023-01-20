const mongoose =require('mongoose')
const {ObjectId}= mongoose.Schema.Types
const postSchema = new mongoose.Schema({

    author:{
        type:String,
        required: true
    },
    location:{
        type:String,
        required: true
    },
    description:{
        type:String,
        required: true
    },
    userImage:{
        type:String,
        require:true
    },
    dateAdded : { 
        type : String,
        require:true
     }
    // postedBy:{
    //     type :ObjectId,
    //     ref:USER
    // }

},{timestamps:true})
mongoose.model('POST',postSchema)