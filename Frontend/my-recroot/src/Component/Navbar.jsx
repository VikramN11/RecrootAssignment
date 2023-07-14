import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom";
import style from "../Style/Navbar.module.css";
import axios from 'axios';

const Navbar = () => {
  let profile = localStorage.getItem("filepath");

  return (
    <div className={style.navContainer}>
      <h1><Link to='/'>Blogspot</Link></h1>
      <div>
        <img src={profile ? `${profile}` : `https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg`} alt="profilepic" />
      </div>
    </div>
  )
}

export default Navbar