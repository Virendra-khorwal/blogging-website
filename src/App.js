import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import EditDoc from "./pages/EditDoc";
import Homepage from "./pages/Homepage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import UserBlogs from "./pages/UserBlogs";

function App() {
  const loggedIn = true

  return (
    <div >
      <Router>
        <div className="flex flex-col" >
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
            <Route path="/signin" element={<SignIn/>} />
            <Route path="/editdoc" element={<EditDoc/>} />
          </Routes>
        </div>
        
      </Router>
    </div>
  );
}

export default App;
