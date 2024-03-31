import React, { useState } from 'react'
import { FaHome } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import {Link, Outlet} from 'react-router-dom'
import { FaRegPlusSquare } from "react-icons/fa";
import { PiVideoFill } from "react-icons/pi";
import { useContext } from 'react';
import Contex from '../Details/Contex';
import { useHistory } from 'react-router-use-history';
import { IoIosNotifications } from "react-icons/io";
<div className="notify-icon">

</div>

const Footer = () => {
 
  let {addbtn,setaddbtn,Login}=useContext(Contex)
  let His_rout=useHistory()
  
  let footerSumit=()=>{
    setaddbtn(addbtn===false?true:false)
    console.log(Login )
    
  }
  function Home(){
    His_rout.push('/')
    setaddbtn(false)

  }
  function search(){
    His_rout.push('search')
    setaddbtn(false)
  }
  
  function video(){
    His_rout.push('video')
    setaddbtn(false)
  }
  function profile(){
    His_rout.push('profile')
    setaddbtn(false)
  }
  return (
    <>
    {Login==true && <footer>
        {/* <Link to={'/'}><FaHome /></Link> */}
        <div className="a" onClick={(e)=>{Home(); setaddbtn(false);}}><FaHome /></div>
        <div className="a" onClick={(e)=>{search(); setaddbtn(false);}}><FaSearch /></div>
        {/* <Link to={'search'}><FaSearch /></Link> */}
      
        <p  onClick={footerSumit}><FaRegPlusSquare /></p>
        {/* <div className="a" ><FaSearch /></div> */}
        <div className="a"   onClick={(e)=>{video(); setaddbtn(false);}}><IoIosNotifications /></div>
        <div className="a"  onClick={(e)=>{profile(); setaddbtn(false);}}> <div className="icon-profile"></div></div>
        

        {/* <Link to={'video'}><PiVideoFill /></Link>
        <Link to={'profile'}> <div className="icon-profile"></div></Link> */}
        <Outlet/>
       
    </footer>}</>
  )
}

export default Footer