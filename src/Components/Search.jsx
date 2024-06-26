import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import Contex from '../Details/Contex'



const Search = () => {
  let { feed, signupResponce } = useContext(Contex)
  let [searchinput, setsearchinput] = useState("")
  let ob = feed.filter(a => a.text.includes(searchinput))
 
  return (
    <div className="search  ">

      <div className="input ">
        <input type="text" onChange={(e) => setsearchinput(e.target.value)} placeholder='Search' />
      </div>
      <div className='feed flex-row justify-content-start align-items-start' >
        {ob.length ? ob.map(item =>
          <article className='article feed-box    ' key={item.id} >
            <div className="box-1">
              <div className="profile-image">
                <img src={signupResponce.profileimage} alt="" srcset="" />

              </div>
              <div className="box-2">
                <div className="name text-start">
                  {signupResponce.name}

                </div>
                <div className="date">
                  {item.date}

                </div>
              </div>
            </div>
            



          <Link to={`${item.id}`} >
              <div className="post-img secrch-post-img  ">


                {item.image && <img className='w-100' src={item.image} alt="Uploaded" />}
              </div>
            </Link>


          </article>



        ) : <p className='text-center mt-5 '>no post </p>}




      </div>


    </div>
  )
}

export default Search