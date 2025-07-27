import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="px-4 sm:px-20 xl:px-32 relative inline-flex flex-col w-full justify-center bg-[url('/gradientBackground.png')] bg-cover bg-no-repeat min-h-screen">
      <div className="text-center mb-6">
        <h1 className="text-3xlm sm:text-5xl md-text-6xl 2xl:text-7xl font-semibold mx-auto leading-[1.2]">
          Create amazing content <br />
          <span className="text-blue-500">AI tools</span>
        </h1>

        <p className="mt-4 max-w-xs sm:max-lg 2xl:max-w-xl m-auto max-sm:text-xs text-gray-600">
          Start your content creation with AI tools. write articles, generate
          images and enhance your workflow.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 text-sm max-sm:text-xs">
        <button
          onClick={() => navigate("/ai")}
          className="bg-blue-500 text-white px-10 py-3 rounded-lg hover:scale-102 active:scale-95 transition cursor-pointer"
        >
          Start creating now
        </button>
        <button className="bg-blue-500 text-white px-10 py-3 rounded-lg hover:scale-102 active:scale-95 transition cursor-pointer">
          Watch demo
        </button>
      </div>

      <div className="flex flex-center gap-4 mt-8 mx-auto text-gray-600">
        <img src={assets.user_group} alt="" className="h-8" /> Trusted by 5000+
        users
      </div>
    </div>
  );
};

export default Hero;
