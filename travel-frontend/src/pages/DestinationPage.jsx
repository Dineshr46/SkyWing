import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import Destinations from "../components/Destinations";
import { API_URL } from "../config";

function DestinationPage (){
    const [search, setSearch] = useState("");
    const [places, setPlaces] = useState([]);
    const [country, setCountry] = useState("All");
    const [sortBy, setSortBy] = useState("");

    useEffect(() => {
    fetch(`${API_URL}/api/destinations/`)
        .then((response) => response.json())
        .then((data) => setPlaces(data))
        .catch((error) => console.error(error));
    }, []);


    let filteredPlaces = places.filter((place) =>
        place.title.toLowerCase().includes(search.toLowerCase())
    );

    if (country !== "All") {
        filteredPlaces = filteredPlaces.filter(
            (place) => place.country === country
        );
    }

    if (sortBy === "price-low") {
        filteredPlaces.sort((a, b) => a.price - b.price);
    }

    if (sortBy === "price-high") {
        filteredPlaces.sort((a, b) => b.price - a.price);
    }

    if (sortBy === "rating") {
        filteredPlaces.sort((a, b) => b.ratings - a.ratings);
    }

    const countries = [
        "All",
        ...new Set(places.map((place) => place.country)),
    ];

    return(
        <>
            <SearchBar
                search = {search}
                setSearch = {setSearch}
            />

            <div className="flex flex-wrap gap-4 justify-center">
                <select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="bg-white text-black border border-gray-300 rounded-lg px-4 py-3"
                >
                    {countries.map((c) => (
                        <option key={c} value={c}>
                            {c}
                        </option>
                    ))}
                </select>

                <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-white text-black border border-gray-300 rounded-lg px-4 py-3"
                >
                    <option value="">Sort By</option>
                    <option value="price-low">
                        Price Low → High
                    </option>
                    <option value="price-high">
                        Price High → Low
                    </option>
                    <option value="rating">
                        Highest Rated
                    </option>
                </select>

                <p className="text-gray-500 mb-4">
                    {filteredPlaces.length} destinations found
                </p>
            </div>
            
            <Destinations places = {filteredPlaces}/>
        </>
    );
}

export default DestinationPage;