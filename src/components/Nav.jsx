import React, { useEffect, useState } from 'react'
import './Nav.css';

function Nav() {
    const [show,setShow] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll",()=>{
            if(window.scrollY>600){
                setShow(true)
            
            }else{
                setShow(false)
            }
        })
    })
  return (
    <div className= {`${show && 'nav-black'} nav`}>
        <img width={'150px'} src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="NetFlix logo" />
    </div>
  )
}

export default Nav