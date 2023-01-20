const express =require('express')
const app=express()
const cors=require('cors')
const path=require('path')
const port =process.env.port || 4770;

const mongoose=require('mongoose')
const mongoURL=require('./keys')
require('./models/model')
require('./models/post')
app.use(cors())
app.use(express.json())

// app.use(require('./auth/auth'))
app.use(require('./routes/createpost')) 

mongoose.connect(mongoURL)

mongoose.connection.on("connected",()=>console.log("sucessful conneted to mongo"))
mongoose.connection.on("error",()=>console.log("error occure in conneted to mongo"))

//fortned  served
app.use(express.static(path.join(__dirname,"./frontend/build"))) 

app.get("*",(req,resp)=>{
    resp.sendFile(
        path.join(__dirname,"./frontend/build/index.html"),
        (err)=>{
            resp.status(500).send(err)
        }
    )
})


app.listen(port,()=>console.log(`server running  ${port}`))

// {
//     "scripts": {
//       "dev": "nodemon app.js"
//     },
//     "dependencies": {
//       "cors": "^2.8.5",
//       "express": "^4.18.2",
//       "jsonwebtoken": "^9.0.0",
//       "mongoose": "^6.8.4",
//       "node": "^19.4.0",
//       "nodemon": "^2.0.20"
//     }
//   }