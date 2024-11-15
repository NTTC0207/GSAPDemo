import { FC, useRef } from "react";
import style from './style.module.scss'

const TweenTimeline: FC = () => {

    const img1 = useRef<HTMLImageElement>(null)
    const img2 = useRef<HTMLImageElement>(null)

    // useGSAP(() => {
    //     const timeline = gsap.timeline();

    // })

    return (
        <div className={style.scrollWrapper}>

            <div className={style.scrollContainer}>
                <img ref={img1} src='/food1.webp' alt='avt-img' />
            </div>

            <div className={style.scrollContainer}>
                <img ref={img2} src='/food2.webp' alt='avt-img' />
            </div>

        </div>
    )
}

export default TweenTimeline