import React, { useContext } from 'react'
import Contex from '../Details/Contex'

const Addstatus = () => {
  let { statuspost,setSatatusUpdate, setstatusText,update } = useContext(Contex)
 
  
  return (

    <form action="" className="Addstatus" onSubmit={update}>
      <div className="status-img-box">
        {statuspost && <img src={`${statuspost}`} alt="" />}


      </div>
      <textarea name="" id="" className='status-textarea' onChange={(e) => setstatusText(e.target.value)} placeholder='What On Your Mind'></textarea>
      <button type="submit">Uplode Status</button>

 

    </form>
  )
}

export default Addstatus