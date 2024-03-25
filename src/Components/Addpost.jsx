import React, { useContext } from 'react'
import Contex from '../Details/Contex'
import { format } from 'date-fns'

const Addpost = () => {
  let { signupResponce, setpostText, setpostimage, sumitpost } = useContext(Contex)
  let date = format(new Date(), "d-M-y-p")
  function imgconveter(e) {


    // setpostimage(URL.createObjectURL(e.target.files[0]))
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setpostimage(imageUrl);


    }}


    return (
      <form action="" className='addpost' onSubmit={sumitpost}>
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
            <label htmlFor="photo" className='photo'> add photo</label>
            <input type="file" onChange={imgconveter} id="photo" />
          </div>
          <button type="submit">Add post</button>

        </article>
      </form>
    )
  }

  export default Addpost