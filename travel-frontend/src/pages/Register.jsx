import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Register() {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });

    const handleChange = async (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const response = await fetch(
                "http://127.0.0.1:8000/api/destinations/register/",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData)
                }
            );

            const data = await response.json();

            if (response.ok){
                toast.success("Rgistration Successfull");
                setTimeout(() => {
                    navigate("/login");
                }, 1000);
            }
            else{
                toast.error("Registration Failed");
                console.log(data);
            }
        }
        catch(error){
            console.error(error);
        }
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg">
            <h1 className="text-3xl font-bold mb-6 text-center">
                Register
            </h1>

            <form onSubmit={handleSubmit}>
                <input type="text" name="username" placeholder="Username" onChange={handleChange}
                    className="w-full border p-3 mb-4 rounded"
                    required
                />

                <input type="email" name="email" placeholder="Email" onChange={handleChange}
                    className="w-full border p-3 mb-4 rounded"
                    required
                />

                <input type="password" name="password" placeholder="Password" onChange={handleChange}
                    className="w-full border p-3 mb-4 rounded"
                    required
                />

                <button type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg"
                >
                    Register
                </button>
            </form>
        </div>
    );
}

export default Register;