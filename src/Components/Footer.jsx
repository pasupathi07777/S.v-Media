
import { FaHome } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaRegPlusSquare } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

import { useContext } from 'react';
import Contex from '../Details/Contex';
import { useHistory } from 'react-router-use-history';
import { Outlet} from 'react-router-dom'




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
    {Login===true && <footer>
      
        <div className="a" onClick={(e)=>{Home(); setaddbtn(false);}}><FaHome /></div>
        <div className="a" onClick={(e)=>{search(); setaddbtn(false);}}><FaSearch /></div>
    
      
        <p  onClick={footerSumit}><FaRegPlusSquare /></p>
     
        <div className="a"   onClick={(e)=>{video(); setaddbtn(false);}}><FaHeart /></div>
   
        <div className="a"  onClick={(e)=>{profile(); setaddbtn(false);}}><CgProfile /></div>
        

      
        <Outlet/>
       
    </footer>}</>
  )
}

export default Footer