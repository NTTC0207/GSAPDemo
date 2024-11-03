import { FC, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import style from './style.module.scss'
import CssRulePlugin from 'gsap/CSSRulePlugin'

const TweenTimeline: FC = () => {

    const img1 = useRef<HTMLImageElement>(null)
    const img2 = useRef<HTMLImageElement>(null)

    useGSAP(() => {
        const timeline = gsap.timeline();

    })

    return (
        <div className={style.ScrollWrapper}>

            <div className={style.ScrollContainer}>
                <img ref={img1} src='/food1.webp' alt='avt-img' />
            </div>

            <div className={style.ScrollContainer}>
                <img ref={img2} src='/food2.webp' alt='avt-img' />
            </div>

        </div>
    )
}

export default TweenTimeline