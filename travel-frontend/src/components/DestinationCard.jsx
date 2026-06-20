import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function DestinationCard({id, image, title, country, rating, price}){
    return (
        <Link to={`/destination/${id}`}>
            <motion.div
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg">
                <div className="overflow-hidden">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-64 object-cover hover:scale-110 transition duration-500"
                    />
                </div>

                <div className="p-5">
                    <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
                        ⭐ {rating}
                    </span>
                    <h3 className="text-2xl font-bold">
                        {title}
                    </h3>

                    <p className="text-grey-500 mt-2">
                        {country}
                    </p>

                    <div className="mt-4 flex justify-between items-center">
                        <span className="text-blue-600 font-bold text-xl">
                            $ {price}
                        </span>
                    </div>

                    <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg">
                        Explore
                    </button>
                </div>
            </motion.div>
        </Link>
    );
}

export default DestinationCard;