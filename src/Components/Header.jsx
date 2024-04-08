import React, { useContext } from 'react'



import Contex from '../Details/Contex';


const Header = () => {
  let { Login } = useContext(Contex)

  return (

    < > 
     {Login ===true && <header>
      
      <h3>S.v Media
      </h3>
      {/* <div className="notify-icon">
        <IoIosNotifications />
      </div> */}

    </header>}
   </>

   
  )
}

export default Header