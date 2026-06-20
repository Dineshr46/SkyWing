import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar(){
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    const token = localStorage.getItem("access");
    const handleLogout = () => {
        localStorage.removeItem("access");
        localStorage.removeItem("refresh");

        navigate("/login");
    };  
    return(
        <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-10 py-5 bg-white/10 backdrop-blur-md text-white">
            
            <h1 className="text-2xl font-bold text-blue-600">
                SkyWing
            </h1>

            <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
            
            <ul className="hidden md:flex gap-6 items-center">
                <li>
                    <Link to="/" className="px-2 py-1 rounded font-bold hover:bg-blue-800 transition text-white">
                        Home
                    </Link>
                </li>

                <li>
                    <Link to="/destinations" className="px-2 py-1 rounded font-bold hover:bg-blue-800 transition text-white">
                        Destinations
                    </Link>
                </li>

                {token ? (
                    <>
                        <li><Link to="/my-bookings" className="px-2 py-1 rounded font-bold hover:bg-blue-800 transition text-white">
                                My Bookings
                            </Link>
                        </li>

                        <li>
                            <Link to="/wishlist" className="px-2 py-1 rounded font-bold hover:bg-blue-800 transition text-white">
                                Wishlist
                            </Link>
                        </li>

                        <li>
                            <Link to="/profile" className="px-2 py-1 rounded font-bold hover:bg-blue-800 transition text-white">
                                Profile
                            </Link>
                        </li>                        

                        <li>
                            <button
                                onClick={handleLogout}
                                className="px-2 py-1 rounded font-bold hover:bg-blue-800 transition text-white">
                                Logout
                            </button>
                        </li>
                    </>
                ) : (
                    <>
                        <li><Link to="/login" className="px-2 py-1 rounded font-bold hover:bg-blue-800 transition text-white">
                                Login
                            </Link>
                        </li>

                        <li><Link to="/register" className="px-2 py-1 rounded font-bold hover:bg-blue-800 transition text-white">
                                Register
                            </Link>
                        </li>
                    </>
                )}

                <li>
                    <Link to="/contact" className="px-2 py-1 rounded font-bold hover:bg-blue-800 transition text-white">
                        Contact
                    </Link>
                </li>

            </ul>
            {menuOpen && (
                <div className="absolute top-20 left-0 w-full bg-white shadow-lg md:hidden">

                    <ul className="flex flex-col p-6 gap-4 text-black">

                        <li>
                            <Link to="/">Home</Link>
                        </li>

                        <li>
                            <Link to="/destinations">Destinations</Link>
                        </li>

                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>

                        {token ? (
                            <>
                                <li>
                                    <Link to="/profile">Profile</Link>
                                </li>

                                <li>
                                    <Link to="/wishlist">Wishlist</Link>
                                </li>

                                <li>
                                    <Link to="/my-bookings">My Bookings</Link>
                                </li>

                                <li>
                                    <button onClick={handleLogout}>
                                        Logout
                                    </button>
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <Link to="/login">Login</Link>
                                </li>

                                <li>
                                    <Link to="/register">Register</Link>
                                </li>
                            </>
                        )}

                    </ul>
                    
                </div>
            )}
        </nav>
    );
}

export default Navbar;