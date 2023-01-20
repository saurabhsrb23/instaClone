const express =require("express")

const router =express.Router()
const mongoose=require("mongoose")
const POST =mongoose.model("POST")


router.get('/allposts',(req,resp)=>{
    POST.find().sort({ createdAt: -1 }).then(posts=>resp.json(posts)).catch(err=>console.log(err))
})

router.post('/createPost',(req,res)=>{
    const { author,location,description ,image,dateAdded}=req.body
    if(!author ||!location||!description || !image){
        return res.status(422).json({error:"please fill all field"})
    }
    res.json("ok")

    const post =new POST({
        author,
        location,
        description,
        userImage :image,
        dateAdded
    })
    post.save().then((result)=>{
        return res.json({post:result})
    }).catch(err=>console.log(err))
})

module.exports=router