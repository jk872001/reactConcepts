import React, { useState } from 'react'

const Header = () => {
    const [isLoggedIn,setIsLoggedIn]=useState(false);

  return (
    <React.Fragment>
      <header>
      <img width='100px'
height='100px'        src="https://t3.ftcdn.net/jpg/04/69/99/84/240_F_469998410_dS3rIFPywmpTDYYr7VY6wd1SlV6c7Fa7.jpg" alt="" />

     <nav>
        <ul>
            <li>Home</li>
            <li>Deals</li>
            <li>About Us</li>
            <li>Contact Us</li>
        </ul>
      {
        isLoggedIn ? <button
         onClick={()=>setIsLoggedIn(false)}
        >Logout</button>:<button  onClick={()=>setIsLoggedIn(true)}>Login</button>
      }
     </nav>
      </header>
    </React.Fragment>
  )
}

export default Header
