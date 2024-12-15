// AboutUs.jsx
import React from 'react';

const AboutUs = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
      <div className="bg-white rounded-lg shadow-lg p-8">
        <p className="text-lg text-gray-700 mb-6">
          FutureQuest was founded by a team of career experts, data scientists, and technology innovators who recognized the need for a more holistic and data-driven approach to career development. We combine years of industry experience with cutting-edge technology to provide you with the most comprehensive career guidance platform available.
        </p>
        <p className="text-lg text-gray-700">
          Our team is passionate about helping individuals like you navigate the complexities of the modern job market and find fulfilling careers that align with your unique skills, interests, and values. With FutureQuest, you're not just finding a job – you're charting a course for long-term success and satisfaction in your professional life.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
