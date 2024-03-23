import React, { useContext } from 'react'
import { FaImages } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import {Link} from 'react-router-dom'
import Contex from '../Details/Contex';

const Popbtn = () => {
    let {addbtn}=useContext(Contex)
  return (
    <main className='popep-btn' style={addbtn===true? {bottom:40}:{}}>
        {/* <h2>Create</h2>  */}
        {/* <div className="btn-group">
       
        </div> */}
         <Link to={'addpost'}><button type="submit"><FaImages/> </button> Post</Link>
        <Link to={'addstatus'}> <button type="submit"><FaBookOpen /> </button> Story</Link>
        <Link to={'addvideo'}><button type="submit"><FaVideo /> </button> Video</Link>
       
       
       
       

    </main>
  )
}

export default Popbtn