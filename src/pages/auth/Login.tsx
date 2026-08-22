import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Phase 1 Mock Login
        if (email === 'admin@ziyara.com') {
            localStorage.setItem('isAuthenticated', 'true');
            navigate('/dashboard');
        } else {
            alert('Invalid credentials. Use admin@ziyara.com');
        }
    };

    return (
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-primary px-8 py-10 text-center">
                <h1 className="text-3xl font-bold tracking-widest text-secondary-light mb-2">ZIYARA ADMIN</h1>
                <p className="text-primary-light/80 text-sm">Sign in to manage your platform</p>
            </div>

            <div className="px-8 py-10">
                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <div className="mt-1">
                            <input
                                type="email"
                                required
                                className="block w-full rounded-md border-gray-300 py-2.5 px-4 shadow-sm focus:border-primary focus:ring-primary sm:text-sm border"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="admin@ziyara.com"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <div className="mt-1">
                            <input
                                type="password"
                                required
                                className="block w-full rounded-md border-gray-300 py-2.5 px-4 shadow-sm focus:border-primary focus:ring-primary sm:text-sm border"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                            />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                Remember me
                            </label>
                        </div>

                        <div className="text-sm">
                            <a href="#" className="font-medium text-primary hover:text-primary-dark">
                                Forgot password?
                            </a>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-primary px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors"
                        >
                            Sign In
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
