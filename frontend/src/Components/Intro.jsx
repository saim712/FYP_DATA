import React from 'react';
import {Link} from 'react-router-dom';

const Intro = () => {
  return (
    <header className="text-center mb-16 mt-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Welcome to FutureQuest
      </h1>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
        Discover your career path and unlock your potential with our innovative
        tools and expert guidance.
      </p>
      <Link
        to="/login"
        className="inline-flex items-center justify-center text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1"
      >
        Get Started
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-arrow-right ml-2 h-5 w-5 inline"
        >
          <path d="M5 12h14"></path>
          <path d="m12 5 7 7-7 7"></path>
        </svg>
      </Link>
    </header>
  );
};

export default Intro;
