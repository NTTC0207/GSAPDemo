import { FC, useRef, useEffect } from "react";
import { gsap, Power2 } from "gsap";
import CssRulePlugin from 'gsap/CSSRulePlugin';
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(CssRulePlugin);

const WithoutTimeline: FC = () => {
    const i1 = useRef(null);
    const i2 = useRef(null);
    const i3 = useRef(null);
    const banner = useRef(null);
    const logo = useRef(null);
    const ImageReveal = CssRulePlugin.getRule(".banner-wrapper:after");
    const slogan = useRef(null);

    useGSAP(() => {
        gsap.to(i1.current, { duration: 0.2, css: { display: "block" } })
        gsap.to(i1.current, { css: { display: "none" }, delay: 0.4 }) 
        gsap.to(i2.current, { duration: 0.2, css: { display: "block" }, delay: 1 }) 
        gsap.to(i2.current, { css: { display: "none" }, delay: 1.2 }) 
        gsap.to(i3.current, { duration: 0.2, css: { display: "block" }, delay: 2 }) 
        gsap.to(i3.current, { css: { display: "none" }, delay: 2 }); 

      
        gsap.to(ImageReveal, { duration: 1, width: "0%", ease: Power2.easeInOut, delay: 2.5 });
        gsap.to(logo.current, { duration: 1.5, scale: 1.2, ease: Power2.easeInOut, delay: 2.0 });
        gsap.to(banner.current, { duration: 1.5, scale: 1.1, ease: Power2.easeInOut, delay: 2.0 });
        gsap.to(slogan.current, { duration: 0.5, ease: Power2.easeInOut, css: { transform: "translateY(0%)" }, delay: 2.0 });
    });

    return (
        <section style={{ width: "100%", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <h1 className="Logo" ref={logo}>Lorem</h1>
            <div style={{ position: 'absolute', width: "100%", height: "100vh" }}>
                <div style={{ display: 'flex', justifyContent: "center", alignItems: 'center', height: "100vh" }}>
                    <p className="slogan"><span ref={slogan}>Lorem ipsum dolor, sit amet.</span></p>
                </div>
            </div>

            <div className="banner-wrapper">
                <img className="Banner-img" ref={banner} src="/banner.webp" alt="banner" />
            </div>

            <div className="show-1">
                <div className="image1" ref={i1} style={{ display: 'none' }}>
                    <img alt="image12" src="/candy.webp" />
                </div>

                <div className="image2" ref={i2} style={{ display: 'none' }}>
                    <img alt="image21" src="/candy.webp" />
                </div>

                <div className="image3" ref={i3} style={{ display: 'none' }}>
                    <img alt="image32" src="/candy.webp" />
                </div>
            </div>
        </section>
    );
};

export default WithoutTimeline;
