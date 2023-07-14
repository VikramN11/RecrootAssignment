import React, { useEffect } from 'react';
import {Link} from "react-router-dom";
import style from "../Style/Navbar.module.css";
import axios from 'axios';

const Navbar = () => {

  useEffect(()=>{
    getData();
  },[]);

  const getData = ()=>{
    axios.get("http://localhost:8080/",{
        headers: {
            'Authorization': localStorage.getItem("token"),
        }
    }).then(res=>{
        console.log(res.data);
    }).catch(err=>{
        console.log(err);
    })
}

  return (
    <div className={style.navContainer}>
      <h1><Link to='/'>Blogspot</Link></h1>
      <div>
        <Link to='/'><img src="https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg" alt="profilepic" /></Link>
      </div>
    </div>
  )
}

export default Navbar