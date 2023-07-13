import { useState } from "react";
import axios from "axios";
import style from "../Style/Signin.module.css";

  
  const Signin = () =>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errMessage, setErrMessage] = useState("");

    const handleSubmit = async (e)=>{
      e.preventDefault();

      if (!email || !password) {
       setErrMessage('Please fill in all fields.');
     } 
     else {
     try{
       const payload = {email, password}
 
       await axios.post(`http://localhost:8080/users/register`, payload).then(res=>{
         console.log(res.data);
         setEmail('');
         setPassword('');
         setErrMessage('');
        }).catch(err=>{
         console.log(err)});
     }
     catch (error) {
         console.log(error);
         setErrMessage('Login failed. Please try again later.');
       }
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