import React, { useState } from 'react'
import { FaHome } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import {Link} from 'react-router-dom'
import { FaRegPlusSquare } from "react-icons/fa";
import { PiVideoFill } from "react-icons/pi";
import { useContext } from 'react';
import Contex from '../Details/Contex';

const Footer = () => {
  let {addbtn,setaddbtn}=useContext(Contex)
  let footerSumit=()=>{
    setaddbtn(addbtn===false?true:false)
    
  }
  return (
    <footer>
        <Link to={'home'}><FaHome /></Link>
        <Link to={'search'}><FaSearch /></Link>
        {/* <Link to={'addpost'}><FaRegPlusSquare /></Link> */}
        <button type="submit" onClick={footerSumit}><FaRegPlusSquare /></button>
        <Link to={'video'}><PiVideoFill /></Link>
        <Link to={'profile'}> <div className="icon-profile"></div></Link>
       
    </footer>
  )
}

export default Footer