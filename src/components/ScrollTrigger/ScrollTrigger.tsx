import { FC } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import style from './style.module.scss'

const ScrollTrigger: FC = () => {

    useGSAP(() => {
        const timeline = gsap.timeline();

    })

    return (
        <div className={style.scrollWrapper}>

            {/* <div className={style.scrollContainer}>

            </div>

            <div className={style.scrollContainer}>

            </div> */}

        </div>
    )
}

export default ScrollTrigger