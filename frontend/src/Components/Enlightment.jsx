import React from 'react';
import {Link} from 'react-router-dom'

const Enlightment = () => {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-center mb-8">Why Choose FutureQuest?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Career Assessment */}
        <div className="rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="flex items-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-open h-8 w-8 text-blue-500">
              <path d="M12 7v14"></path>
              <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
            </svg>
            <h2 className="ml-3 text-xl font-semibold text-gray-900">Career Assessment</h2>
          </div>
          <p className="text-gray-600 mb-4">Discover your ideal career path through our comprehensive assessment.</p>
          <Link to="/assessment"  rel="noopener noreferrer">
            <button className="justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 underline-offset-4 hover:underline h-10 text-blue-600 hover:text-blue-800 font-medium inline-flex items-center p-0">
              Visit Link
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right ml-1 h-4 w-4">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </button>
          </Link>
        </div>

        {/* Job Search */}
        <div className="rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-green-50 to-emerald-100">
          <div className="flex items-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-briefcase h-8 w-8 text-green-500">
              <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              <rect width="20" height="14" x="2" y="6" rx="2"></rect>
            </svg>
            <h2 className="ml-3 text-xl font-semibold text-gray-900">Job Search</h2>
          </div>
          <p className="text-gray-600 mb-4">Find the perfect job opportunity tailored to your skills and preferences.</p>
          <Link to="/jobs"  rel="noopener noreferrer">
            <button className="justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 underline-offset-4 hover:underline h-10 text-blue-600 hover:text-blue-800 font-medium inline-flex items-center p-0">
              Visit Link
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right ml-1 h-4 w-4">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </button>
          </Link>
        </div>

        {/* Mentorship */}
        <div className="rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-purple-50 to-fuchsia-100">
          <div className="flex items-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users h-8 w-8 text-purple-500">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
            <h2 className="ml-3 text-xl font-semibold text-gray-900">Mentorship</h2>
          </div>
          <p className="text-gray-600 mb-4">Connect with experienced professionals for guidance and support.</p>
          <Link to="/mentors" rel="noopener noreferrer">
            <button className="justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 underline-offset-4 hover:underline h-10 text-blue-600 hover:text-blue-800 font-medium inline-flex items-center p-0">
              Visit Link
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right ml-1 h-4 w-4">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </button>
          </Link>
        </div>
        {/* Resume Generator */}
        <div className="rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-green-50 to-emerald-100">
          <div className="flex items-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-briefcase h-8 w-8 text-green-500">
              <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              <rect width="20" height="14" x="2" y="6" rx="2"></rect>
            </svg>
            <h2 className="ml-3 text-xl font-semibold text-gray-900">Resume Generator</h2>
          </div>
          <p className="text-gray-600 mb-4">Make the resume without any cost .</p>
          <Link to="/gencv"  rel="noopener noreferrer">
            <button className="justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 underline-offset-4 hover:underline h-10 text-blue-600 hover:text-blue-800 font-medium inline-flex items-center p-0">
              Visit Link
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right ml-1 h-4 w-4">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </button>
          </Link>
        </div>


        {/* Career Assessment */}
        <div className="rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-green-50 to-emerald-100">
          <div className="flex items-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-briefcase h-8 w-8 text-green-500">
              <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              <rect width="20" height="14" x="2" y="6" rx="2"></rect>
            </svg>
            <h2 className="ml-3 text-xl font-semibold text-gray-900">Career Asessment</h2>
          </div>
          <p className="text-gray-600 mb-4">Find the career that best suits you .</p>
          <Link to="/assessment"  rel="noopener noreferrer">
            <button className="justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 underline-offset-4 hover:underline h-10 text-blue-600 hover:text-blue-800 font-medium inline-flex items-center p-0">
              Visit Link
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right ml-1 h-4 w-4">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Enlightment;
