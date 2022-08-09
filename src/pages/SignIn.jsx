import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import {  IoMdLock } from "react-icons/io";
import { IoMail} from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "../components/OAuth";


const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  

  const { email, password} = formData;
  const navigate = useNavigate()

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth()

      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      if(userCredential.user){
        navigate('/')
      }
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="form ">
      <div className="header">Sign In</div>
      <form onSubmit={onSubmit} className="formData">
        <div className="formGroup">
          <label htmlFor="email">
            <IoMail />
          </label>
          <input
            className="email"
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={onChange}
            required
          ></input>
        </div>

        <div className="formGroup">
          <label htmlFor="password">
            <IoMdLock />
          </label>
          <input
            className="password"
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={onChange}
            required
          ></input>
        </div>

        <button className="submit-btn rounded" type="submit">
          Sign In
        </button>
      </form>
      <OAuth/>
      <Link to='/signup' >Sign Up Instead</Link>
    </div>
  );
};

export default SignIn;
