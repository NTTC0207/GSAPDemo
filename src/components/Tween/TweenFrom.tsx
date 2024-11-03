import { useGSAP } from "@gsap/react";
import { FC, useRef, useState ,memo } from "react"
import gsap from "gsap";

const TweenFrom: FC = memo(() => {
    const boxRef = useRef<any>();
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useGSAP(() => {
        gsap.from(boxRef.current, {
            x: 300,
            y: 500,
            duration: 5,
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
                    Tween From {`(${position.x}px,${position.y}px)`}
                </div>
            </div>
        </>
    );
})

TweenFrom.displayName ="TweenFrom"

export default TweenFrom