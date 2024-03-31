import React, { useContext, useEffect, useState } from 'react'
import { FaImages } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";

import Contex from '../Details/Contex';
import { useHistory } from 'react-router-use-history';


const Popbtn = () => {
  let { addbtn, setaddbtn,fun2,statuspost,urlconvert } = useContext(Contex)
  
  let Root = useHistory()
  let fun1 = () => {
    
    Root.push('addpost')


  }
  
  useEffect(()=>{
    fun2()

  },[statuspost])
 
  // let fun3 = () => {
  //   Root.push('addvideo')

  // }
  return (
    <main className='popep-btn' style={addbtn === true ? { bottom: 50 } : {}}>

      <div className="btn"><button type="submit" onClick={(e) =>  { fun1() ; setaddbtn(false); }}><FaImages /></button> Post</div>
      <div className="btn"><button type="submit" onClick={(e) =>  {  fun2(); setaddbtn(false); }}>
      <label htmlFor="status-post"><FaBookOpen /></label>
      <input type="file" name="" onChange={(e)=>{urlconvert(e.target.files)}} id="status-post" />
       </button> Status</div>
      {/* <div className="btn"><button type="submit" onClick={(e) =>  { fun3() ; setaddbtn(false); }}><FaVideo /> </button> Video</div> */}





    </main>
  )
}

export default Popbtn