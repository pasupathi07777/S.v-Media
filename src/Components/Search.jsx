import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import Contex from '../Details/Contex'



const Search = () => {
  let {feed,signupResponce}=useContext(Contex)
  let [searchinput,setsearchinput]=useState("")
  let ob=feed.filter(a=>a.text.includes(searchinput) )
  console.log()
  return (
    <div className="search">
   
      <div className="input">
      <input type="text" onChange={(e)=>setsearchinput(e.target.value)} placeholder='Search' />
      </div>
      <div className="feed">  
      {ob.length ? ob.map(item =>
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
          <div className="content">
            <p>{item.text}</p>

          </div>
        
          
          
          <Link to={`${item.id}`}> <div className="post-img">
            
           
          {item.image && <img src={item.image}  alt="Uploaded" />}
          </div></Link>
         
          {/* <div className="btn-group">
            <button><AiOutlineLike />
            </button>
            <button><LiaCommentSolid /></button>
            <button><FaShare /></button>
          </div> */}
        </article>



      ) : <p>no post </p>}




    </div>
    {/* <Footer/> */}
      
    </div>
  )
}

export default Search