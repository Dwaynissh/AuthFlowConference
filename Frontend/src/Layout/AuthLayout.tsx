import { Outlet } from "react-router-dom";
import pix from "../assets/hy.png";
const AuthLayout = () => {
  return (
    <div className="grid-cols-1 lg:grid-cols-5 w-full h-[100vh] grid bg-purple-800">
      <div className="col-span-2">
        <Outlet />
      </div>
      <div className="hidden lg:block col-span-3 m-4 mr-0 shadow-md h-[95%]">
        <div className="w-full h-[100%] rounded-3xl bg-purple-700">
          <div className="w-full h-[60%] rounded-lg flex justify-center items-center">
            <img
              src={pix}
              className="w-[52%] h-[555px] ml-[10px]"
              style={{ position: "relative", top: "70px" }}
            />
          </div>
          <div className="w-[100%] h-[40%] rounded-lg flex justify-center items-center flex-col gap-2">
            <div className="h-[6px] w-[70px] bg-white rounded">
              <div className="w-[40px] h-[6px] bg-orange-600 rounded"></div>
            </div>
            <p className="font-bold text-3xl text-white">
              Full Contactless
              <span className="text-orange-500"> Experience</span>
            </p>
            <p className="text-white">
              You order on loan and we deliver you pay back later
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
