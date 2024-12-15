import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MentorDashboard = () => {
    const [mentorData, setMentorData] = useState({
        name: '',
        email: '',
        expertise: '',
        qualifications: '',
        availability: '',
        workExperience: '',
        socialMedia: '',
    });
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');

    // Fetch mentor data when the component mounts
    // useEffect(() => {
    //     const fetchMentorData = async () => {
    //         try {
    //             const response = await axios.get('http://localhost:3000/api/users/mentor/profile'); // Adjust API route
    //             setMentorData(response.data);
    //         } catch (error) {
    //             console.error('Error fetching mentor data:', error.response?.data?.message || error.message);
    //         }
    //     };
    //     fetchMentorData();
    // }, []);


    const fetchMentorData = async () => {
        const token = localStorage.getItem('token');  // Get JWT token from localStorage or context
        try {
            const response = await axios.get('http://localhost:3000/api/users/mentor/profile', {
                headers: { Authorization: `Bearer ${token}` }, // Pass token here
            });
            setMentorData(response.data);
        } catch (error) {
            console.error('Error fetching mentor data:', error.response?.data?.message || error.message);
        }
    };
    

    const handleChange = (e) => {
        setMentorData({ ...mentorData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setMessage('');
        try {
            // Prepare form data (no profile picture here)
            const formData = new FormData();
            Object.keys(mentorData).forEach((key) => formData.append(key, mentorData[key]));

            const response = await axios.post('http://localhost:3000/api/users/mentor/update', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            setMessage(response.data.message || 'Profile updated successfully!');
        } catch (error) {
            setMessage(error.response?.data?.message || 'Error updating profile.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center min-h-screen p-4 bg-gray-100">
            <div className="w-full max-w-3xl p-8 bg-white rounded-lg shadow-lg">
                <h2 className="mb-6 text-2xl font-bold text-gray-700">Mentor Dashboard</h2>

                {message && (
                    <div
                        className={`p-4 mb-4 text-sm ${
                            message.toLowerCase().includes('error') ? 'text-red-700 bg-red-100' : 'text-green-700 bg-green-100'
                        } rounded-lg`}
                    >
                        {message}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-600">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={mentorData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 mt-1 text-sm text-gray-700 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-600">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={mentorData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 mt-1 text-sm text-gray-700 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            disabled
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-600">Expertise</label>
                        <input
                            type="text"
                            name="expertise"
                            value={mentorData.expertise}
                            onChange={handleChange}
                            placeholder="E.g., JavaScript, Python (comma-separated)"
                            className="w-full px-4 py-2 mt-1 text-sm text-gray-700 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-600">Qualifications</label>
                        <input
                            type="text"
                            name="qualifications"
                            value={mentorData.qualifications}
                            onChange={handleChange}
                            className="w-full px-4 py-2 mt-1 text-sm text-gray-700 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-600">Availability</label>
                        <input
                            type="text"
                            name="availability"
                            value={mentorData.availability}
                            onChange={handleChange}
                            placeholder="E.g., Monday 2-4 PM"
                            className="w-full px-4 py-2 mt-1 text-sm text-gray-700 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-600">Work Experience</label>
                        <textarea
                            name="workExperience"
                            value={mentorData.workExperience}
                            onChange={handleChange}
                            placeholder="Describe your work experience"
                            className="w-full px-4 py-2 mt-1 text-sm text-gray-700 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        ></textarea>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-600">Social Media Links</label>
                        <input
                            type="text"
                            name="socialMedia"
                            value={mentorData.socialMedia}
                            onChange={handleChange}
                            placeholder="E.g., LinkedIn URL"
                            className="w-full px-4 py-2 mt-1 text-sm text-gray-700 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>

                    <button
                        type="submit"
                        className={`w-full px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                            isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-blue-600'
                        }`}
                        disabled={isLoading}
                    >
                        {isLoading ? 'Updating...' : 'Update Profile'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default MentorDashboard;
