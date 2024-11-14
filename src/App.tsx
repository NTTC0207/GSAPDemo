import { Routes, Route, useLocation } from "react-router-dom";
import { TweenDemo, TimeLineDemo, ScrollTriggerDemo, StaggerDemo } from "./pages";
import {
  Basic,
  TweenFrom,
  TweenFromTo,
  TweenTo,
  WithTimeline,
  WithoutTimeline,
  TextAnimation,
  Example
} from "./components";
import { AnimatePresence } from "framer-motion";
import PageTransition from "./components/pageTransition";
import PageTransitionDemo from "./pages/pageTransition";

const App = () => {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Tween */}
        <Route path="/tween" element={<TweenDemo />}>
          <Route path="tween-to" element={<TweenTo />} />
          <Route path="tween-from" element={<TweenFrom />} />
          <Route path="tween-fromTo" element={<TweenFromTo />} />
        </Route>

        {/* Stagger */}
        <Route path="/stagger" element={<StaggerDemo />}>
          <Route path="text" element={<TextAnimation />} />
        </Route>
        {/* TimeLine */}
        <Route path="/timeline" element={<TimeLineDemo />}>
          <Route path="without-timeline" element={<WithoutTimeline />} />
          <Route path="with-timeline" element={<WithTimeline />} />
        </Route>
        {/* ScrollTrigger */}
        <Route path="/scrolltrigger" element={<ScrollTriggerDemo />}>
          <Route path="/scrolltrigger/Basic" element={<Basic />} />
          <Route path="/scrolltrigger/example" element={<Example />} />
        </Route>

        <Route path="/pageTransition" element={<PageTransition><PageTransitionDemo /></PageTransition>}>
          <Route path="test" element={<TweenDemo />} />
          <Route path="test2" element={<StaggerDemo />} />
        </Route>

      </Routes>
    </AnimatePresence>
  );
};

export default App;
