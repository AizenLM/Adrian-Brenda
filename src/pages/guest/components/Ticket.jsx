import React from 'react'
import TicketIcon from './icons/Ticket.svg'

function Ticket({numGuest}) {
  return (
    <>
    <div className='ticket animate__animated animate__flipInX'>
       <div className='pase'>
       <h2>PASE</h2>
        <div className='content-icons'>
          <img className='icon-ticket' src={TicketIcon} alt="" />
        </div>
        <h3 className='numGuest'>Para: {numGuest}</h3>
        <h4>Nuestra boda: W. Adrián y Brenda</h4>
       </div>
    </div>
    </>
    
  )
}

export default Ticket