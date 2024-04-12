import React, { useContext } from 'react'
import Contex from '../Details/Contex'
import { Link } from 'react-router-dom'

const Addstatus = () => {
  let { statuspost, setstatusText,update,urlconvert } = useContext(Contex)
 
  
  return (

    <form action="" className="Addstatus" onSubmit={update}>
       <Link to={'/'}><div className="back-button">Back</div></Link>
      <div className="status-img-box">
       
        <label htmlFor="status-post">{ statuspost !==''? <img src={`${statuspost}`} alt="" /> :<p>Add Image</p>}</label>
        <input type="file" name="" onChange={(e) => urlconvert(e)} id="status-post" />


      </div>
      <textarea name="" id="" className='status-textarea' onChange={(e) => setstatusText(e.target.value)} placeholder='What On Your Mind'></textarea>
      <button type="submit">Uplode Status</button>

 

    </form>
  )
}

export default Addstatus