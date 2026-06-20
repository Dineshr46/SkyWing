import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="bg-slate-950 text-white border-t border-slate-800 mt-20">
            <div className="max-w-7xl mx-auto px-6 py-10">
                <div className="grid md:grid-cols-3 gap-8">
                    <div>
                        <h2 className="text-2xl font-bold text-blue-500">
                            SkyWing
                        </h2>

                        <p className="text-gray-400 mt-3">
                            Discover amazing destinations around the world.
                            Plan your next adventure with TravelX.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-3">
                            Quick Links
                        </h3>

                        <ul className="space-y-2 text-gray-400">
                            <li>
                                <Link to="/">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/destinations">
                                    Destinations
                                </Link>
                            </li>
                            <li>
                                <Link to="/my-bookings">
                                    My Bookings
                                </Link>
                            </li>
                            <li>
                                <Link to="/wishlist">
                                    Wishlist
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-3">
                            Contact
                        </h3>

                        <ul className="space-y-2 text-gray-400">
                            <li>Email: support@travelx.com</li>
                            <li>Phone: +91 9876543210</li>
                            <li>India</li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-slate-800 mt-8 pt-6 text-center text-gray-500">
                    © 2026 TravelX. All Rights Reserved.
                </div>

            </div>
        </footer>
    );
}

export default Footer;