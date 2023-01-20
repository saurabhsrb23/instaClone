
import React,{createContext,useState,useEffect} from 'react';
import {LoginContext} from "../../context/loginContext"
import Card from '../../card'


const Postview = () => {

  const [userlogin, setUserlogin] = useState(false)

  const [posts,setPosts]=useState([])
  useEffect(()=>{
    fetch("/allposts").then((res)=>res.json()).then((data)=>{
      setPosts(data)
    }).catch((err)=>{
      if(err){
        console.log(err)
      }
    })
  },[])
  return (

    <LoginContext.Provider value={setUserlogin}>

    <div className='postContainer'>
      {posts.map((post, index)=>{
        // console.log(post)
        return (
          <Card post={post} key={index}/>
          )
        })}
    </div>
        </LoginContext.Provider>
  )
}

export default Postview