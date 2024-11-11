import { useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TweenDemo, TimeLineDemo, ScrollTriggerDemo, StaggerDemo } from "./pages";
import LocomotiveScroll from "locomotive-scroll";
import {
  Basic,
  TweenFrom,
  TweenFromTo,
  TweenTo,
  WithTimeline,
  WithoutTimeline,
  TextAnimation
} from "./components";

const App = () => {
  const locomotiveScrollRef = useRef<any>(null);
  useEffect(() => {
    locomotiveScrollRef.current = new LocomotiveScroll();
  }, []);

  return (
    <Router>
      <Routes>
        {/* Tween */}
        <Route path="/tween" element={<TweenDemo />}>
          <Route path="tween-to" element={<TweenTo />} />
          <Route path="tween-from" element={<TweenFrom />} />
          <Route path="tween-fromTo" element={<TweenFromTo />} />
        </Route>
        {/* Stagger */}
        <Route path="/stagger" element={<StaggerDemo />}>
          <Route path="text" element={<TextAnimation/>} />
        </Route>
        {/* TimeLine */}
        <Route path="/timeline" element={<TimeLineDemo />}>
          <Route path="without-timeline" element={<WithoutTimeline />} />
          <Route path="with-timeline" element={<WithTimeline />} />
        </Route>
        {/* ScrollTrigger */}
        <Route path="/scrolltrigger" element={<ScrollTriggerDemo />}>
          <Route path="/scrolltrigger/Basic" element={<Basic />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
