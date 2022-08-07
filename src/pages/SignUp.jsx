import { useState } from "react";
import { IoIosPerson, IoMdLock } from "react-icons/io";
import { IoMail, IoShieldCheckmarkSharp, IoBrowsers } from "react-icons/io5";

const SignUp = () => {

    const [formData, setFormData] = useState({
        name:"",
        email:"",
        password:"",
        image:{},
        bio:""
    })

    const {name, email, password,image, bio} = formData


    const onSubmit = (e) => {
        e.preventDefault()
    }

    return (
      <div className="form ">
        <div className="header">Sign Up</div>
        <form onSubmit={onSubmit} className="formData">
          <div className="formGroup">
            <label htmlFor="name">
              <IoIosPerson />
            </label>
            <input
              className="name"
              id="name"
              name="name"
              type="text"
              placeholder="User Name"
              required
            ></input>
          </div>
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
            <label htmlFor="bio">
              <IoBrowsers />
            </label>
            <input
              className="bio"
              type="text"
              id="bio"
              name="bio"
              placeholder="I am a ..."
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
          <div className="formGroup">
            <label htmlFor="con-password">
              <IoShieldCheckmarkSharp />
            </label>
            <input
              className="con-password"
              type="password"
              id="con-password"
              name="con-password"
              placeholder="Confirm Password"
              required
            ></input>
          </div>

          <button className="submit-btn rounded" type="submit">
            Sign Up
          </button>
        </form>
        {/* 
        ADD Google Auth
        */}
      </div>
    );
}

export default SignUp