import React from 'react'
import { IoIosNotifications } from "react-icons/io";
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <h3>S.v Media            
        </h3>
        <div className="notify-icon">
        <Link><IoIosNotifications /></Link>
        </div>
    </header>
  )
}

export default Header