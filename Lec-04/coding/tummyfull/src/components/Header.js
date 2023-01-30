import React, { useState } from 'react'
import { Link } from "react-router-dom";
const Header = () => {
    const [isLoggedIn,setIsLoggedIn]=useState(false);

  return (
    <React.Fragment>
      <header>
      <Link to="/">
      <img width='100px'
height='100px'        src="https://t3.ftcdn.net/jpg/04/69/99/84/240_F_469998410_dS3rIFPywmpTDYYr7VY6wd1SlV6c7Fa7.jpg" alt="" />
</Link>
     <nav>
        <ul>
            <li>  <Link to='/'>Home</Link></li>
            <li>Deals</li>
            <li>
            <Link to='aboutus'>About Us</Link>
            </li>
            <li> <Link to='contactus'>Contact Us</Link></li>
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
