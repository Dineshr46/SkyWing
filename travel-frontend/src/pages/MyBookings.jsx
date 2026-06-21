import { useEffect, useState } from "react";
import { API_URL } from "../config";

function MyBookings() {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        fetch(
            `${API_URL}/api/destinations/my-bookings/`,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access")}`,
                },
            }
        )
            .then((response) => response.json())
            .then((data) => setBookings(data));
    }, []);

    const cancelBooking = async (id) => {
        const response = await fetch(
            `${API_URL}/api/destinations/bookings/cancel/${id}/`,
            {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access")}`,
                },
            }
        );

        if (response.ok) {
            setBookings(
                bookings.filter(
                    (booking) => booking.id !== id
                )
            );
        }
    };

    return (
        <div className="max-w-5xl mx-auto p-6">
            <h1 className="text-4xl font-bold mb-8 text-white">
                My Bookings
            </h1>

            {bookings.length === 0 ? (
                <p className="text-white">No bookings found.</p>
            ) : (
                bookings.map((booking) => (
                <div key={booking.id}
                    className="bg-white shadow-lg rounded-xl p-5 mb-4">
                    <img
                        src={booking.destination_image}
                        alt={booking.destination_title}
                        className="w-32 h-24 rounded-lg object-cover"
                    />

                    <h2>{booking.destination_title}</h2>
                    <p>Travel Date: {booking.travel_date}</p>
                    <p>Travelers: {booking.travelers}</p>

                    <button onClick={() => cancelBooking(booking.id)} className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg">
                        Cancel Booking
                    </button>
                </div>
            ))
        )}
        </div>
    );
}

export default MyBookings;