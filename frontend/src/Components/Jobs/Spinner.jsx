import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

const Spinner = ({ loading }) => {
  return (
    <div
      className={`flex justify-center items-center min-h-screen ${loading ? '' : 'hidden'}`}
    >
      <ClipLoader
        color='#4338ca'
        loading={loading}
        size={150}
      />
    </div>
  );
};

export default Spinner;
