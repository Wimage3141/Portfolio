import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";

function MainLayout() {
  return (
    <div className="site-shell">
      <Nav />
      <Outlet />
    </div>
  );
}

export default MainLayout;
