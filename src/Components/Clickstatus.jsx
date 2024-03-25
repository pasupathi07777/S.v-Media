
import { useContext } from 'react'
import { useParams } from 'react-router'
import Contex from '../Details/Contex'


const Clickstatus = () => {
    let{id}=useParams()
    
   
    let {updatestatus}=useContext(Contex)
    let stu=updatestatus.find((a)=>(a.id===Number(id)))
    console.log(stu)
  return (
    <main className="click-status">
    <img src={stu.image} alt="hh" />

</main>
    
  )
}

export default Clickstatus