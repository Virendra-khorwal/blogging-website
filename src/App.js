import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import EditDoc from "./pages/EditDoc";
import Homepage from "./pages/Homepage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import UserBlogs from "./pages/UserBlogs";
import { useAuthStatus } from "./hooks/useAuthStatus";
import Profile from "./pages/Profile";
import PrivateRoute from "./components/PrivateRoute"

function App() {
  const { loggedIn } = useAuthStatus();

  return (
    <div >
      <Router>
        <div className="flex" >
          <div>
            {
              loggedIn ? <SideBar /> : <Navbar />
            }
          </div>
            
          
          <Routes>
            {
              loggedIn ? <Route path="/" element={<UserBlogs/>} /> : <Route path="/" element={<Homepage />} />
            }
            <Route path="/" element={<Homepage />} />
            <Route path="/signup" element={<SignUp/>} />
            <Route path="/:user/profile" element={<PrivateRoute/>}>
              <Route path="/:user/profile" element={<Profile/>} />
            </Route>
            
            <Route path="/signin" element={<SignIn/>} />
            <Route path="/editdoc" element={<EditDoc/>} />
          </Routes>
        </div>
        
      </Router>
    </div>
  );
}

export default App;
