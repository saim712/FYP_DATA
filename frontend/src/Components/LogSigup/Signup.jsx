import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate,Link} from 'react-router-dom';


const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false); // Loading state
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Set loading to true when the form is submitted
        try {
            const response = await axios.post('http://localhost:3000/api/users/register', {
                name,
                email,
                password,
            });
            console.log('User registered:', response.data);
            // Redirect to login or home page
            navigate('/login');
        } catch (err) {
            setError('Registration failed. Please try again.');
        } finally {
            setLoading(false); // Set loading to false once the request is complete
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>
                {error && <p className="text-red-500 text-center">{error}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600">Full Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
                        disabled={loading} // Disable the button when loading is true
                    >
                        {loading ? (
                            <span className="animate-spin">🔄</span> // Loading spinner (You can replace this with your own spinner)
                        ) : (
                            'Sign Up'
                        )}
                    </button>
                </form>
                <p className="mt-4 text-center text-sm text-gray-600">
                    Already have an account? <Link to="/login" className="text-blue-500">Log In</Link>
                </p>
                <p className="mt-4 text-center text-sm text-gray-600">
                    Already have an account? <Link to="/mentor/login" className="text-blue-500">Log In as Mentor</Link>
                </p>
            </div>
        </div>
    );
};

export default Signup;














// import React, { useState } from 'react';
// import axios from 'axios';

// const Signup = () => {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('http://localhost:3000/api/users/register', {
//                 name,
//                 email,
//                 password,
//             });
//             console.log('User registered:', response.data);
//             // Redirect to login or home page
//         } catch (err) {
//             setError('Registration failed. Please try again.');
//         }
//     };

//     return (
//         <div className="min-h-screen bg-gray-100 flex justify-center items-center">
//             <div className="bg-white p-8 rounded-lg shadow-lg w-96">
//                 <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>
//                 {error && <p className="text-red-500 text-center">{error}</p>}
//                 <form onSubmit={handleSubmit}>
//                     <div className="mb-4">
//                         <label className="block text-sm font-medium text-gray-600">Full Name</label>
//                         <input
//                             type="text"
//                             value={name}
//                             onChange={(e) => setName(e.target.value)}
//                             className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                             required
//                         />
//                     </div>
//                     <div className="mb-4">
//                         <label className="block text-sm font-medium text-gray-600">Email</label>
//                         <input
//                             type="email"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                             required
//                         />
//                     </div>
//                     <div className="mb-4">
//                         <label className="block text-sm font-medium text-gray-600">Password</label>
//                         <input
//                             type="password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                             required
//                         />
//                     </div>
//                     <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
//                         Sign Up
//                     </button>
//                 </form>
//                 <p className="mt-4 text-center text-sm text-gray-600">
//                     Already have an account? <a href="/login" className="text-blue-500">Log In</a>
//                 </p>
//             </div>
//         </div>
//     );
// };

// export default Signup;
