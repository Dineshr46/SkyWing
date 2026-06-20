import { useEffect, useState } from "react";

function Profile() {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        fetch(
            "http://127.0.0.1:8000/api/destinations/profile/",
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access")}`,
                },
            }
        )
            .then((response) => response.json())
            .then((data) => setProfile(data));
    }, []);

    if (!profile) {
        return <h1>Loading...</h1>;
    }

    return (
        <div className="max-w-3xl mx-auto p-6">
            <div className="bg-white shadow-xl rounded-2xl p-8">

                <h1 className="text-4xl font-bold mb-8">
                    My Profile
                </h1>

                <p className="mb-3">
                    <strong>Username:</strong>{" "}
                    {profile.username}
                </p>

                <p className="mb-3">
                    <strong>Email:</strong>{" "}
                    {profile.email}
                </p>

                <p className="mb-3">
                    <strong>Total Bookings:</strong>{" "}
                    {profile.bookings_count}
                </p>

                <p className="mb-3">
                    <strong>Wishlist Count:</strong>{" "}
                    {profile.wishlist_count}
                </p>

                <p className="mb-3">
                    <strong>Member Since:</strong>{" "}
                    {new Date(
                        profile.date_joined
                    ).toLocaleDateString()}
                </p>

            </div>
        </div>
    );
}

export default Profile;