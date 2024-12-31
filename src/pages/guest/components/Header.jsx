import React from 'react'
import IconIglesia from './icons/Anillos.svg'
function Header() {
  return (
    <div className='content-header'>
        <div className='header-img animate__animated animate__backInLeft'>
            <img src="/imgs/IMG1.jpg" alt="" />
       </div>
       <div>
        <h1 className='animate__animated animate__backInLeft'>¡Nos casamos!</h1>
        <div className='content-icons animate__animated animate__bounce'>
        <img src={IconIglesia}></img>
        </div>
        <h2 className='animate__animated animate__backInLeft'>W. Adrián y Brenda</h2>
       </div>
    </div>
  )
}

export default Header