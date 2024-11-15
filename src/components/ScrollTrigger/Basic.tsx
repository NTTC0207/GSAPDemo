import { FC, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import style from "./style.module.scss";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);
const Basic: FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const splitText = new SplitType(textRef.current as HTMLHeadingElement);
    const chars = splitText.chars;
    gsap.fromTo(
      chars,
      {
        y: 50,
      },
      {
        y: 0,
        duration: 0.5,
        stagger: 0.05,
      }
    );
  });

  return (
    <div className={style.scrollWrapper}>
      <section className={style.scrollSection}></section>
      <section className={style.scrollSection} ref={containerRef}>
        <div className={style.scrollHide}>
          <div ref={textRef} style={{ fontSize: "2rem" }}>
            Lorem ipsum dolor sit amet consectetur.
          </div>
        </div>
      </section>
      <section className={style.ScrollSection}></section>
    </div>
  );
};

export default Basic;
