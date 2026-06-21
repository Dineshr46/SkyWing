import { useState } from "react";
import toast from "react-hot-toast";
import { API_URL } from "../config";

function BookingForm({ destinationId}){
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        travel_date: "",
        travelers: 1,
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const bookingData = {
            destination: destinationId,
            ...formData
        };

        try{
            const response = await fetch(
                `${API_URL}/api/destinations/book/`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${localStorage.getItem("access")}`,
                    },
                    body: JSON.stringify(bookingData)
                }
            );
            if (response.ok){
                toast.success("Booking Successfull");
            }
            else{
                toast.success("Booking Failed");
            }
        }
        catch(error){
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-xl p-6 mt-8">

            <h2 className="text-2xl font-bold mb-4">
                Book This Trip
            </h2>

            <input type="text" name="name" placeholder="Name" onChange={handleChange}
                className="w-full border p-3 mb-3 rounded"
                required
            />

            <input type="email" name="email" placeholder="Email" onChange={handleChange}
                className="w-full border p-3 mb-3 rounded"
                required
            />

            <input type="text" name="phone" placeholder="Phone" onChange={handleChange}
                className="w-full border p-3 mb-3 rounded"
                required
            />

            <input type="date" name="travel_date" onChange={handleChange}
                className="w-full border p-3 mb-3 rounded"
                required
            />

            <input type="number" name="travelers" min="1" onChange={handleChange} 
                className="w-full border p-3 mb-3 rounded" required
            />

            <button type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg"
            >
                Confirm Booking
            </button>

        </form>
    )
}

export default BookingForm;


