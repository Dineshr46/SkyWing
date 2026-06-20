import { useEffect, useState } from "react";
import toast from "react-hot-toast";

function MyWishlist() {
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        fetch(
            "http://127.0.0.1:8000/api/destinations/wishlist/",
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access")}`,
                },
            }
        )
            .then((response) => response.json())
            .then((data) => {
                if (Array.isArray(data)) {
                    setWishlist(data);
                }
            });
    }, []);

    const removeWishlist = async (id) => {
        const response = await fetch(
            `http://127.0.0.1:8000/api/destinations/wishlist/remove/${id}/`,
            {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access")}`,
                },
            }
        );

        if (response.ok) {
            setWishlist(
                wishlist.filter(
                    (item) => item.id !== id
                )
            );
        }
    };

    return (
        <div className="max-w-5xl mx-auto p-6">
            <h1 className="text-4xl font-bold mb-8 text-white">
                My Wishlist ❤️
            </h1>

            {wishlist.length === 0 ? (
                <p className="text-white">No destinations saved yet.</p>
            ) : (
                wishlist.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white shadow-lg rounded-xl p-5 mb-4">

                        <div className="flex items-center gap-4">
                            <img
                                src={item.destination_image}
                                alt={item.destination_title}
                                className="w-32 h-24 object-cover rounded-lg"/>

                            <div>
                                <h2 className="text-xl font-bold">
                                    {item.destination_title}
                                </h2>

                                <p className="text-gray-500">
                                    {item.destination_country}
                                </p>

                            </div>

                            <button onClick={() => removeWishlist(item.id)} className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg">
                                Remove
                            </button>
                            
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}

export default MyWishlist;