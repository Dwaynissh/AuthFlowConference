import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import React from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { SigninAccount } from "../Api/Api";

const Login = () => {
  const navigate = useNavigate();
  const schema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onhandleSubmit = handleSubmit(async (data: {}) => {
    console.log(data);

    await SigninAccount(data).then(() => {
      navigate("/");
    });
  });
  return (
    <div>
      <div>
        <form
          onSubmit={onhandleSubmit}
          className="w-[100%]  h-[100vh] justify-center items-center flex flex-col gap-10"
        >
          <h1 className="font-bold text-white text-2xl">Sign In Here 👎</h1>
          <p className="font-bold text-white">
            we need this information to know who you are and we need your email
            to verified you??
          </p>
          <div className="w-[90%] lg:w-[100%] px-10 mx-10">
            <div>
              <div className="border flex flex-col w-[80%] rounded-md relative h-[50px] justify-center my-2  mt-8">
                <label className="text-[14px] absolute left-2 -top-3 bg-white px-2 leading-tight ">
                  client email
                </label>
                <input
                  {...register("email")}
                  placeholder="client email"
                  className="pl-2 flex-1 h-[100%] bg-transparent outline-none "
                />
              </div>
              {errors.email && (
                <div className="leading-tight -mt-1 text-right mr-10 pr-1 text-[12px] text-red-500 w-[80%] ">
                  {errors.email.message}
                </div>
              )}
            </div>
            <div>
              <div className="border flex flex-col w-[80%] rounded-md relative h-[50px] justify-center my-2  mt-8">
                <label className="text-[14px] absolute left-2 -top-3 bg-white px-2 leading-tight ">
                  password
                </label>
                <input
                  {...register("password")}
                  placeholder="password"
                  className="pl-2 flex-1 h-[100%] bg-transparent outline-none "
                />
              </div>
              {errors.password && (
                <div className="leading-tight -mt-1 text-right text-[12px] text-red-500 mr-10 pr-1 w-[80%]">
                  {errors.password.message}
                </div>
              )}
            </div>
            <div>
              <button
                type="submit"
                className="rounded-sm bg-purple-500 w-[50%] text-white mt-4 py-4 hover:cursor-pointer hover:translate-y-1 transition-all duration-300 hover:shadow-md"
              >
                Sign In
              </button>
            </div>
            <div className=" flex justify-center mt-10 text-[12px]">
              <div>
                Don't have an Account
                <Link
                  to="/account/signup"
                  className="font-bold text-white pl-2"
                >
                  Sign Up here
                </Link>
              </div>
            </div>
            <div className="mt-8 flex w-full items-center justify-center">
              <div className="border-b flex-1" />
              <span className="mx-2">or</span>
              <div className="border-b flex-1" />
            </div>
            <div className="mt-8 flex w-full justify-center items-center ">
              <button className="flex px-4 py-2 border cursor-pointer justify-center items-center gap-2 ">
                continue with google <FcGoogle />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;