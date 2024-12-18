import { FC, useRef } from "react";
import { gsap, Power3 } from "gsap";
import { useGSAP } from "@gsap/react";
import CssRulePlugin from 'gsap/CSSRulePlugin'

gsap.registerPlugin(CSSRule, CssRulePlugin);
const WithTimeline: FC = () => {

    let i1 = useRef(null)
    let i2 = useRef(null)
    let i3 = useRef(null)
    let banner = useRef(null)
    let logo = useRef(null)
    let ImageReveal = CssRulePlugin.getRule(".banner-wrapper:after")
    let slogan = useRef(null)
    let t1 = gsap.timeline()

    useGSAP(() => {
        t1.to(i1.current, { duration: 0.2, display: "block" })
            .to(i1.current, { display: "none" })
            .to(i2.current, { duration: 0.2, display: "block" })
            .to(i2.current, { display: "none" })
            .to(i3.current, { duration: 0.2, display: "block" })
            .to(i3.current, { display: "none" });

        t1.add("start")
            .to(ImageReveal, { duration: 1.5, width: "0%", ease: Power3.easeInOut }, "start")
            .to(logo.current, { duration: 1.5, scale: 1.2, ease: Power3.easeInOut }, "start")
            .to(banner.current, { duration: 1.5, scale: 1.1, ease: Power3.easeInOut }, "start")
            .to(slogan.current, { duration: 0.5, ease: Power3.easeInOut, css: { transform: "translateY(0%)" } });

    })


    // gsap.to(i1.current, { duration: 0.2, css: { display: "block" } })
    // gsap.to(i1.current, { css: { display: "none" }, delay: 0.4 }) 
    // gsap.to(i2.current, { duration: 0.2, css: { display: "block" }, delay: 1 }) 
    // gsap.to(i2.current, { css: { display: "none" }, delay: 1.2 }) 
    // gsap.to(i3.current, { duration: 0.2, css: { display: "block" }, delay: 2 }) 
    // gsap.to(i3.current, { css: { display: "none" }, delay: 2 }); 

  
    // gsap.to(ImageReveal, { duration: 1, width: "0%", ease: Power2.easeInOut, delay: 2.5 });
    // gsap.to(logo.current, { duration: 1.5, scale: 1.2, ease: Power2.easeInOut, delay: 2.0 });
    // gsap.to(banner.current, { duration: 1.5, scale: 1.1, ease: Power2.easeInOut, delay: 2.0 });
    // gsap.to(slogan.current, { duration: 0.5, ease: Power2.easeInOut, css: { transform: "translateY(0%)" }, delay: 2.0 });

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

                <div className="image2" ref={i2} style={{ display: 'none' }} >
                    <img alt="image21" src="/candy2.webp" />
                </div>

                <div className="image3" ref={i3} style={{ display: 'none' }}>
                    <img alt="image32" src="/candy3.webp" />
                </div>

            </div>
        </section>
    )
}

export default WithTimeline