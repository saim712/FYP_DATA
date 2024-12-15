import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const MentorSignup = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        expertise: '',
        qualifications: '',
        availability: ''
    });
    const navigate=useNavigate();

    const [isSubmitting, setIsSubmitting] = useState(false); // State to manage the submission process

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true); // Start the submission process
        try {
            const response = await axios.post('http://localhost:3000/api/users/mentor/register', formData);
            console.log(response.data.message);
            navigate('/mentor/login');
        } catch (error) {
            console.log(error.response?.data?.message || 'Error during registration');
        } finally {
            setIsSubmitting(false); // Stop the submission process
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form 
                onSubmit={handleSubmit} 
                className="w-full max-w-lg p-8 space-y-6 bg-white rounded-lg shadow-lg"
            >
                <h2 className="text-2xl font-bold text-center text-gray-700">Mentor Signup</h2>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-600">Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            onChange={handleChange}
                            className="w-full px-4 py-2 mt-1 text-sm text-gray-700 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            disabled={isSubmitting} // Disable input during submission
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-600">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            onChange={handleChange}
                            className="w-full px-4 py-2 mt-1 text-sm text-gray-700 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            disabled={isSubmitting} // Disable input during submission
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-600">Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter a password"
                            onChange={handleChange}
                            className="w-full px-4 py-2 mt-1 text-sm text-gray-700 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            disabled={isSubmitting} // Disable input during submission
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-600">Expertise</label>
                        <input
                            type="text"
                            name="expertise"
                            placeholder="E.g., JavaScript, Python (comma-separated)"
                            onChange={handleChange}
                            className="w-full px-4 py-2 mt-1 text-sm text-gray-700 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            disabled={isSubmitting} // Disable input during submission
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-600">Qualifications</label>
                        <input
                            type="text"
                            name="qualifications"
                            placeholder="Enter your qualifications"
                            onChange={handleChange}
                            className="w-full px-4 py-2 mt-1 text-sm text-gray-700 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            disabled={isSubmitting} // Disable input during submission
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-600">Availability</label>
                        <input
                            type="text"
                            name="availability"
                            placeholder="E.g., Monday 2-4 PM"
                            onChange={handleChange}
                            className="w-full px-4 py-2 mt-1 text-sm text-gray-700 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            disabled={isSubmitting} // Disable input during submission
                        />
                    </div>
                </div>
                <button
                    type="submit"
                    className={`w-full px-4 py-2 text-sm font-semibold text-white rounded-lg focus:outline-none focus:ring-2 ${
                        isSubmitting 
                            ? 'bg-blue-300 cursor-not-allowed' 
                            : 'bg-blue-500 hover:bg-blue-600 focus:ring-blue-400'
                    }`}
                    disabled={isSubmitting} // Disable button during submission
                >
                    {isSubmitting ? (
                        <div className="flex items-center justify-center">
                            <svg
                                className="w-5 h-5 mr-2 text-white animate-spin"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                ></circle>
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8v4a4 4 0 100 8v4a8 8 0 01-8-8z"
                                ></path>
                            </svg>
                            Processing...
                        </div>
                    ) : (
                        'Signup as Mentor'
                    )}
                </button>
            </form>
        </div>
    );
};

export default MentorSignup;
