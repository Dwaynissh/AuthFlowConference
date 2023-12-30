import { RouterProvider } from "react-router-dom";
import React from "react";
// import { store } from "./global/store";
import { mainRouter } from "./Router/MainRouter";

const App = () => {
  return (
    <div>
      
          <RouterProvider router={mainRouter} />

       
    </div>
  );
};

export default App;