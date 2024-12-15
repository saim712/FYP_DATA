// import React, { useState } from "react";
// import axios from "axios";

// function CareerRecommendation() {
//   const [formData, setFormData] = useState({
//     gender: "", // 0 for Male, 1 for Female
//     part_time_job: false,
//     absence_days: 0,
//     extracurricular_activities: false,
//     weekly_self_study_hours: 0,
//     math_score: 0,
//     history_score: 0,
//     physics_score: 0,
//     chemistry_score: 0,
//     biology_score: 0,
//     english_score: 0,
//     geography_score: 0,
//   });

//   const [result, setResult] = useState(null);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === "checkbox" ? checked : value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         "http://localhost:3000/api/users/career-recommendation", // Backend route
//         formData
//       );
//       setResult(response.data.prediction); // Assuming response contains { prediction }
//     } catch (error) {
//       console.error("Error predicting career:", error);
//     }
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">
//       <h2 className="text-3xl font-bold text-center mb-6">Career Recommendation</h2>
//       <form onSubmit={handleSubmit} className="space-y-6">
//         <div className="flex justify-between items-center">
//           <label className="text-lg">Gender:</label>
//           <select
//             name="gender"
//             value={formData.gender}
//             onChange={handleChange}
//             className="p-2 border rounded-md"
//           >
//             <option value="">Select</option>
//             <option value="0">Male</option>
//             <option value="1">Female</option>
//           </select>
//         </div>

//         <div className="flex justify-between items-center">
//           <label className="text-lg">Part-time Job:</label>
//           <input
//             type="checkbox"
//             name="part_time_job"
//             checked={formData.part_time_job}
//             onChange={handleChange}
//             className="p-2 border rounded-md"
//           />
//         </div>

//         <div className="flex justify-between items-center">
//           <label className="text-lg">Absence Days:</label>
//           <input
//             type="number"
//             name="absence_days"
//             value={formData.absence_days}
//             onChange={handleChange}
//             className="p-2 border rounded-md"
//           />
//         </div>

//         <div className="flex justify-between items-center">
//           <label className="text-lg">Extracurricular Activities:</label>
//           <input
//             type="checkbox"
//             name="extracurricular_activities"
//             checked={formData.extracurricular_activities}
//             onChange={handleChange}
//             className="p-2 border rounded-md"
//           />
//         </div>

//         <div className="flex justify-between items-center">
//           <label className="text-lg">Weekly Self Study Hours:</label>
//           <input
//             type="number"
//             name="weekly_self_study_hours"
//             value={formData.weekly_self_study_hours}
//             onChange={handleChange}
//             className="p-2 border rounded-md"
//           />
//         </div>

//         <h3 className="text-2xl font-semibold mt-4">Scores:</h3>
//         {["math", "history", "physics", "chemistry", "biology", "english", "geography"].map((subject) => (
//           <div className="flex justify-between items-center" key={subject}>
//             <label className="text-lg capitalize">{subject} Score:</label>
//             <input
//               type="number"
//               name={`${subject}_score`}
//               value={formData[`${subject}_score`]}
//               onChange={handleChange}
//               className="p-2 border rounded-md"
//             />
//           </div>
//         ))}

//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white p-3 rounded-md font-semibold mt-6 hover:bg-blue-600 transition"
//         >
//           Get Recommendation
//         </button>
//       </form>

//       {result && (
//         <div className="mt-6 text-lg font-semibold">
//           <p className="text-green-500">Recommended Career: {result}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default CareerRecommendation;














// import React, { useState } from "react";
// import axios from "axios";

// const CareerRecommendation = () => {
//   const [formData, setFormData] = useState({
//     gender: "",
//     partTimeJob: false,
//     absenceDays: 0,
//     extracurricularActivities: false,
//     weeklySelfStudyHours: 0,
//     mathScore: 0,
//     historyScore: 0,
//     physicsScore: 0,
//     chemistryScore: 0,
//     biologyScore: 0,
//     englishScore: 0,
//     geographyScore: 0,
//     totalScore: 0,
//     averageScore: 0,
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false); // For disabling button and changing color

//   // Handle form input changes
//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === "checkbox" ? checked : value,
//     });
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     setIsSubmitting(true); // Disable the button when submitting

//     // Format the data to match the function's signature
//     const {
//       gender,
//       partTimeJob,
//       absenceDays,
//       extracurricularActivities,
//       weeklySelfStudyHours,
//       mathScore,
//       historyScore,
//       physicsScore,
//       chemistryScore,
//       biologyScore,
//       englishScore,
//       geographyScore,
//       totalScore,
//       averageScore,
//     } = formData;

//     const formattedData = {
//       gender,
//       part_time_job: partTimeJob,
//       absence_days: absenceDays,
//       extracurricular_activities: extracurricularActivities,
//       weekly_self_study_hours: weeklySelfStudyHours,
//       math_score: mathScore,
//       history_score: historyScore,
//       physics_score: physicsScore,
//       chemistry_score: chemistryScore,
//       biology_score: biologyScore,
//       english_score: englishScore,
//       geography_score: geographyScore,
//       total_score: totalScore,
//       average_score: averageScore,
//     };

//     try {
//       // Send the data to your backend
//       const response = await axios.post("http://localhost:3000/api/users/career-recommendation", formattedData);
//       console.log("Recommendation response:", response.data);
//     } catch (error) {
//       console.error("Error sending data:", error);
//     }

//     setIsSubmitting(false); // Re-enable the button after submission
//   };

//   return (
//     <form onSubmit={handleSubmit} className="max-w-3xl mx-auto p-4 space-y-4">
//       <div className="flex flex-col">
//         <label className="font-semibold">Gender (Female / Male):</label>
//         <input
//           type="text"
//           name="gender"
//           value={formData.gender}
//           onChange={handleChange}
//           className="p-2 border border-gray-300 rounded-md"
//         />
//       </div>
//       <div className="flex items-center">
//         <label className="mr-2">Part-Time Job:</label>
//         <input
//           type="checkbox"
//           name="partTimeJob"
//           checked={formData.partTimeJob}
//           onChange={handleChange}
//           className="form-checkbox"
//         />
//       </div>
//       <div className="flex flex-col">
//         <label className="font-semibold">Absence Days:</label>
//         <input
//           type="number"
//           name="absenceDays"
//           value={formData.absenceDays}
//           onChange={handleChange}
//           className="p-2 border border-gray-300 rounded-md"
//         />
//       </div>
//       <div className="flex items-center">
//         <label className="mr-2">Extracurricular Activities:</label>
//         <input
//           type="checkbox"
//           name="extracurricularActivities"
//           checked={formData.extracurricularActivities}
//           onChange={handleChange}
//           className="form-checkbox"
//         />
//       </div>
//       <div className="flex flex-col">
//         <label className="font-semibold">Weekly Self-Study Hours:</label>
//         <input
//           type="number"
//           name="weeklySelfStudyHours"
//           value={formData.weeklySelfStudyHours}
//           onChange={handleChange}
//           className="p-2 border border-gray-300 rounded-md"
//         />
//       </div>
//       <div className="grid grid-cols-2 gap-4">
//         <div className="flex flex-col">
//           <label className="font-semibold">Math Score:</label>
//           <input
//             type="number"
//             name="mathScore"
//             value={formData.mathScore}
//             onChange={handleChange}
//             className="p-2 border border-gray-300 rounded-md"
//           />
//         </div>
//         <div className="flex flex-col">
//           <label className="font-semibold">History Score:</label>
//           <input
//             type="number"
//             name="historyScore"
//             value={formData.historyScore}
//             onChange={handleChange}
//             className="p-2 border border-gray-300 rounded-md"
//           />
//         </div>
//         <div className="flex flex-col">
//           <label className="font-semibold">Physics Score:</label>
//           <input
//             type="number"
//             name="physicsScore"
//             value={formData.physicsScore}
//             onChange={handleChange}
//             className="p-2 border border-gray-300 rounded-md"
//           />
//         </div>
//         <div className="flex flex-col">
//           <label className="font-semibold">Chemistry Score:</label>
//           <input
//             type="number"
//             name="chemistryScore"
//             value={formData.chemistryScore}
//             onChange={handleChange}
//             className="p-2 border border-gray-300 rounded-md"
//           />
//         </div>
//         <div className="flex flex-col">
//           <label className="font-semibold">Biology Score:</label>
//           <input
//             type="number"
//             name="biologyScore"
//             value={formData.biologyScore}
//             onChange={handleChange}
//             className="p-2 border border-gray-300 rounded-md"
//           />
//         </div>
//         <div className="flex flex-col">
//           <label className="font-semibold">English Score:</label>
//           <input
//             type="number"
//             name="englishScore"
//             value={formData.englishScore}
//             onChange={handleChange}
//             className="p-2 border border-gray-300 rounded-md"
//           />
//         </div>
//         <div className="flex flex-col">
//           <label className="font-semibold">Geography Score:</label>
//           <input
//             type="number"
//             name="geographyScore"
//             value={formData.geographyScore}
//             onChange={handleChange}
//             className="p-2 border border-gray-300 rounded-md"
//           />
//         </div>
//       </div>
//       <div className="flex flex-col">
//         <label className="font-semibold">Total Score:</label>
//         <input
//           type="number"
//           name="totalScore"
//           value={formData.totalScore}
//           onChange={handleChange}
//           className="p-2 border border-gray-300 rounded-md"
//         />
//       </div>
//       <div className="flex flex-col">
//         <label className="font-semibold">Average Score:</label>
//         <input
//           type="number"
//           name="averageScore"
//           value={formData.averageScore}
//           onChange={handleChange}
//           className="p-2 border border-gray-300 rounded-md"
//         />
//       </div>
//       <button
//         type="submit"
//         disabled={isSubmitting}
//         className={`mt-4 px-6 py-2 rounded-md text-white ${
//           isSubmitting ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-700"
//         } transition-colors`}
//       >
//         {isSubmitting ? "Submitting..." : "Submit"}
//       </button>
//     </form>
//   );
// };

// export default CareerRecommendation;





























import React, { useState } from "react";
import axios from "axios";

const CareerRecommendation = () => {
  const [formData, setFormData] = useState({
    gender: "",
    partTimeJob: false,
    absenceDays: 0,
    extracurricularActivities: false,
    weeklySelfStudyHours: 0,
    mathScore: 0,
    historyScore: 0,
    physicsScore: 0,
    chemistryScore: 0,
    biologyScore: 0,
    englishScore: 0,
    geographyScore: 0,
    totalScore: 0,
    averageScore: 0,
  });

  const [isSubmitting, setIsSubmitting] = useState(false); // For disabling button and changing color
  const [result, setResult] = useState(null); // State to store the result

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true); // Disable the button when submitting

    // Format the data to match the function's signature
    const {
      gender,
      partTimeJob,
      absenceDays,
      extracurricularActivities,
      weeklySelfStudyHours,
      mathScore,
      historyScore,
      physicsScore,
      chemistryScore,
      biologyScore,
      englishScore,
      geographyScore,
      totalScore,
      averageScore,
    } = formData;

    const formattedData = {
      gender,
      part_time_job: partTimeJob,
      absence_days: absenceDays,
      extracurricular_activities: extracurricularActivities,
      weekly_self_study_hours: weeklySelfStudyHours,
      math_score: mathScore,
      history_score: historyScore,
      physics_score: physicsScore,
      chemistry_score: chemistryScore,
      biology_score: biologyScore,
      english_score: englishScore,
      geography_score: geographyScore,
      total_score: totalScore,
      average_score: averageScore,
    };

    try {
      // Send the data to your backend
      const response = await axios.post("http://localhost:3000/api/users/career-recommendation", formattedData);
      console.log("Recommendation response:", response.data);
      setResult(response.data); // Store the result from backend
      console.log("result is" ,result[0][0])
      console.log("result is" ,result[1][0])
      console.log("result is" ,result[2][0])
    } catch (error) {
      console.error("Error sending data:", error);
    }

    setIsSubmitting(false); // Re-enable the button after submission
  };

  return (
    <div className="max-w-3xl mx-auto p-4 space-y-4">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label className="font-semibold">Gender (Female / Male):</label>
          <input
            type="text"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="flex items-center">
          <label className="mr-2">Part-Time Job:</label>
          <input
            type="checkbox"
            name="partTimeJob"
            checked={formData.partTimeJob}
            onChange={handleChange}
            className="form-checkbox"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-semibold">Absence Days:</label>
          <input
            type="number"
            name="absenceDays"
            value={formData.absenceDays}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="flex items-center">
          <label className="mr-2">Extracurricular Activities:</label>
          <input
            type="checkbox"
            name="extracurricularActivities"
            checked={formData.extracurricularActivities}
            onChange={handleChange}
            className="form-checkbox"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-semibold">Weekly Self-Study Hours:</label>
          <input
            type="number"
            name="weeklySelfStudyHours"
            value={formData.weeklySelfStudyHours}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label className="font-semibold">Math Score:</label>
            <input
              type="number"
              name="mathScore"
              value={formData.mathScore}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold">History Score:</label>
            <input
              type="number"
              name="historyScore"
              value={formData.historyScore}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold">Physics Score:</label>
            <input
              type="number"
              name="physicsScore"
              value={formData.physicsScore}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold">Chemistry Score:</label>
            <input
              type="number"
              name="chemistryScore"
              value={formData.chemistryScore}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold">Biology Score:</label>
            <input
              type="number"
              name="biologyScore"
              value={formData.biologyScore}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold">English Score:</label>
            <input
              type="number"
              name="englishScore"
              value={formData.englishScore}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold">Geography Score:</label>
            <input
              type="number"
              name="geographyScore"
              value={formData.geographyScore}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label className="font-semibold">Total Score:</label>
          <input
            type="number"
            name="totalScore"
            value={formData.totalScore}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-semibold">Average Score:</label>
          <input
            type="number"
            name="averageScore"
            value={formData.averageScore}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded-md"
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`mt-4 px-6 py-2 rounded-md text-white ${
            isSubmitting ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-700"
          } transition-colors`}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>

      {/* Show Result after Submission */}
{result && (
  <div className="mt-6 p-6 bg-green-100 border border-green-500 rounded-lg space-y-4">
    <h3 className="text-2xl font-bold text-green-700">Career Recommendation:</h3>
    <p className="text-lg font-semibold text-green-600">{result.recommendedCareer}</p>
    
    <div className="mt-4 text-sm text-green-600">
      <p className="font-semibold">Recommendation details:</p>
      <p className="mt-2 text-base">
        <span className="font-semibold">Top Three Recommendations are:</span>
      </p>
      <div className="mt-2 space-y-2">
        <p className="text-base">
          <span className="font-bold">{result[0][0]}</span> with a probability of <span className="font-bold">{result[0][1]}</span>
        </p>
        <p className="text-base">
          <span className="font-bold">{result[1][0]}</span> with a probability of <span className="font-bold">{result[1][1]}</span>
        </p>
        <p className="text-base">
          <span className="font-bold">{result[2][0]}</span> with a probability of <span className="font-bold">{result[2][1]}</span>
        </p>
      </div>
    </div>
  </div>
)}

    </div>
  );
};

export default CareerRecommendation;

