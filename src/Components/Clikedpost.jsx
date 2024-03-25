import React, { useContext } from 'react'
import { useParams } from 'react-router'
import { AiOutlineLike } from "react-icons/ai";
import { LiaCommentSolid } from "react-icons/lia";
import { FaShare } from "react-icons/fa";
import Contex from '../Details/Contex';

const Clikedpost = () => {
  let { id } = useParams()
  console.log(typeof id)
  let { feed, signupResponce } = useContext(Contex)
  console.log(id)
  let post = feed.find(a => a.id === Number(id))
 
  return (
    <div className="clickpost">
      <article className='article'>
        <div className="box-1">
          <div className="profile-image">

          </div>
          <div className="box-2">
            <div className="name">
              {signupResponce.name}


            </div>
            <div className="date">
                {post.date}

              </div>
          </div>
        </div>
        <div className="box-3">
          <div className="content">
            <p>{post.text}</p>

          </div>



          <div className="post-img">


            <img src={post.image} alt="Uploaded" />

          </div>
        </div>

        <div className="btn-group">
          <button><AiOutlineLike />
          </button>
          <button><LiaCommentSolid /></button>
          <button><FaShare /></button>
        </div>
      </article>
    </div>
  )
}

export default Clikedpost