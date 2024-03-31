
import { useContext } from 'react'
import Contex from '../Details/Contex'
import { AiOutlineLike } from "react-icons/ai";
import { LiaCommentSolid } from "react-icons/lia";
import { FaShare } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Feed = () => {
  let { signupResponce, feed } = useContext(Contex)



  return (
    <div className="feed">
      {feed.length ? feed.map(item =>
        <article className='article' key={item.id}>
          <div className="box-1">
            <div className="profile-image">

            </div>
            <div className="box-2">
              <div className="name">
                {signupResponce.name}

              </div>
              <div className="date">
                {item.date}

              </div>
            </div>
          </div>
          {item.text && <div className="content">
            <p>{item.text}</p>

          </div>}
          



          <Link to={`${item.id}`}>
            {/* <div className="post-img">
             
            </div> */}
            {item.image && <img src={item.image} alt="Uploaded" />}
          </Link>

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