import { type FC } from "react";
import { Outlet } from "react-router-dom";
import LabelXAxis from "../../components/plot/LabelXAxis";
import LabelYAxis from "../../components/plot/Y-Axis/LabelYAxis";
import Navigation from "../../components/Nav/Navigation";
import style from './style.module.scss'

const TweenDemo: FC = () => {
    return (
        <Navigation>
            <div className={style.tween}>
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