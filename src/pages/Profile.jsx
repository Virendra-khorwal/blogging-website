import { getAuth } from "firebase/auth";
import { Link, useNavigate, useParams } from "react-router-dom";
import { IoIosPerson, IoMdLock } from "react-icons/io";
import { IoMail, IoBrowsers, IoEarth } from "react-icons/io5";
import { useEffect, useState } from "react";
import { db } from "../firebase.config";
import {
  doc,
  updateDoc,
  collection,
  query,
  where,
  orderBy,
  deleteDoc,
  getDoc,
  serverTimestamp,
} from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

const Profile = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const params = useParams();
  const [userList, setUserList] = useState("")
  const userId = auth.currentUser.uid;

  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
    image: "",
    website: "",
    blogList: {}
  });

  const onChange = (e) => {
    setUserList((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };


  useEffect(() => {
    const fetchUserData = async () => {
      const userRef = doc(db, "users", userId);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        setUserList(userSnap.data());
        setFormData(userSnap.data());
      }
    };

    fetchUserData();
  }, [userId]);

  const {name,bio, email, website } = userList

  const onSubmit = async (e) => {
    e.preventDefault()

    const storeImage = async (image) => {
      return new Promise((resolve, reject) => {
        const storage = getStorage()
        const fileName = `${auth.currentUser.uid}-profile`

        const storageRef = ref(storage, "images/"+ fileName);

        const uploadTask = uploadBytesResumable(storageRef, image)

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            console.log("Upload is"+ progress + "% done")
            switch (snapshot.state) {
              case "paused":
                console.log("Upload is paused")
                break
              case "running":
                console.log("Upload is running")
                break
              default:
                break
            }
          },
          (error) => {
            reject(error)
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              resolve(downloadURL)
            })
          }
        )
      })
    }
    const imageUrls = await Promise.all(
      storeImage(formData.image)
    ).catch(() => {
      return
    })
    const formDataCopy = {
      ...formData,
      imageUrls,
      timestampe: serverTimestamp()
    }

    delete formDataCopy.image

    const userRef = doc(db, "users", userId);
    await updateDoc(userRef, formDataCopy);
  }

  return (
    <div className="p-4">
      <div className="text-2xl color-g">Profile Settings</div>
      <form onSubmit={onSubmit}>
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
              value={name}
              onChange={onChange}
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
              value={email}
              placeholder="Email"
              required
              disabled
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
              onChange={onChange}
              value={bio}
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
              onChange={onChange}
              value={website}
              placeholder="Website"
            ></input>
          </div>
        </div>
        <div className="formGroup">
          <label>Change Profile Image</label>
          <input type="file" />
        </div>
        <button type="submit" className="p-2 mt-4 bg-color-i color-gy rounded text-xl px-10" >Save</button>
      </form>
    </div>
  );
};

export default Profile;
