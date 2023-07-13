import React from 'react';
import {Link} from "react-router-dom";
import style from "../Style/Navbar.module.css"

const Navbar = () => {
  return (
    <div className={style.navContainer}>
      <h1><Link to='/'>Blogspot</Link></h1>
      <Link to='/'><img src="" alt="profilepic" /></Link>
    </div>
  )
}

export default Navbar