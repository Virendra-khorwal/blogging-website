import { Link } from 'react-router-dom';
import img from '../images/undraw_articles_wbpb.svg'

const UserBlogs = () => {
    return (
      <div className="p-4 pl-10 flex flex-col gap-20">
        <div>
          <div className="header ">Create new blog</div>
          <button className="rounded bg-color-g-o p-4 text-2xl bg-color-g-hover mt-4 shadow-indigo-600">
            <Link to="/vk/editdoc">New Blog</Link>
          </button>
        </div>
        <div>
          <div className="header">My blogs</div>
          <div className="card rounded p-4 shadow-2xl color-i mt-4">
            <img src={img} alt="img" className="w-52" />
            <div className="mt-4">
              <div className="title">The Title</div>
              <div className="desc">Some small description</div>
            </div>
          </div>
        </div>
      </div>
    );
}
export default UserBlogs