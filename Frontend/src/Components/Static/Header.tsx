import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import React from "react";
// import pix from "../assets/bg.png";
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdOutlineVerifiedUser,
  MdOutlineElectricBike,
  MdOutlineStore,
} from "react-icons/md";
import { Link } from "react-router-dom";

const Header = () => {
  const [drop, setDrop] = useState<boolean>(false);
  const [toggle, setToggle] = useState<boolean>(false);
  const [toggle2, setToggle2] = useState<boolean>(false);
  const [header, setHeader] = useState<boolean>(false);

  const headerChange = () => {
    const scroll = window.pageYOffset;

    if (scroll >= 10) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };
  window.addEventListener("scroll", headerChange);

  const toggleFunction = () => {
    setToggle(!toggle);
  };

  const toggleFunction2 = () => {
    setToggle2(!toggle2);
  };

  return (
    <div>
      {header ? (
        <div className="h-[60px] w-full white flex justify-center items-center  bg-purple-700 fixed top-0">
          <div className="h-[80%] w-[90%] flex justify-between items-center">
            <div>
              <div className="text-black text-[18px] font-bold">FOODFLEX</div>
            </div>
            <div className="flex justify-center items-center gap-3">
              <div className=" bg-purple-700 py-1 px-1 rounded-full text-white font-bold">
                NIG
              </div>
              <div className="font-semibold">(EN)</div>

              <div
                className="text-[18px] font-bold cursor-pointer relative md:hidden"
                onClick={() => {
                  setDrop(!drop);
                }}
              >
                {drop ? (
                  <FaTimes
                    className=""
                    onclick={() => {
                      setDrop(true);
                    }}
                  />
                ) : (
                  <AiOutlineMenu
                    onclick={() => {
                      setDrop(false);
                    }}
                  />
                )}
              </div>
              {drop ? (
                <div className="md:hidden w-full h-[90vh] bg-white text-black absolute top-[60px] right-[0] flex justify-center items-center">
                  <div className="w-[90%] h-[90%] bg-white">
                    <div
                      onClick={toggleFunction}
                      className="flex justify-between items-start transition-all duration-300 border-b"
                    >
                      <div className="text-[20px] font-semibold">
                        Register As
                      </div>
                      <div className="text-[30px] font-semibold">
                        {toggle ? (
                          <MdKeyboardArrowUp />
                        ) : (
                          <MdKeyboardArrowDown />
                        )}
                      </div>
                    </div>

                    {toggle ? (
                      <div className="w-full pt-[20px]  flex justify-center items-center">
                        <div className="w-[100%] flex justify-center items-start flex-col gap-[30px]">
                          <div className=" w-full py-3 flex justify-center items-center  border-b hover:bg-gray-100 cursor-pointer">
                            <div className="w-[90%]">
                              <div className="font-semibold flex gap-1">
                                <MdOutlineVerifiedUser className="mt-1" />
                                <div>USER</div>
                              </div>

                              <div>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Lorem, ipsum dolor sit amet
                                consectetur adipisicing elit. Perferendis, hic
                                aliquid maxime consectetur nemo, tenetur illum
                                laudantium odio.
                              </div>
                            </div>
                          </div>
                          <div className=" w-full py-3 flex justify-center items-center  border-b hover:bg-gray-100  cursor-pointer">
                            <div className="w-[90%]">
                              <div className="font-semibold flex gap-1">
                                <MdOutlineStore className="mt-1" />
                                <div>VENDOR</div>
                              </div>
                              <div>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Lorem, ipsum dolor sit amet
                                consectetur adipisicing elit. Perferendis, hic
                                aliquid maxime consectetur nemo, tenetur illum
                                laudantium odio.
                              </div>
                            </div>
                          </div>
                          <div className=" w-full py-3 flex justify-center items-center  border-b hover:bg-gray-100 cursor-pointer">
                            <div className="w-[90%]">
                              <div className="font-semibold flex gap-1">
                                <MdOutlineElectricBike className="mt-1" />
                                <div>DISPATCH</div>
                              </div>
                              <div>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Lorem, ipsum dolor sit amet
                                consectetur adipisicing elit. Perferendis, hic
                                aliquid maxime consectetur nemo, tenetur illum
                                laudantium odio.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>
              ) : null}

              <button
                onClick={toggleFunction2}
                className="md:block hidden py-[10px] px-[10px] bg-black rounded-[30px] cursor-pointer text-white flex justify-center items-center "
              >
                Register
              </button>
              {toggle2 ? (
                <div className="w-[280px] h-[200px] hidden bg-white bxs flex justify-center items-center rounded-xl absolute top-[60px] right-[20px] md:block">
                  <div className="h-[80%] w-[94%]  flex justify-center items-start gap-10">
                    <div className="h-[100%] w-[90%] flex justify-center items-center flex-col">
                      <div className="h-[30%] w-[80%] font-semibold gap-2 flex justify-start items-center hover:bg-gray-100 cursor-pointer">
                        <MdOutlineVerifiedUser className="mt-1" />
                        <Link to="/account/get_started">
                          <div>Register as User →</div>
                        </Link>
                      </div>
                      <div className="h-[30%] w-[80%] font-semibold gap-2 flex justify-start items-center hover:bg-gray-100 cursor-pointer">
                        <MdOutlineStore className="mt-1" />
                        <Link to="/vendor/get-started">
                          <div>Register as Vendor →</div>
                        </Link>
                      </div>
                      <div className="h-[30%] w-[80%] font-semibold gap-2 flex justify-start items-center hover:bg-gray-100 cursor-pointer">
                        <MdOutlineElectricBike className="mt-1" />
                        <Link to="/vendor">
                          <div>Register as Dispatch →</div>
                        </Link>
                      </div>
                      <div className="h-[30%] w-[80%] font-semibold gap-2 flex justify-start items-center hover:bg-gray-100 cursor-pointer">
                        <MdOutlineElectricBike className="mt-1" />
                        <Link to="/admin/get-started">
                          <div>Register as Admin →</div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      ) : (
        <div className="h-[70px] w-full white flex justify-center items-center bg-gray-100 fixed top-0">
          <div className="h-[80%] w-[90%] flex justify-between items-center">
            <div>
              {/* <img
                src={pix}
                alt=""
                style={{
                  width: "90px",
                  height: "70px",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              /> */}
            </div>
            <div className="flex justify-center items-center gap-3">
              <div className=" bg-purple-700 py-1 px-1 rounded-full text-white font-bold">
                NIG
              </div>
              <div className="font-semibold">(EN)</div>

              <div
                className="text-[18px] font-bold cursor-pointer relative md:hidden"
                onClick={() => {
                  setDrop(!drop);
                }}
              >
                {drop ? (
                  <FaTimes
                    className=""
                    onclick={() => {
                      setDrop(true);
                    }}
                  />
                ) : (
                  <AiOutlineMenu
                    onclick={() => {
                      setDrop(false);
                    }}
                  />
                )}
              </div>
              {drop ? (
                <div className="md:hidden w-full h-[90vh] bg-white text-black absolute top-[60px] right-[0] flex justify-center items-center">
                  <div className="w-[90%] h-[90%] bg-white">
                    <div
                      onClick={toggleFunction}
                      className="flex justify-between items-start transition-all duration-300 border-b"
                    >
                      <div className="text-[20px] font-semibold">
                        Register As
                      </div>
                      <div className="text-[30px] font-semibold">
                        {toggle ? (
                          <MdKeyboardArrowUp />
                        ) : (
                          <MdKeyboardArrowDown />
                        )}
                      </div>
                    </div>

                    {toggle ? (
                      <div className="w-full pt-[20px]  flex justify-center items-center">
                        <div className="w-[100%] flex justify-center items-start flex-col gap-[30px]">
                          <div className=" w-full py-3 flex justify-center items-center  border-b hover:bg-gray-100 cursor-pointer">
                            <div className="w-[90%]">
                              <div className="font-semibold flex gap-1">
                                <MdOutlineVerifiedUser className="mt-1" />
                                <div>USER</div>
                              </div>

                              <div>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Lorem, ipsum dolor sit amet
                                consectetur adipisicing elit. Perferendis, hic
                                aliquid maxime consectetur nemo, tenetur illum
                                laudantium odio.
                              </div>
                            </div>
                          </div>
                          <div className=" w-full py-3 flex justify-center items-center  border-b hover:bg-gray-100  cursor-pointer">
                            <div className="w-[90%]">
                              <div className="font-semibold flex gap-1">
                                <MdOutlineStore className="mt-1" />
                                <div>VENDOR</div>
                              </div>
                              <div>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Lorem, ipsum dolor sit amet
                                consectetur adipisicing elit. Perferendis, hic
                                aliquid maxime consectetur nemo, tenetur illum
                                laudantium odio.
                              </div>
                            </div>
                          </div>
                          <div className=" w-full py-3 flex justify-center items-center  border-b hover:bg-gray-100 cursor-pointer">
                            <div className="w-[90%]">
                              <div className="font-semibold flex gap-1">
                                <MdOutlineElectricBike className="mt-1" />
                                <div>DISPATCH</div>
                              </div>
                              <div>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Lorem, ipsum dolor sit amet
                                consectetur adipisicing elit. Perferendis, hic
                                aliquid maxime consectetur nemo, tenetur illum
                                laudantium odio.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>
              ) : null}

              <button
                onClick={toggleFunction2}
                className="md:block hidden py-[10px] px-[10px] bg-black rounded-[30px] cursor-pointer text-white flex justify-center items-center "
              >
                Register
              </button>
              {toggle2 ? (
                <div className="w-[280px] h-[200px] hidden bg-white bxs flex justify-center items-center rounded-xl absolute top-[60px] right-[20px] md:block">
                  <div className="h-[80%] w-[94%]  flex justify-center items-start gap-10">
                    <div className="h-[100%] w-[90%] flex justify-center items-center flex-col">
                      <div className="h-[30%] w-[80%] font-semibold gap-2 flex justify-start items-center hover:bg-gray-100 cursor-pointer">
                        <MdOutlineVerifiedUser className="mt-1" />
                        <Link to="/account/get_started">
                          <div>Register as User →</div>
                        </Link>
                      </div>
                      <div className="h-[30%] w-[80%] font-semibold gap-2 flex justify-start items-center hover:bg-gray-100 cursor-pointer">
                        <MdOutlineStore className="mt-1" />
                        <Link to="/vendor/get-started">
                          <div>Register as Vendor →</div>
                        </Link>
                      </div>
                      <div className="h-[30%] w-[80%] font-semibold gap-2 flex justify-start items-center hover:bg-gray-100 cursor-pointer">
                        <MdOutlineStore className="mt-1" />
                        <Link to="/admin/get-started">
                          <div>Register as Admin →</div>
                        </Link>
                      </div>
                      <div className="h-[30%] w-[80%] font-semibold gap-2 flex justify-start items-center hover:bg-gray-100 cursor-pointer">
                        <MdOutlineElectricBike className="mt-1" />
                        <Link to="/dispatcher">
                          <div>Register as Dispatch →</div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;