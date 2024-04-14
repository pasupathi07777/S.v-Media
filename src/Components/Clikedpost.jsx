import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { AiOutlineLike } from "react-icons/ai";
import { LiaCommentSolid } from "react-icons/lia";
import { FaShare } from "react-icons/fa";
import Contex from '../Details/Contex';
import { useHistory } from 'react-router-use-history';
import { Link } from 'react-router-dom';

const Clikedpost = () => {
  let { id } = useParams()
  let [deletebox, setdeletebox] = useState(false)
  let [editbox, seteditbox] = useState(false)
  console.log(typeof id)
  let { feed, setfeed, signupResponce, likebtn } = useContext(Contex)
  console.log(id)
  let post = feed.find(a => a.id === Number(id))

  // =-----------
  let [updatepost, setupdatepost] = useState(false)

  let ff = () => {
    post = feed.find(a => a.id === Number(id))
    setupdatepost(false)

  }

  updatepost === true && ff()



  useEffect(() => {

    setupdatepost(true)


  }, [feed])
  console.log(post)

  let editbtn = () => {
    seteditbox(prevState => !prevState)
    // seteditbox(!editbox)
  }

  let history = useHistory()



  let Edit = () => {

    history.push('editpost')

    seteditbox(prevState => !prevState)

  }
  let Delete = () => {

    setdeletebox(prevState => !prevState)
    seteditbox(prevState => !prevState)




  }

  let okdelete = (id) => {
    let ff = feed.filter(a => a.id !== Number(id))
    console.log(ff)
    setfeed(ff)

    localStorage.setItem('pasupathi_media_posts', JSON.stringify(ff))
    let dd = JSON.parse(localStorage.getItem('pasupathi_media_posts'))
    setfeed(dd)


    setdeletebox(prevState => !prevState)
    history.push('/')




  }

  let cancel = (id) => {
    setdeletebox(prevState => !prevState)



  }




  return (
    <div className="clickpost">
      <Link to={'/'}><div className="back-button">Back</div></Link>
      <article className='article clickpost-article'>
        <div className="box-1">
          <div className="profile-image">
            <img src={signupResponce.profileimage} alt="" srcset="" />

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

            <div className="dot" onClick={editbtn}></div>
            <div className="dot" onClick={editbtn} ></div>
            <div className="dot" onClick={editbtn} ></div>

            <div className="edit-optionbox" style={editbox === true ? { display: 'flex' } : {}}>
              <Link to={`/editpost/${id}`}><button type="submit" onClick={() => Edit(id)}>Edit</button></Link>
              <button type="submit" onClick={Delete}>Delete</button>

            </div>
          </div>
        </div>
        <div className="box-3 ">
          <div className="content">
            <p className='m-0'>{post.text}</p>


          </div>




          <div className="post-img">


            <img className='w-100' src={post.image} alt="Uploaded" />
            <div className="Delete-option" style={deletebox ? { display: 'flex' } : {}}>
              <div className="alert p-0 m-0">Delete Image</div>
              <div className="btngroup">
                <button type='sumit' onClick={() => cancel(id)}>Cancel</button>
                <button type='sumit' onClick={() => okdelete(id)}>Ok</button>
              </div>
            </div>





          </div>


        </div>

        <div className="btn-group">
          <button style={post.like === true ? { color: 'blue' } : {}} onClick={() => likebtn(Number(id))}><AiOutlineLike />
          </button>
          <button><LiaCommentSolid /></button>
          <button><FaShare /></button>
        </div>
      </article>
    </div>
  )
}

export default Clikedpost