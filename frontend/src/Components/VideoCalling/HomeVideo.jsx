import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

function HomeVideo() {
  const [value, setvalue] = useState('');
  const navigate = useNavigate();

  const handleRoomJoin = useCallback(() => {
    navigate(`/joinroom/myroom/${value}`);
  }, [navigate, value]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 flex flex-col items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Welcome to Video Calling App</h1>
        <p className="text-lg sm:text-xl text-white opacity-90 mb-8">Join a room and start video calling with your Mentor.</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 sm:p-10 max-w-md w-full">
        <input 
          type="text" 
          placeholder="Enter Room Code" 
          onChange={e => setvalue(e.target.value)} 
          className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button 
          onClick={handleRoomJoin} 
          className="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
          Join Room
        </button>
      </div>

      <footer className="mt-10 text-white text-sm opacity-70">
        <p>Powered by <span className="font-semibold">Future Quest</span></p>
      </footer>
    </div>
  );
}

export default HomeVideo;
