import React from "react";
import { Outlet } from "react-router-dom";

/** Components */
import Header from "../../Header";

const MainLayout = () => {
  return (
    <>
      <Header name="Kevin C" role="Super Admin" />
      <Outlet />
    </>
  );
};

export default MainLayout;
