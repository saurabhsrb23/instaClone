import React from 'react'
import './card.css'

const Card = ({ post }) => {
  return (
    <>
      <section className='card'>
        <section className='cardHeader'>
          <div>
            <div className='cardHeaderName'>{post.author}</div>
            <div className='cardPlace'>{post.location} </div>
          </div>
          <span>
            <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
          </span>
        </section>

        <section className='cardImage'>
          <img src={post.userImage} alt="user image" />
        </section>
        <section className='cardAction'>
          <span><i className="fa fa-heart-o" aria-hidden="true"></i></span>
          <span><i className="fa fa-paper-plane-o" aria-hidden="true"></i></span>
          <span>{post.dateAdded}</span>
        </section>
        <section className='likes'>10 </section>
        <section className='discription'>
          {post.description}
        </section> 
      </section>

      
    </>
  )
}

export default Card