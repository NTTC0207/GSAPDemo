import { FC } from "react";
import { Navigation } from "../../components";
import { mainList } from "../../components/Nav/constant";
import { Outlet } from "react-router-dom";

const ScrollTriggerDemo: FC = () => {
  return (
    <Navigation menus={mainList}>
      <Outlet />
    </Navigation>
  );
};

export default ScrollTriggerDemo;
