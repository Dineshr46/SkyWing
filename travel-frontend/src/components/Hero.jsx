import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Hero(){
    return(
        <section className="relative h-screen flex justify-center items-center text-white">
            <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
                alt = "Travel"
                className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/50" />

            <div className="relative text-center px-6 max-w-4xl">

                <motion.h1
                    initial={{opacity:0, y:80}}
                    animate={{opacity:1,y:0}}
                    transition={{duration:1}}
                    className="text-5xl md:text-7xlfont-bold">
                        Explore The World
                </motion.h1>

                <motion.p
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{delay:0.5}}
                    className="mt-6 text-lg md-text-2xl">
                        Discover breathtaking destinations and unforgettable adventures.
                </motion.p>

                <motion.div
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{delay:1}}
                    className="mt-8 flex justify-center gap-4">

                        <Link to="/destinations">
                            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-leg">
                                Explore Now
                            </button>
                        </Link>

                        <button className=" border border-white px-6 py-3 rounded-lg">
                            Watch Video
                        </button>

                </motion.div>

            </div>

        </section>
    );
}

export default Hero;