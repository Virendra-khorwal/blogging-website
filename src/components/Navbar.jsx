import {Link} from 'react-router-dom'

const Navbar = () => {

    return (
      <div className="bg-color-g h-20 flex justify-between items-center p-2 text-xl">
        <div>DevBlog</div>
        <div>
          <ul className="flex space-x-8 items-center">
            <Link to="/blogs">
              <div className="nav-link">Blog</div>
            </Link>
            <Link to="/about">
              <div className="nav-link">About</div>
            </Link>
            <Link to="/signin">
              <div className="nav-link">Sign In</div>
            </Link>
            <Link to="/signup">
              <div className="bg-color-i color-gy p-2 rounded px-4 bg-color-i-o">
                Sign Up
              </div>
            </Link>
          </ul>
        </div>
      </div>
    );
}

export default Navbar