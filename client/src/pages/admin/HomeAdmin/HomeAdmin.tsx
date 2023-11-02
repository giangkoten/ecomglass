import SideBar from "../SideBar/SideBar";
import { Outlet } from "react-router-dom";

const HomeAdmin = () => {
  return (
    <div className="d-flex w-100">
      <SideBar />
      <Outlet />
    </div>
  );
};

export default HomeAdmin;
