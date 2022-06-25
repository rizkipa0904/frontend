import { Outlet, Navigate } from "react-router-dom";

/** Component */
import Navbar from "../components/Navbar";

const PrivateRoutes = ({ user }) => {

  return (
    <div className="private-routes-container">
      <Navbar />
      <div className="private-routes-wrapper">
        <Outlet />
      </div>
    </div>
  );
};

export default PrivateRoutes;
