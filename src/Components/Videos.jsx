import React, {  } from 'react'

import { Link } from 'react-router-dom'

const Videos = () => {
  // let {  } = useContext(Contex)


  let notfy=JSON.parse(localStorage.getItem('pasupathi_status'))

  return (
    <div className="notification">



      {
         notfy.reverse().map(a =>
          a.for==='status'?

          <div className="box" key={a.id}>
            <Link to={`/status/${a.id}`}> <p>{a.message}</p></Link>
          </div>:<div className="box" key={a.id}>
            <Link to={`/video/${a.id}`}> <p>{a.message}</p></Link>
          </div>
  
        ) 
      }



    </div>
  )
}

export default Videos