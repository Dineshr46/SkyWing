import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import BookingForm from "../components/BookingForm";
import toast from "react-hot-toast";

function DestinationDetails() {
    const {id} = useParams();
    const [destination, setDestination] = useState(null);

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/destinations/${id}/`)
            .then((response) => {
                if(!response.ok) {
                    throw new Error("Destination not found");
                }
                return response.json();
            })
            .then((data) => setDestination(data))
            .catch((error) => console.error(error));
    }, [id]);
    
    if (!destination) {
        return <h1>Loading Destinations...</h1>;
    }

    const addToWishlist = async () => {
        try {
            const response = await fetch(
                "http://127.0.0.1:8000/api/destinations/wishlist/add/",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${localStorage.getItem("access")}`,
                    },
                    body: JSON.stringify({
                        destination: destination.id,
                    }),
                }
            );

            const data = await response.json();

            console.log("Status:", response.status);
            console.log("Response:", data);

            if (response.ok) {
                toast.success("Added to Wishlist ❤️");
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="max-w-5xl mx-auto p-6">

            <img src={destination.image} alt={destination.title}
                className="w-full h-[500px] object-cover rounded-2xl"
            />
            <h1 className="text-5xl font-bold mt-6 text-white">
                {destination.title}
            </h1>

            <p className="text-xl text-gray-500 mt-2">
                {destination.country}
            </p>

            <p className="mt-4 bg-yellow-100 px-3 py-1 w-25 rounded">
                ⭐ {destination.ratings}
            </p>

            <p className="mt-4 text-2xl font-bold text-blue-600">
                $ {destination.price.toLocaleString()}
            </p>

            <p className="mt-6 text-white">
                {destination.description}
            </p>

            <BookingForm destinationId={destination.id} />

            <button onClick={addToWishlist} className="mt-4 bg-pink-500 text-white px-6 py-3 rounded-lg" >
                ❤️ Save to Wishlist
            </button>

        </div>
    );
}

export default DestinationDetails;