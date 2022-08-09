import { useState } from "react";
import { IoIosPerson, IoMdLock } from "react-icons/io";
import { IoMail, IoBrowsers } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "../components/OAuth";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "../firebase.config";


const SignUp = () => {

    const [formData, setFormData] = useState({
        name:"",
        email:"",
        password:"",
        bio:"",
        avatar:""
    })

    const navigate = useNavigate();

    const {name, email, password, bio} = formData

    const onChange = (e) => {
      setFormData(prevState =>({
        ...prevState,
        [e.target.id]: e.target.value
      }))
    }


    const onSubmit = async (e) => {
        e.preventDefault() 
        try {
          const auth = getAuth()
          const userCredential = await createUserWithEmailAndPassword(auth, email, password)

          const user = userCredential.user

          updateProfile(auth.currentUser, {
            displayName: name,
            bio: bio,
          })

          const formDataCopy = {...formData}
          delete formDataCopy.password
          formDataCopy.timestamp = serverTimestamp()

          await setDoc(doc(db, 'users', user.uid), formDataCopy)

          navigate('/')

        } catch (error) {
          console.log(error)
        }
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
          

          <button className="submit-btn rounded" type="submit">
            Sign Up
          </button>
        </form>
        <OAuth />
  
        <Link to="/signin">Sign In Instead</Link>
      </div>
    );
}

export default SignUp