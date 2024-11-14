import { Outlet, useLocation } from "react-router-dom";
import { Navigation } from "../../components";
import { mainList } from "../../components/Nav/constant";
import style from '../Tween/style.module.scss'

const TimeLineDemo = () => {
  const location = useLocation();
  return (
    <Navigation menus={mainList}>
      <div className={style.tween} >
        {location.pathname === '/timeline' && (
          <div className={style.title}> Timeline</div>
        )}
        <Outlet />
      </div>
    </Navigation>
  );
};

export default TimeLineDemo;
