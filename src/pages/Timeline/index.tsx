import { Outlet } from "react-router-dom"
import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom"
const TimeLineDemo = () => {
    const navigate = useNavigate();
    return (
        <div style={{ position: 'relative', height: '100vh', width: '100vw' }}>
            <div style={{ position: 'absolute', top: '0', left: '0', zIndex: 10 }}>
                <Button variant="outlined" onClick={()=>navigate('/timeline/with-timeline')}> With Timeline</Button>
                <Button variant="outlined" onClick={()=>navigate('/timeline/without-timeline')}> Without Timeline</Button>
                <Button variant="outlined" onClick={()=>navigate('/tween/tween-to')}>Tween</Button>
            </div>
            <Outlet />
        </div>

    )
}

export default TimeLineDemo