import DestinationCard from "./DestinationCard";

function Destinations ({places}){
    return (
        <section className="py-10 px-10">
            <h2 className="text-4xl font-bold text-center mb-10 text-white">
                Popular Destinations
            </h2>

            <div className="grid md:grid-cols-3 gap-3">
                {places.map((place,index) => (
                    <DestinationCard
                    id = {place.id}
                    key = {place.id}
                    image = {place.image}
                    title = {place.title}
                    country = {place.country}
                    rating={place.ratings}
                    price={place.price}
                    />
                ))}
            </div>
        </section>
    );
}

export default Destinations;