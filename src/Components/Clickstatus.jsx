
import { useContext } from 'react'
import { useParams } from 'react-router'
import Contex from '../Details/Contex'
import { Link } from 'react-router-dom'


const Clickstatus = () => {
  let { id } = useParams()


  let { updatestatus } = useContext(Contex)
  let stu = updatestatus.find((a) => (a.id === Number(id)))
  console.log(stu)
  return (
    <main className="click-status">
      <Link to={'/'}><div className="back-button">Back</div></Link>
      <img src={stu.image} alt="hh" />
      <p>{stu.text}</p>

    </main>

  )
}

export default Clickstatus