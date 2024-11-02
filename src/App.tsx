import { useEffect, useRef } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { TweenDemo, ScrollTriggerDemo } from './pages';
import LocomotiveScroll from 'locomotive-scroll';

const App = () => {
  const locomotiveScrollRef = useRef<any>(null);
  useEffect(() => {
    locomotiveScrollRef.current = new LocomotiveScroll();
  }, []);

  return (
    <>

      <Router>
        <Routes>
          <Route path='/' element={<TweenDemo />} />
          <Route path='/' element={<ScrollTriggerDemo />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
