import { FC, useRef } from "react";
import SplitType from "split-type";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import style from "./style.module.scss";

const TextAnimation: FC = () => {
  const textRef = useRef<HTMLHeadingElement>(null);
  useGSAP(() => {
     const splitText = new SplitType(textRef.current as HTMLHeadingElement);
    const chars = splitText.chars;
    console.log(chars)

    gsap.fromTo(
       chars,
      //textRef.current,
      {
        y: 50,
      },
      {
        duration: 0.5,
        y: 0,
         stagger: 0.05,
      }
    );
  });

  return (
    <div className={style.container}>
      <h1 className={style.text} ref={textRef}>
        Hello World
      </h1>
    </div>
  );
};

export default TextAnimation;
