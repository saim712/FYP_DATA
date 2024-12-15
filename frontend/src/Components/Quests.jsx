import React, { useState } from 'react';

const Quests = () => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Career Assessment</h1>
      <div className="bg-white shadow rounded-lg p-6 mb-8">
        <div className="mb-6">
          <div
            aria-valuemax="100"
            aria-valuemin="0"
            role="progressbar"
            data-state="indeterminate"
            data-max="100"
            className="relative h-4 overflow-hidden rounded-full bg-secondary w-full"
          >
            <div
              data-state="indeterminate"
              data-max="100"
              className="h-full w-full flex-1 bg-primary transition-all"
              style={{ transform: 'translateX(-80%)' }}
            ></div>
          </div>
        </div>

        <h2 className="text-xl font-semibold mb-4">I enjoy solving complex problems.</h2>
        <div role="radiogroup" aria-required="false" dir="ltr" className="grid gap-2 space-y-4" tabIndex={0} style={{ outline: 'none' }}>
          {['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'].map((label) => (
            <div key={label} className="flex items-center space-x-2">
              {/* Ensure each radio button has an onChange handler */}
              <input
                type="radio"
                id={label}
                name="problemSolving"
                value={label}
                checked={selectedValue === label}
                onChange={handleChange} // Ensure that onChange is set to handle state change
                className="form-radio text-primary h-4 w-4"
              />
              <label
                htmlFor={label}
                className="text-sm font-medium leading-none cursor-pointer"
              >
                {label}
              </label>
            </div>
          ))}
        </div>
      </div>

      <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full">
        Next Question
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right ml-2 h-4 w-4">
          <path d="M5 12h14"></path>
          <path d="m12 5 7 7-7 7"></path>
        </svg>
      </button>
    </div>
  );
};

export default Quests;
