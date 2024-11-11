import { FC, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import style from "./style.module.scss";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger, gsap);
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
        // opacity: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          markers: true,
          start: "center center",
          end: "+=500",
          // onEnter  onLeave onEnterBack onLeaveback
          // toggleActions:"play none none none",
           scrub: 3,
           pin: true
        },
      }
    );
  });

  return (
    <div className={style.ScrollWrapper}>
      <section className={style.ScrollSection}></section>
      <section className={style.ScrollSection} ref={containerRef}>
        <div className={style.ScrollHide}>
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
