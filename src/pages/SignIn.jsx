import { useState } from "react";
import { IoIosPerson, IoMdLock } from "react-icons/io";
import { IoMail, IoShieldCheckmarkSharp, IoBrowsers } from "react-icons/io5";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password} = formData;

  const onSubmit = (e) => {
    e.preventDefault();
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
            required
          ></input>
        </div>

        <button className="submit-btn rounded" type="submit">
          Sign In
        </button>
      </form>
      {/* 
        ADD Google Auth
        */}
    </div>
  );
};

export default SignIn;
