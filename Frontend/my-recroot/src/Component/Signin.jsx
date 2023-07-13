import { useState } from "react";
import axios from "axios";
import style from "../Style/Signin.module.css";

  
  const Signin = () =>{
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
 
       axios.post(`http://localhost:8080/users/login`, payload).then(res=>{
         console.log(res.data);
         localStorage.setItem("token", res.data.token);
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
    </form>
    );
  }

  export default Signin;