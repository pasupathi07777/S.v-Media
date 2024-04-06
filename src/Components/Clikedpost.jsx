import React, { useContext, useEffect, useState } from 'react'
import {  useParams } from 'react-router'
import { AiOutlineLike } from "react-icons/ai";
import { LiaCommentSolid } from "react-icons/lia";
import { FaShare } from "react-icons/fa";
import Contex from '../Details/Contex';
import { useHistory } from 'react-router-use-history';
import { Link } from 'react-router-dom';

const Clikedpost = ({editbox,seteditbox}) => {
  let { id } = useParams()
  let [deletebox, setdeletebox] = useState(false)
  console.log(typeof id)
  let { feed,setfeed, signupResponce,likebtn} = useContext(Contex)
  console.log(id)
  let post = feed.find(a=>a.id===Number(id))

  let tt=()=>{
    post=feed.find(a=>a.id===Number(id))


  }

  useEffect(()=>{
    // post=feed.find(a=>a.id===Number(id))
    tt()

  },[feed])
  console.log(post)

  let editbtn=()=>{
    seteditbox(prevState => !prevState)
  }

  let history=useHistory()



  let Edit=()=>{
    // console.log(id)
    // let Responce =JSON.parse(localStorage.getItem('pasupathi_media_posts'))
    // Responce.map(a=>{

    // })
    // console.log(id)
    history.push('editpost')
    // setdeletebox(false)
    seteditbox(prevState => !prevState)
    
  }
  let Delete=()=>{
    
    setdeletebox(prevState=>!prevState)
    seteditbox(prevState => !prevState)

  

    
  }

  let okdelete=(id)=>{
    let ff=feed.filter(a=>a.id!==Number(id))
    console.log(ff)
    setfeed(ff)

    localStorage.setItem('pasupathi_media_posts', JSON.stringify(ff))
    let dd=JSON.parse(localStorage.getItem('pasupathi_media_posts'))
    setfeed(dd)
 

    setdeletebox(prevState=>!prevState)
    history.push('/')

   


  }

  let cancel=(id)=>{
    setdeletebox(prevState=>!prevState)
   


  }
  

  

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
          <div className="edit-box">
            
            <div className="dot"   onClick={editbtn}></div>
            <div className="dot"   onClick={editbtn} ></div>
            <div className="dot"   onClick={editbtn} ></div>

            <div className="edit-optionbox" style={editbox===true ? { display: 'flex' } : {}}>
              <Link to={`/editpost/${id}`}><button type="submit" onClick={()=>Edit(id)}>Edit</button></Link>
              <button type="submit" onClick={Delete}>Delete</button>

            </div>
          </div>
        </div>
        <div className="box-3">
          <div className="content">
            <p>{post.text}</p>

          </div>



          <div className="post-img">
            <img src={post.image} alt="Uploaded" />
            <div className="Delete-option" style={deletebox ?{display:'flex'}:{}}>
              <div className="alert p-0 m-0">Delete Image</div>
              <div className="btngroup">
                <button type='sumit' onClick={()=>cancel(id)}>Cancel</button>
                <button type='sumit' onClick={()=>okdelete(id)}>Ok</button>
              </div>
            </div>





          </div>


        </div>

        <div className="btn-group">
          <button style={post.like==true ?{color:'blue'}:{}} onClick={()=>likebtn(Number(id))}><AiOutlineLike />
          </button>
          <button><LiaCommentSolid /></button>
          <button><FaShare /></button>
        </div>
      </article>
    </div>
  )
}

export default Clikedpost