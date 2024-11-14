import { FC, useRef, Key } from "react";
import gsap from "gsap";
import { ScrollTrigger, TextPlugin } from "gsap/all";
import { useGSAP } from "@gsap/react";
import styles from './style.module.scss';
import SplitType from "split-type";
import LocomotiveScroll from "locomotive-scroll";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const Example: FC = () => {
    const wrapperRef = useRef<any>();
    const titleRef = useRef<any>();
    const imgRef = useRef<any>();
    const imgContainerRef = useRef<any>();
    const bgRefs = useRef<any>([]);
    const textRefs = useRef<any>([]);
    const locomotiveScrollRef = useRef<any>(null);


    useGSAP(() => {
        locomotiveScrollRef.current = new LocomotiveScroll();
        const bgArray = gsap.utils.toArray(bgRefs.current);

        gsap.timeline({
            scrollTrigger: {
                trigger: wrapperRef.current,
                start: "top top",
                end: "+=250%",
                pin: true,
                scrub: true,
                // markers: true
            }
        })
            .to(imgRef.current, {
                scale: 2,
                z: 350,
                transformOrigin: "center center",
                ease: "power1.inOut",
            })
            .to(titleRef.current, {
                duration: 2,
                text: "Welcome to my sharing",
            }).call(() => {
                bgArray.forEach((bgRef: any, i: Key) => {
                    // @ts-expect-error
                    const text = new SplitType(textRefs.current[i], { types: 'chars' });
                    const chars = text.chars;
                    if (!bgRef) return;

                    let getRatio = (el: HTMLElement) => window.innerHeight / (window.innerHeight + el.offsetHeight);

                    const timeline = gsap.timeline()
                    timeline.fromTo(bgRef, {
                        backgroundPosition: () => i === 0 ? "50% 0px" : `50% ${-window.innerHeight * getRatio(bgRef)}px`,
                    }, {
                        backgroundPosition: () => `50% ${window.innerHeight * (1 - getRatio(bgRef))}px`,
                        ease: "none",
                        scrollTrigger: {
                            trigger: bgRef,
                            start: i === 0 ? "top top" : "top bottom",
                            end: "bottom top",
                            scrub: true,
                            invalidateOnRefresh: true,
                        }
                    }).fromTo(chars, { opacity: 0, y: 100 }, {
                        y: 0,
                        opacity: 1,
                        stagger: 0.05,
                        duration: 2,
                        scrollTrigger: {
                            trigger: chars,
                            start: "top 60%",
                            end: "top 60%",
                            scrub: 4,
                            // invalidateOnRefresh: true,
                            //markers: true
                        }
                    });
                });
            });

    });

    return (
        <div className={styles.wrapper} ref={wrapperRef}>
            <div className={styles.content}>
                <section className={`${styles.section} ${styles.hero}`} ref={imgContainerRef}>
                    <div ref={titleRef}></div>
                </section>
                <section className={`${styles.section} ${styles.hero}`} ref={ref => bgRefs.current[0] = ref}>
                    <div ref={ref => textRefs.current[0] = ref}>Hello World</div>
                </section>
                <section className={`${styles.section} ${styles.hero}`} ref={ref => bgRefs.current[1] = ref}>
                    <div ref={ref => textRefs.current[1] = ref}>Hello World2</div>
                </section>
                <section className={`${styles.section} ${styles.hero}`} ref={ref => bgRefs.current[2] = ref}>
                    <div ref={ref => textRefs.current[2] = ref}>Hello World3</div>
                </section>
                <section className={`${styles.section} ${styles.hero}`} ref={ref => bgRefs.current[3] = ref}>
                    <div ref={ref => textRefs.current[3] = ref}>Hello World4</div>
                </section>
            </div>
            <div className={styles.imageContainer}>
                <img
                    src='/window.webp'
                    alt="window"
                    ref={imgRef}
                />
            </div>
        </div>
    );
};

export default Example;