import { FC } from "react";
import { Navigation } from "../../components";
import { mainList } from "../../components/Nav/constant";
import { Outlet, useLocation } from "react-router-dom";
import style from '../Tween/style.module.scss'

const PageTransitionDemo: FC = () => {
  const location = useLocation();
  return (
    <Navigation menus={mainList}>
      <div className={style.tween}>
        {
          location.pathname === '/pageTransition' && (
            <div className={style.title}>
              Page Transition
            </div>
          )
        }
        <Outlet />
      </div>
    </Navigation>
  );
};

export default PageTransitionDemo
