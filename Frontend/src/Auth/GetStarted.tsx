import { Link } from "react-router-dom";
const Get_started = () => {
  return (
    <div className="w-[100%] h-[100vh] bg-purple-900 flex justify-center items-center">
      <div className="h-[70%] w-[100%] flex justify-center items-center flex-col gap-7">
        <h1 className="font-bold text-2xl text-white">
          Let's Get Started 👍🚀
        </h1>
        <p className="text-white text-center">
          Register or Sign in into youe account to have a full digital
          experience on our
          <br /> food delivery activities
        </p>
        <Link to="/account/signup">
          <button className="h-[50px] w-[200px] bg-purple-600 rounded">
            Get Started
          </button>
        </Link>
        <Link to="/account/signin">
          <p className="text-white">Sign in</p>
        </Link>
      </div>
    </div>
  );
};

export default Get_started;
