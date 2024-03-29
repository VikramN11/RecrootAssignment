import { useState } from "react";
import axios from "axios";
import style from "../Style/Signin.module.css";
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom";

  
  const Signin = () =>{
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errMessage, setErrMessage] = useState("");

    const handleSubmit = (e)=>{
      e.preventDefault();

      if (!email || !password) {
       setErrMessage('Please fill in all fields.');
     } 
     else {
       const payload = {email, password}
 
       axios.post(`https://wild-ruby-calf-sari.cyclic.app/users/login`, payload).then(res=>{
         console.log(res.data);
         alert("Logged In Successfully");
         localStorage.setItem("token", res.data.token);
         navigate("/");
         setEmail('');
         setPassword('');
         setErrMessage('');
        }).catch(err=>{
          console.log(err);
        })
      }
    }

    return (
      <form className={style.signinContainer} onSubmit={handleSubmit}>
        <h1 style={{fontSize:"larger", fontWeight:"700"}}>Sign In</h1>
      <input
        type="email"
        name="email"
        placeholder="Please enter your Email"
        value={email}
        onChange={e=>setEmail(e.target.value)}
      />
      <input
        type="password"
        name="password"
        placeholder="Please enter your Password"
        value={password}
        onChange={e=>setPassword(e.target.value)}
      />
      {errMessage && <p>{errMessage}</p>}
      <input type="submit" value="Sign In" />
      <p>New User? <Link style={{color:"blue"}} to={"/signup"}>SignUp</Link></p>
    </form>
    );
  }

  export default Signin;