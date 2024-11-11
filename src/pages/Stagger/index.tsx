import { Outlet } from "react-router-dom";
import { Navigation } from "../../components";
import { mainList } from "../../components/Nav/constant";

const StaggerDemo = () => {
  return (
    <Navigation menus={mainList}>
      <Outlet />
    </Navigation>
  );
};

export default StaggerDemo;
