import { useEffect, useRef } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { TweenDemo } from './pages';
import LocomotiveScroll from 'locomotive-scroll';
import { TweenFrom, TweenFromTo, TweenTo } from './components/Tween';
import WithoutTimeline from './components/TimeLine/WIthoutTimeline';
import WithTimeline from './components/TimeLine/WithTimeline';
import TimeLineDemo from './pages/Timeline';


const App = () => {
  const locomotiveScrollRef = useRef<any>(null);
  useEffect(() => {
    locomotiveScrollRef.current = new LocomotiveScroll();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path='/tween' element={<TweenDemo />} >
          <Route path="tween-to" element={<TweenTo />} />
          <Route path="tween-from" element={<TweenFrom />} />
          <Route path="tween-fromTo" element={<TweenFromTo />} />
        </Route>
        <Route path='/timeline' element={<TimeLineDemo/>} >
          <Route path='without-timeline' element={<WithoutTimeline />} />
          <Route path='with-timeline' element={<WithTimeline />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
