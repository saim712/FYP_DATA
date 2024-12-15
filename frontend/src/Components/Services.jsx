import React from 'react';
import {Link} from 'react-router-dom'
const Services = () => {
  const services = [
    {
      title: 'Skill Development',
      description: 'Master cutting-edge skills tailored to your career aspirations and industry demands.',
      icon: (
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
          className="h-12 w-12 text-blue-500"
        >
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      ),
      link: '/skills',
    },
    {
      title: 'Mentorship',
      description: 'Connect with industry leaders for personalized guidance and career insights.',
      icon: (
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
          className="h-12 w-12 text-green-500"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
      link: '/mentorship',
    },
    {
      title: 'Restart Your Career',
      description: 'Navigate career transitions confidently with our expert-led relaunch program.',
      icon: (
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
          className="h-12 w-12 text-red-500"
        >
          <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
          <path d="M3 3v5h5"></path>
          <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path>
          <path d="M16 16h5v5"></path>
        </svg>
      ),
      link: '/restart',
    },
    {
      title: 'Resume Development',
      description: 'Craft a compelling resume that showcases your unique skills and experiences.',
      icon: (
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
          className="h-12 w-12 text-purple-500"
        >
          <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
          <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
          <path d="M10 9H8"></path>
          <path d="M16 13H8"></path>
          <path d="M16 17H8"></path>
        </svg>
      ),
      link: '/resume',
    },
    {
      title: 'Personality Development',
      description: 'Boost your confidence, communication, and soft skills for career success.',
      icon: (
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
          className="h-12 w-12 text-orange-500"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M9 9h6"></path>
          <path d="M9 15h6"></path>
        </svg>
      ),
      link: '/personality-development',
    },
  ];

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-center mb-8">Explore Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gradient-to-br p-6 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 ease-in-out"
            style={{
              background: `linear-gradient(135deg, ${index % 2 === 0 ? '#f0f8ff' : '#e6ffe6'} 0%, ${index % 2 === 0 ? '#a2d5f2' : '#b2f2b2'} 100%)`,
            }}
          >
            <div className="flex flex-col items-center h-full">
              {service.icon}
              <h3 className="mt-4 text-xl font-semibold text-gray-900">{service.title}</h3>
              <p className="mt-2 text-gray-700 text-center flex-grow">{service.description}</p>
              <Link
                className="inline-flex items-center justify-center text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 mt-4 bg-white text-gray-800 hover:bg-gray-100 font-semibold py-2 px-4 border border-gray-400 rounded-full shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
                to={service.link}
              >
                Explore
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
                  className="ml-2 h-4 w-4 inline"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
