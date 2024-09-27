import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../axios';
import { useAuth } from '../contexts/AuthContext';
import Swal from 'sweetalert2';

export const LoginForm = () => {
    const { setUser, csrfToken } = useAuth();
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    // login user
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = e.target.elements;
        const body = {
            email: email.value,
            password: password.value,
        };
        await csrfToken();
        try {
            const resp = await axios.post('/login', body);
            if (resp.status === 200) {
                const user = resp.data.user;
                setUser(user);

                // Store token in localStorage
                localStorage.setItem('login_token', user.token);

                // Display success alert
                Swal.fire({
                    title: 'Login Successful!',
                    text: 'You have been successfully logged in.',
                    icon: 'success',
                    confirmButtonText: 'OK'
                }).then(() => {
                    // Redirect to appropriate route based on user role
                    switch (user.role) {
                        case 'médecin':
                            navigate('/medecin');
                            break;
                        case 'moderateur':
                            navigate('/moderateur');
                            break;
                        case 'récepiosinniste':
                            navigate('/récepiosinniste');
                            break;
                        default:
                            // Handle other roles or scenarios
                            break;
                    }
                });
            }
        } catch (error) {
            setError(error.response.data.message || 'An error occurred.');
        }
    };

    return (
        <section className="bg-gray-50">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                            Sign in to your account
                        </h1>
                        {error && (
                            <div className="flex p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50">
                                <svg
                                    aria-hidden="true"
                                    className="flex-shrink-0 inline w-5 h-5 mr-3"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        fillRule="evenodd"
                                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                        clipRule="evenodd"></path>
                                </svg>
                                <span className="sr-only">Info</span>
                                <div>{error}</div>
                            </div>
                        )}

                        <form className="space-y-4 md:space-y-6" action="#" method="post" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                                    Your email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                    placeholder="name@company.com"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="••••••••"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                    required
                                />
                            </div>

                            <button type="submit" className='btn btn-primary w-100'>
                                Sign in
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
