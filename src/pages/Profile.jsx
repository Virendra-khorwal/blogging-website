import { getAuth } from "firebase/auth";
import { Link, useNavigate, useParams } from "react-router-dom";
import { IoIosPerson, IoMdLock } from "react-icons/io";
import { IoMail, IoBrowsers, IoEarth } from "react-icons/io5";
import { useEffect } from "react";
const Profile = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const params = useParams();
  const userId = auth.currentUser.uid;


  return (
    <div className="p-4">
      <div className="text-2xl color-g">Profile Settings</div>
      <div>
        <div className="formData">
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
            <label htmlFor="website">
              <IoEarth />
            </label>
            <input
              className="website"
              type="text"
              id="website"
              name="website"
              placeholder="Website"
            ></input>
          </div>
        </div>
        <div className="formGroup">
          <label>Chnage Profile Image</label>
          <input type="file" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
