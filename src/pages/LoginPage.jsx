/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { auth } from "../firebase";
import Swal from 'sweetalert2'

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    if (auth.currentUser) {
        return <Navigate to="/dashboard" />;
    }
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await auth.signInWithEmailAndPassword(email, password);
            navigate("/dashboard");
        } catch {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Password Yang Anda Masukan Salah!',
            })
        }
    };

    return (
        <div>
            <div className="w-full max-w-md mx-auto mt-40">
                <form
                    onSubmit={handleSubmit}
                    className="bg-white rounded px-8 pt-6 pb-8 mb-4 shadow-md"
                >
                    <h2 className="text-2xl font-medium mb-6 text-center ">Login Admin</h2>
                    <div className="mb-4 mt-14">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center text-center justify-between">
                        <button
                            className="bg-blue-500 mx-auto hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
