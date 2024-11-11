import { FC, useRef, useState, memo } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import style from './style.module.scss'

const TweenTo: FC = memo(() => {
    const boxRef = useRef<any>();
    const [position, setPosition] = useState({ x: 0, y: 0 })

    useGSAP(() => {
        gsap.to(boxRef.current, {
            x: 300,
            y: 200,
            duration: 3,
            // repeat: -1,
            // yoyo:true,
            onUpdate: () => {
                const x = gsap.getProperty(boxRef.current, "x");
                const y = gsap.getProperty(boxRef.current, "y");
                // @ts-ignore
                setPosition({ x: Math.floor(x), y: Math.floor(y) });
            }
        });
    }, []);

    return (
        <>
            <div ref={boxRef} className={style.squareContainer}>
                <div className={style.square}>
                    Tween To  {`(${position.x}px,${position.y}px)`}
                </div>
            </div >

        </>
    );
});


TweenTo.displayName = "TweenTo"

export default TweenTo;
