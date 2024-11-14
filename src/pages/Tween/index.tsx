import { type FC } from "react";
import { Outlet, useLocation } from "react-router-dom";
import LabelXAxis from "../../components/plot/LabelXAxis";
import LabelYAxis from "../../components/plot/Y-Axis/LabelYAxis";
import Navigation from "../../components/Nav/Navigation";
import style from './style.module.scss'
import { mainList } from "../../components/Nav/constant";

const TweenDemo: FC = () => {
    const location = useLocation();
    return (
        <Navigation menus={mainList}>
            <div className={style.tween} >
                {location.pathname === '/tween' && (
                    <div className={style.title}> Tween</div>
                )}
                <LabelYAxis>
                    <LabelXAxis>
                        <Outlet />
                    </LabelXAxis>
                </LabelYAxis>
            </div>
        </Navigation>
    );
}
export default TweenDemo;