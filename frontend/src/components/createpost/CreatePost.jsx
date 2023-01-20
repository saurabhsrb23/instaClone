import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import "./createpost.css"
import moment from 'moment'

const CreatePost = () => {

  const navigate =useNavigate()

  const [allData, setAllData] = useState({
    author: '',
    location: '',
    description: '',
  })
  const [image, setimage] = useState("")

  const [dataURL, setDataURL] = useState("")

  const [date, setdate] = useState(moment().format('LL'))


  const changeValueHandler = e => {
    setAllData({ ...allData, [e.target.name]: e.target.value })
  }



  useEffect(() => {
    //saveing to mongodb
    if(dataURL){
      fetch("/createPost", {//http://localhost:4000/createPost
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          author: allData.author,
          location:allData.location,
          description:allData.description,
          image:dataURL,
          dateAdded:date

        })
      }).then(res => res.json()).then(data =>{
        if(data.error){}
        else{
          console.log(data)
          navigate('/content')
        }} ).catch(err => console.log(err))
    }
    }, [dataURL])
  

  // post image to cloudinary

  const postDetails = () => {


// console.log('\n')
// console.log(image,allData.author,allData.location,allData.description,)
// console.log('\n')
    //ceate data for fecting
    const data = new FormData();
    data.append("file", image)

    //append from server 
    data.append("upload_preset", "instaclone")
    data.append("cloud_name", "saurabhajn")

    //url for fecting the data from cloudinary server
    fetch("https://api.cloudinary.com/v1_1/saurabhajn/image/upload", {
      method: "post",
      body: data
    })
      .then(res => res.json())
      //send url to contant
      .then(data => setDataURL(data.url))
      .catch(err => console.log(err))

      console.log(dataURL)

   
  }

  const loadFile = (event) => {
    const output = document.getElementById('output');
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = () => {
      URL.revokeObjectURL(output.src) // free memory
    }

  }



  return (

    <>

      <div className='createPost'>
        <h3 className='createHeader'>Create a new post</h3>
        {/* <h1>{date}</h1> */}
        <section>
          <img id='output' src='https://customercare.igloosoftware.com/.api2/api/v1/communities/10068556/previews/thumbnails/4fc20722-5368-e911-80d5-b82a72db46f2?width=680&height=680&crop=False' alt='upload img' />
          <input type="file" accept='image/*' onChange={(event) => {
            loadFile(event);
            setimage(event.target.files[0])
          }} />
        </section>
        <section className='auth-location'>
          <input name='author' onChange={changeValueHandler} placeholder='Author' className='author' type="text" />
          <input name='location' onChange={changeValueHandler} placeholder='Location' className='location' type="text" />
        </section>
        <section className='auth-location' >
          <input name='description' onChange={changeValueHandler} placeholder='Description' className='description' type="text" />
        </section>
        <section className='sub-btn'>
          <button  onClick={() => { postDetails() }} type='submit ' >Post</button>

        </section>
      </div>
    </>
  )
}

export default CreatePost