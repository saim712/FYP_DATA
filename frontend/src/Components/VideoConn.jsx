import {Routes,Route} from 'react-router-dom'
import Home from './VideoCalling/HomeVideo';
import Room from './VideoCalling/RoomVideo';
function VideoConn() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/room/:roomid" element={<Room />} />
      </Routes>
    </div>
  );
}

export default VideoConn;