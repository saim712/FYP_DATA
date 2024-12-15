// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const UniversityCard = () => {
//   const [universities, setUniversities] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:5000/api/universities')  // Adjust URL if needed
//       .then(response => {
//         setUniversities(response.data);
//       })
//       .catch(error => {
//         console.error('There was an error fetching the universities!', error);
//       });
//   }, []);

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-6">
//       {universities.map((university) => (
//         <div key={university._id} className="max-w-sm rounded-xl overflow-hidden shadow-2xl transform transition duration-500 hover:scale-105 hover:shadow-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
//           <img className="w-full h-56 object-cover rounded-t-xl" src={university.imageUrl} alt={university.name} />
//           <div className="p-6 bg-white rounded-b-xl">
//             <h2 className="text-2xl font-extrabold text-gray-800 hover:text-white transition duration-300">{university.name}</h2>
//             <p className="text-gray-600 text-lg">{university.location}</p>
//             <a href={university.website} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 text-sm font-semibold mt-2 inline-block">Visit Website</a>
            
//             <div className="mt-4">
//               <h3 className="text-lg font-semibold text-gray-700">Courses Offered:</h3>
//               <ul className="list-disc pl-5 space-y-2 text-gray-600">
//                 {university.coursesOffered.map((course, index) => (
//                   <li key={index} className="text-sm">{course.courseName}: {course.description}</li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default UniversityCard;















// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const UniversityCard = () => {
//   const [universities, setUniversities] = useState([]);
//   const [searchLocation, setSearchLocation] = useState('');
//   const [searchCourse, setSearchCourse] = useState('');
//   const [filteredUniversities, setFilteredUniversities] = useState([]);

//   useEffect(() => {
//     // Fetch the universities data from the backend
//     axios.get('http://localhost:3000/api/users/universities') // Adjust URL if needed
//       .then(response => {
//         setUniversities(response.data);
//         setFilteredUniversities(response.data); // Initially, show all universities
//       })
//       .catch(error => {
//         console.error('There was an error fetching the universities!', error);
//       });
//   }, []);

//   // Filter universities based on search input for location and courses
//   useEffect(() => {
//     const filtered = universities.filter((university) => {
//       const isLocationMatch = university.location.toLowerCase().includes(searchLocation.toLowerCase());
//       const isCourseMatch = university.coursesOffered.some(course =>
//         course.courseName.toLowerCase().includes(searchCourse.toLowerCase())
//       );
//       return isLocationMatch && isCourseMatch;
//     });
//     setFilteredUniversities(filtered);
//   }, [searchLocation, searchCourse, universities]);

//   return (
//     <div className="container mx-auto p-6">
//       {/* Search Bar */}
//       <div className="mb-6">
//         <input
//           type="text"
//           placeholder="Search by Location..."
//           value={searchLocation}
//           onChange={(e) => setSearchLocation(e.target.value)}
//           className="p-2 border rounded-md w-full mb-4 sm:w-1/2"
//         />
//         <input
//           type="text"
//           placeholder="Search by Course Offered..."
//           value={searchCourse}
//           onChange={(e) => setSearchCourse(e.target.value)}
//           className="p-2 border rounded-md w-full sm:w-1/2"
//         />
//       </div>

//       {/* Displaying Filtered Universities */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//         {filteredUniversities.map((university) => (
//           <div key={university._id} className="max-w-sm rounded-xl overflow-hidden shadow-2xl transform transition duration-500 hover:scale-105 hover:shadow-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
//             <img className="w-full h-56 object-cover rounded-t-xl" src={university.imageUrl} alt={university.name} />
//             <div className="p-6 bg-white rounded-b-xl">
//               <h2 className="text-2xl font-extrabold text-gray-800 hover:text-white transition duration-300">{university.name}</h2>
//               <p className="text-gray-600 text-lg">{university.location}</p>
//               <a href={university.website} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 text-sm font-semibold mt-2 inline-block">Visit Website</a>

//               <div className="mt-4">
//                 <h3 className="text-lg font-semibold text-gray-700">Courses Offered:</h3>
//                 <ul className="list-disc pl-5 space-y-2 text-gray-600">
//                   {university.coursesOffered.map((course, index) => (
//                     <li key={index} className="text-sm">{course.courseName}: {course.description}</li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default UniversityCard;








import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UniversityCard = () => {
  const [universities, setUniversities] = useState([]);
  const [searchLocation, setSearchLocation] = useState('');
  const [searchCourse, setSearchCourse] = useState('');
  const [filteredUniversities, setFilteredUniversities] = useState([]);

  useEffect(() => {
    // Fetch the universities data from the backend
    axios.get('http://localhost:3000/api/users/universities') // Adjust URL if needed
      .then(response => {
        setUniversities(response.data);
        setFilteredUniversities(response.data); // Initially, show all universities
      })
      .catch(error => {
        console.error('There was an error fetching the universities!', error);
      });
  }, []);

  // Filter universities based on search input for location and courses
  useEffect(() => {
    const filtered = universities.filter((university) => {
      const isLocationMatch = university.location.toLowerCase().includes(searchLocation.toLowerCase());
      const isCourseMatch = university.coursesOffered.some(course =>
        course.courseName.toLowerCase().includes(searchCourse.toLowerCase())
      );
      return isLocationMatch && isCourseMatch;
    });
    setFilteredUniversities(filtered);
  }, [searchLocation, searchCourse, universities]);

  return (
    <div className="container mx-auto p-6">
      {/* Heading and Quote */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Find Your Ideal University</h1>
        <p className="text-lg text-gray-600 mt-2">"Education is the most powerful weapon which you can use to change the world." – Nelson Mandela</p>
      </div>

      {/* Search Bar */}
      <div className="flex justify-center gap-4 mb-8">
        <input
          type="text"
          placeholder="Search by Location..."
          value={searchLocation}
          onChange={(e) => setSearchLocation(e.target.value)}
          className="p-4 border rounded-md w-full sm:w-1/2 text-lg placeholder-gray-500 focus:ring-2 focus:ring-blue-500 transition duration-300"
        />
        <input
          type="text"
          placeholder="Search by Course Offered..."
          value={searchCourse}
          onChange={(e) => setSearchCourse(e.target.value)}
          className="p-4 border rounded-md w-full sm:w-1/2 text-lg placeholder-gray-500 focus:ring-2 focus:ring-blue-500 transition duration-300"
        />
      </div>

      {/* Displaying Filtered Universities */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredUniversities.map((university) => (
          <div key={university._id} className="max-w-sm rounded-xl overflow-hidden shadow-xl transform transition duration-500 hover:scale-105 hover:shadow-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            <div className="p-6 bg-white rounded-xl">
              <h2 className="text-2xl font-extrabold text-gray-800 hover:text-white transition duration-300">{university.name}</h2>
              <p className="text-gray-600 text-lg">{university.location}</p>
              <a href={university.website} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 text-sm font-semibold mt-2 inline-block">Visit Website</a>

              <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-700">Courses Offered:</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  {university.coursesOffered.map((course, index) => (
                    <li key={index} className="text-sm">{course.courseName}: {course.description}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UniversityCard;

