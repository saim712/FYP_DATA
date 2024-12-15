import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const MentorLogin = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false); // Track submission state
    const [message, setMessage] = useState({ type: '', content: '' }); // Message for success or error

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true); // Disable form during submission
        setMessage({ type: '', content: '' }); // Clear any previous messages
        
        try {
            const response = await axios.post('http://localhost:3000/api/users/mentor/login', formData);
            setMessage({ type: 'success', content: response.data.message }); // Show success message
            localStorage.setItem('mentor_token', response.data.token);  // Store token after login
            navigate('/mentor/dashboard');
        } catch (error) {
            setMessage({
                type: 'error',
                content: error.response?.data?.message || 'Error during login'
            }); // Show error message
        } finally {
            setIsSubmitting(false); // Re-enable the form
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form 
                onSubmit={handleSubmit} 
                className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md"
            >
                <h2 className="text-2xl font-bold text-center text-gray-700">Mentor Login</h2>
                <div className="space-y-4">
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
                            placeholder="Enter your password"
                            onChange={handleChange}
                            className="w-full px-4 py-2 mt-1 text-sm text-gray-700 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            disabled={isSubmitting} // Disable input during submission
                        />
                    </div>
                </div>

                {message.content && (
                    <p
                        className={`text-sm text-center mt-4 ${
    message.type === 'success' ? 'text-green-500' : 'text-red-500'
                        }`}
                    >
                        {message.content}
                    </p>
                )}

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
                            Logging in...
                        </div>
                    ) : (
                        'Login as Mentor'
                    )}
                </button>
            </form>
        </div>
    );
};

export default MentorLogin;
