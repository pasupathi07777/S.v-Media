import React, {  } from 'react'
import { useContext } from 'react'
import Contex from '../Details/Contex'

import { Link } from 'react-router-dom'
// import { format } from 'date-fns'

const Videos = () => {
  let { Name } = useContext(Contex)
  // let date= format(new Date(), "pp")


  let notfy=JSON.parse(localStorage.getItem('pasupathi_status'))

  return (
    <div className="notification">



      {
         notfy.reverse().map(a =>
          a.for==='status'?

          <div className="box" key={a.id}>
            <Link to={`/status/${a.id}`}> <p>{`${Name}${a.message} in `}<small>{a.date}</small></p></Link>
          </div>:<div className="box" key={a.id}>
            <Link to={`/video/${a.id}`}> <p>{`${Name}${a.message} in `}<small>{a.date}</small></p></Link>
          </div>
  
        ) 
      }



    </div>
  )
}

export default Videos