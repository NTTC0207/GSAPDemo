import { FC, useRef, useState, memo } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

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
            <div ref={boxRef} style={{ width: '100%', height: '100%', borderLeft: '1px dashed white', borderTop: '1px dashed white', position: 'absolute' }}>
                <div style={{ width: '200px', height: '200px', background: 'red', position: 'absolute' }}>
                    Tween To  {`(${position.x}px,${position.y}px)`}
                </div>
            </div >

        </>
    );
});


TweenTo.displayName = "TweenTo"

export default TweenTo;
