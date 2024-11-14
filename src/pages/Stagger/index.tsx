import { Outlet, useLocation } from "react-router-dom";
import { Navigation } from "../../components";
import { mainList } from "../../components/Nav/constant";
import style from '../Tween/style.module.scss'

const StaggerDemo = () => {
  const location = useLocation();
  return (
    <Navigation menus={mainList}>
      <div className={style.tween}>
        {
          location.pathname === '/stagger' && (
            <div className={style.title}>
              Stagger
            </div>
          )
        }
        <Outlet />
      </div>
    </Navigation>
  );
};

export default StaggerDemo;
