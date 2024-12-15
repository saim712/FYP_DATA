import React from 'react';
import { Link } from 'react-router-dom';
import HomeVideo from '../Components/VideoCalling/HomeVideo';

function MentorsList() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 flex flex-col items-center justify-center px-4">
        <h1 className="text-center text-white text-3xl">
            herer the list of mentors profile will be shown
        </h1>

<Link
        to="/mentors/payment"
        className="mt-8 bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
      >
        Pay Fee
      </Link>

      <HomeVideo />
      
    </div>
  );
}

export default MentorsList;
