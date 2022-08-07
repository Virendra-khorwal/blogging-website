
import Image from "../images/undraw_articles_wbpb.svg";

const Homepage = () => {

    return (
      <div className="flex p-10 items-center gap-52 justify-center ">
        <div>
          <img src={Image} alt="blog" />
        </div>
        <div className="flex flex-col justify-items-center">
          <h1 className="text-6xl">
            Start Blogging <span className="color-g">Today!</span>
          </h1>
          <h2 className="text-3xl mt-3">
            with <span className="bg-color-g px-2">devBlog</span>
          </h2>
          <p className="text-xl mt-2">
            Share your ideas with people. Connect with community.
          </p>
          <button className="text-2xl bg-color-i rounded p-2 color-gy mt-16">
            Get Started
          </button>
        </div>
      </div>
    );
}

export default Homepage