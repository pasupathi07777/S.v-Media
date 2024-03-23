import React, { useContext } from 'react'
import Contex from '../Details/Contex'
import {format} from 'date-fns'

const Addpost = () => {
  let {signupResponce}=useContext(Contex)
  let date=format(new Date(),"d/M/Y/p")
 
  return (
    <div className="addpost">
     
     <article className=' article article-2' >
          <div className="article-box-1">
            <div className="profile-image">
              <img src="" alt="" />

            </div>
            <div className="box-2">
              <div className="name">{signupResponce.name}
                

              </div>
              <div className="date">
                {date}
              
               

              </div>
            </div>
          </div>
          <input type="text" id='post-content' placeholder='What On Your Mind?' />
          <div className="post-img">
            <label htmlFor="photo" className='photo'> add photo</label>
            <input type="file" name="" accept='/image' id="photo" />
          </div>
         
        </article>
     

    </div>
  )
}

export default Addpost