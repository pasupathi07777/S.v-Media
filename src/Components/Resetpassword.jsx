import React from 'react'

const Resetpassword = () => {
  let first_number=Math.floor(Math.random()*20+1)
  let second_number=Math.floor(Math.random()*20+1)
  
  return (
    <form action="" className='Passreset' >
      <h2>Solve this</h2>
      <p>{first_number} + {second_number}</p>
      <input type="number" />


    </form>

    
  )
}

export default Resetpassword