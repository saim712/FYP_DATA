import React, { useState } from "react";
import html2pdf from "html2pdf.js";

const CVPreview = () => {
  // States for user input
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [workExperience, setWorkExperience] = useState("");
  const [skills, setSkills] = useState([]);
  const [education, setEducation] = useState([]);
  const [achievements, setAchievements] = useState("");
  const [projects, setProjects] = useState([]);
  const [image, setImage] = useState(null);

  // Handlers for adding entries to fields
  const handleSkillChange = (e) => setSkills(e.target.value.split(",").map(skill => skill.trim()));
  const handleProjectChange = (e) => setProjects(e.target.value.split(",").map(project => project.trim()));
  const handleEducationChange = (e) => setEducation(e.target.value.split(",").map(edu => edu.trim()));

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const downloadCV = () => {
    const element = document.getElementById("cv-content");

    const options = {
      margin: 10,
      filename: "my-cv.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    html2pdf().from(element).set(options).save();
  };

  return (
    <div className="flex flex-col items-center p-8 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 min-h-screen">
      {/* User Input Form */}
      <div className="max-w-3xl bg-white shadow-2xl rounded-lg p-8 mb-8">
        <h2 className="text-2xl font-semibold text-center mb-4 text-gray-800">Enter Your Details</h2>
        <form className="space-y-4">
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border-2 border-gray-300 rounded-lg"
            />
            <input
              type="text"
              placeholder="Designation"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
              className="w-full p-3 border-2 border-gray-300 rounded-lg"
            />
          </div>
          <div className="flex space-x-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border-2 border-gray-300 rounded-lg"
            />
            <input
              type="tel"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-3 border-2 border-gray-300 rounded-lg"
            />
          </div>
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full p-3 border-2 border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <textarea
              placeholder="Work Experience"
              value={workExperience}
              onChange={(e) => setWorkExperience(e.target.value)}
              className="w-full p-3 border-2 border-gray-300 rounded-lg"
              rows="4"
            ></textarea>
          </div>

          {/* Skills Field */}
          <div>
            <input
              type="text"
              placeholder="Skills (comma separated)"
              value={skills.join(", ")}
              onChange={handleSkillChange}
              className="w-full p-3 border-2 border-gray-300 rounded-lg"
            />
          </div>

          {/* Education Field */}
          <div>
            <input
              type="text"
              placeholder="Education (comma separated)"
              value={education.join(", ")}
              onChange={handleEducationChange}
              className="w-full p-3 border-2 border-gray-300 rounded-lg"
            />
          </div>

          {/* Achievements */}
          <div>
            <textarea
              placeholder="Achievements"
              value={achievements}
              onChange={(e) => setAchievements(e.target.value)}
              className="w-full p-3 border-2 border-gray-300 rounded-lg"
              rows="4"
            ></textarea>
          </div>

          {/* Projects Field */}
          <div>
            <input
              type="text"
              placeholder="Projects (comma separated)"
              value={projects.join(", ")}
              onChange={handleProjectChange}
              className="w-full p-3 border-2 border-gray-300 rounded-lg"
            />
          </div>

          <div>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="w-full p-3 border-2 border-gray-300 rounded-lg"
            />
          </div>
        </form>
      </div>

      {/* CV Preview */}
      <div
        id="cv-content"
        className="bg-white shadow-2xl rounded-lg w-full max-w-3xl p-8 space-y-8 grid grid-cols-12 gap-8"
      >
        {/* Left Section (Image, Name, Skills) */}
        <div className="col-span-4 bg-gradient-to-b from-indigo-600 to-purple-600 text-white rounded-lg p-6 space-y-6">
          {/* Profile Image */}
          {image ? (
            <img
              src={image}
              alt="Profile"
              className="w-32 h-32 rounded-full mx-auto border-4 border-white"
            />
          ) : (
            <div className="w-32 h-32 rounded-full mx-auto border-4 border-white bg-gray-300"></div>
          )}

          {/* Name */}
          <div className="text-center">
            <h1 className="text-3xl font-extrabold">{name}</h1>
            <p className="text-xl">{designation}</p>
          </div>

          {/* Skills */}
          <div>
            <h2 className="text-2xl font-semibold">Skills</h2>
            <ul className="list-disc pl-5">
              {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Section (Achievements, Education, Experience, Projects) */}
        <div className="col-span-8 space-y-6">
          {/* Achievements */}
          <div>
            <h2 className="text-2xl font-semibold text-indigo-600">Achievements</h2>
            <p>{achievements}</p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-2xl font-semibold text-indigo-600">Education</h2>
            <ul className="list-disc pl-5">
              {education.map((edu, index) => (
                <li key={index}>{edu}</li>
              ))}
            </ul>
          </div>

          {/* Work Experience */}
          <div>
            <h2 className="text-2xl font-semibold text-indigo-600">Work Experience</h2>
            <p>{workExperience}</p>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-2xl font-semibold text-indigo-600">Projects</h2>
            <ul className="list-disc pl-5">
              {projects.map((project, index) => (
                <li key={index}>{project}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Download Button */}
      <button
        onClick={downloadCV}
        className="mt-6 bg-indigo-600 text-white py-3 px-8 rounded-lg text-xl shadow-md hover:bg-indigo-700 transition duration-300"
      >
        Download CV
      </button>
    </div>
  );
};

export default CVPreview;
