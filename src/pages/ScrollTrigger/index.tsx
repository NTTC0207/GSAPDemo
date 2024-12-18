import { FC } from "react";
import { Navigation } from "../../components";
import { mainList } from "../../components/Nav/constant";
import { Outlet, useLocation } from "react-router-dom";
import style from '../Tween/style.module.scss'

const ScrollTriggerDemo: FC = () => {
  const location = useLocation();
  return (
    <Navigation menus={mainList}>
      {
        location.pathname === '/scrolltrigger' && (
          <div className={style.tween}>

            <div className={style.title}>
              Scroll Trigger
            </div>
          </div>
        )
      }

      <Outlet />
    </Navigation>
  );
};

export default ScrollTriggerDemo;
