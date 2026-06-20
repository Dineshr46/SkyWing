import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import DestinationPage from "./pages/DestinationPage";
import DestinationDetails from "./pages/DestinationDetails";
import Contact from "./pages/Conatct";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";
import MyBookings from "./pages/MyBookings";
import ProtectedRoute from "./components/ProtectedRoute";
import MyWishlist from "./pages/MyWishlist";
import Profile from "./pages/Profile";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-blue-950 pt-20">
      
      <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />

        <Route path="/destinations" element={<DestinationPage />} />

        <Route path="/destination/:id" element={<DestinationDetails />} />

        <Route path="/contact" element={<Contact/>} />

        <Route path="/login" element={<Login/>} />

        <Route path="/register" element={<Register/>} />

        <Route path="*" element={<NotFound />} />

        <Route path="/my-bookings" element={<ProtectedRoute><MyBookings /></ProtectedRoute>}/>

        <Route path="/wishlist" element={<ProtectedRoute><MyWishlist /></ProtectedRoute>}/>

        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>}/>
      </Routes>

      <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;
