import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../config";

function Login(){
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
    });

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch(
            `${API_URL}/api/token/`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(credentials),
            }
        );

        const data = await response.json();

        if (response.ok) {
            localStorage.setItem("access", data.access);
            localStorage.setItem("refresh", data.refresh);
            toast.success("Login Successful!");
            setTimeout(() => {
                navigate("/");
            }, 1000);
        } else {
            toast.error("Invalid Credentials");
        }
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg">
            <h1 className="text-3xl font-bold mb-6 text-center">
                Login
            </h1>

            <form onSubmit={handleSubmit}>
                <input type="text" name="username" placeholder="Username" onChange={handleChange}
                    className="w-full border p-3 mb-4 rounded"
                    required
                />

                <input type="password" name="password" placeholder="Password" onChange={handleChange}
                    className="w-full border p-3 mb-4 rounded"
                    required
                />

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg"
                >
                    Login
                </button>
            </form>
        </div>
    );
}

export default Login;
