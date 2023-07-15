  import { useState } from 'react';
  import axios from "axios";
  import style from "../Style/Signup.module.css";
  import { Link, useNavigate } from 'react-router-dom';
  
  const Signup = ()=>{
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [profile, setProfile] = useState(null);
    const [errMessage, setErrMessage] = useState("");

    const handleSubmit = async (e)=>{
       e.preventDefault();

       if (!name || !email || !password || !profile) {
        setErrMessage('Please fill in all fields.');
      } else if (!validateEmail(email)) {
        setErrMessage('Please enter a valid email address.');
      } else if (password.length < 6) {
        console.log(password);
        setErrMessage('Password must be at least 6 characters long.');
      } else {
      try{
        const payload = new FormData();
        payload.append('name', name);
        payload.append('email', email);
        payload.append('password', password);
        payload.append('profile', profile);
  
        await axios.post(`https://wild-ruby-calf-sari.cyclic.app/users/register`, payload).then(res=>{
          console.log(res.data);
          alert("Registration Successful");
          localStorage.clear();
          localStorage.setItem("filepath", res.data.filepath)
          navigate("/signin")
          setName('');
          setEmail('');
          setPassword('');
          setProfile(null);
          setErrMessage('');
         }).catch(err=>{
          console.log(err)});
      }
      catch (error) {
          console.log(error);
          setErrMessage('Registration failed. Please try again later.');
        }
    }
  }

  const validateEmail = (email)=>{
    const emailRegexp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegexp.test(email);
  }
    
    return (
      <form className={style.signupContainer} method='post' encType="multipart/form-data" onSubmit={handleSubmit}>
      <h1 style={{fontSize:"larger", fontWeight:"700"}}>Sign Up</h1>
      <input
        type="text"
        name="name"
        placeholder="Please enter your Name"
        value={name}
        onChange={e=>setName(e.target.value)}
      />
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
        placeholder="Please set your Password"
        value={password}
        onChange={e=>setPassword(e.target.value)}
      />
      <input
        type="file"
        name="profile"
        onChange={(e)=>{
          console.log(e.target.files[0]);
          setProfile(e.target.files[0])
        }}
      /><br />
      {errMessage && <p>{errMessage}</p>}
      <input type="submit" value="Sign Up" />
      <p>Already logged in? <Link style={{color:"blue"}} to={"/signin"}>Login</Link></p>
    </form>
    );
  }

  export default Signup;