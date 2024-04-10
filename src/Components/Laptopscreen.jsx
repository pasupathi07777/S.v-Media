import React, { useContext } from 'react'
import Contex from '../Details/Contex'
import { Link } from 'react-router-dom'

import { FaHome } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";



import { FaImages } from "react-icons/fa";

import { FaBookOpen } from "react-icons/fa";

import { IoMdContact } from "react-icons/io";


const Laptopscreen = () => {
    let { Login } = useContext(Contex)
    return (
       <>
        { Login===true  &&
            <div className="navbar d-none d-sm-block  ">
                <h2 className=' '>S.v Media</h2>
    
                <nav className=''>
                    {/* <h2 className='pt-5 '>S.v Media</h2> */}
    
                    <Link to={'/'}><FaHome />  Home</Link>
                    <Link to={'search'}><FaSearch />  Search</Link>
                    <Link to={'addpost'}><FaImages />  Add Post</Link>
                    <Link to={'addstatus'}> <FaBookOpen />  Add Status</Link>
                    <Link to={'video'}><FaHeart />  Notification</Link>
                    <Link to={'profile'}><IoMdContact />  Profile</Link>
    
    
                </nav>
    
            </div> }
       </>
    )
}

export default Laptopscreen