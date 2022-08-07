import { useState } from "react";
import { IoIosPerson, IoMdLock } from "react-icons/io";
import { IoMail, IoShieldCheckmarkSharp, IoBrowsers } from "react-icons/io5";

const SignUp = () => {

    const [formData, setFormData] = useState({
        name:"",
        email:"",
        password:"",
        password2:"",
        bio:""
    })

    const {name, email, password, bio, password2} = formData

    const onChange = (e) => {
      setFormData(prevState =>({
        ...prevState,
        [e.target.id]: e.target.value
      }))
    }


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
              value={name}
              onChange={onChange}
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
              value={email}
              onChange={onChange}
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
              onChange={onChange}
              value={bio}
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
          <div className="formGroup">
            <label htmlFor="password2">
              <IoShieldCheckmarkSharp />
            </label>
            <input
              className="password2"
              type="password"
              id="password2"
              name="password2"
              placeholder="Confirm Password"
              value={password2}
              onChange={onChange}
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