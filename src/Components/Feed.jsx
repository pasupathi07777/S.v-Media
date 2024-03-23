import React from 'react'
import { useContext } from 'react'
import Contex from '../Details/Contex'
import { AiOutlineLike } from "react-icons/ai";
import { LiaCommentSolid } from "react-icons/lia";
import { FaShare } from "react-icons/fa";

const Feed = () => {
  let { items } = useContext(Contex)
  return (
    <div className="feed">
      {items.length ? items.map(item =>
        <article className='article' key={item.id}>
          <div className="box-1">
            <div className="profile-image">

            </div>
            <div className="box-2">
              <div className="name">
                {item.name}

              </div>
              <div className="date">
                {item.date}

              </div>
            </div>
          </div>
          <div className="content">
            <p>{item.content}</p>

          </div>
          <div className="post-img">
            <img src={item.image} alt="" />
          </div>
          <div className="btn-group">
            <button><AiOutlineLike />
            </button>
            <button><LiaCommentSolid /></button>
            <button><FaShare /></button>
          </div>
        </article>



      ) : <p>no post </p>}




    </div>
  )
}

export default Feed