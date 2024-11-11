import { Outlet } from "react-router-dom";
import { Navigation } from "../../components";
import { mainList } from "../../components/Nav/constant";

const TimeLineDemo = () => {
  return (
      <Navigation menus={mainList}>
        <Outlet />
      </Navigation>
  );
};

export default TimeLineDemo;
