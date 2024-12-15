import React from "react";

const Mission = () => {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-center mb-8">Our Mission</h2>
      <div className="bg-white rounded-lg shadow-lg p-8">
        <p className="text-lg text-gray-700 mb-6">
          At FutureQuest, we're committed to empowering individuals to navigate their career journeys with confidence and purpose. Our mission is to provide cutting-edge tools and resources that help you discover your true potential, make informed career decisions, and achieve your professional goals.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big h-6 w-6 text-green-500 mr-2">
              <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
              <path d="m9 11 3 3L22 4"></path>
            </svg>
            <span className="text-gray-700">Personalized Guidance</span>
          </div>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up h-6 w-6 text-blue-500 mr-2">
              <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
              <polyline points="16 7 22 7 22 13"></polyline>
            </svg>
            <span className="text-gray-700">Data-Driven Insights</span>
          </div>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap h-6 w-6 text-yellow-500 mr-2">
              <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
            </svg>
            <span className="text-gray-700">Continuous Innovation</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
