import React from "react";

const HomeScreen = () => {
  return (
    <div className="h-[100vh] w-full">
      <div className="h-[900px] w-full flex justify-center items-center">
        <h1 className="font-bold text-5xl">
          Welcome to GroceryEazy <span className="text-blue-800">Platform</span>
        </h1>
        <p className="text-gray-500 font-bold">
          We lend food to our user and they pay back later
        </p>
      </div>
    </div>
  );
};

export default HomeScreen;
