import { Link, useNavigate } from "react-router-dom";
import { IoPersonCircle, IoCopy, IoLogOutOutline } from "react-icons/io5";
import { getAuth } from "firebase/auth";

import { useState } from "react";
import userImg from '../images/user.png'

const SideBar = () => {
  const auth = getAuth();
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    avatar: auth.currentUser.avatar
  });
  const { name, avatar } = formData;

  const navigate = useNavigate();

  const onLogout = () => {
    auth.signOut();
    navigate("/");
  };

  return (
    <div className="flex flex-col w-48 bg-color-g h-screen p-4 justify-between color-i">
      <div className="user-display">
        {avatar ? <img>Ok</img> : <img src={userImg} alt="profile"></img>}
        <h1>{name}</h1>
      </div>
      <div className="menu flex flex-col text-2xl gap-4">
        <Link to={`/${name}/profile`}>
          <div className="menu-item flex items-center gap-4 p-2 rounded">
            <IoPersonCircle /> Profile
          </div>
        </Link>
        <Link to={`/${name}/myblogs`}>
          <div className="menu-item flex items-center gap-4 p-2 rounded">
            <IoCopy /> My Blogs
          </div>
        </Link>
      </div>
      <div>
        <button
          type="button"
          onClick={onLogout}
          className="flex items-center gap-4 hover:underline "
        >
          <IoLogOutOutline />
          Logout
        </button>
      </div>
    </div>
  );
};

export default SideBar;
