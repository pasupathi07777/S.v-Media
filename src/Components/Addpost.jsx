import React, { useContext } from 'react'
import Contex from '../Details/Contex'
import { format } from 'date-fns'
import { Link } from 'react-router-dom'

const Addpost = () => {
  let { signupResponce, setpostText, postimage, setpostimage, sumitpost } = useContext(Contex)
  let date = format(new Date(), "d-M-y-p")
  console.log(postimage)
  function imgconveter(e) {


    // setpostimage(URL.createObjectURL(e.target.files[0]))
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setpostimage(imageUrl);
      // setpostimage("")


    }
  }


  return (
    <form action="" className='addpost ' onSubmit={sumitpost}>
       <Link to={'/'}><div className="back-button">Back</div></Link>
      <article className=' article article-2 ' >
        <div className="article-box-1">
          <div className="profile-image">
            {/* <img src="" alt="" /> */}

          </div>
          <div className="box-2">
            <div className="name">{signupResponce.name}


            </div>
            <div className="date">
              {date}



            </div>
          </div>
        </div>

        <textarea name="" id="post-content" onChange={(e) => setpostText(e.target.value)} placeholder='What On Your Mind?'></textarea>
        <div className="post-img">


          <label htmlFor="photo" className='photo w-100 h-100'>{postimage !== "" ? <img src={postimage} alt="" /> : "Add Post"}</label>
          <input type="file" onChange={imgconveter} id="photo" />
        </div>
        <button type="submit">Share</button>

      </article>
    </form>
  )
}

export default Addpost