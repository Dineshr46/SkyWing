
function SearchBar ({search, setSearch}) {

    return(
        <div className="flex justify-center mb-10">
            <input
                type="text"
                placeholder="Search Destination..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border p-3 rounded-lg w-96 bg-white text-black border-gray-300 px-4 py-3 mt-5"
            />
        </div>
    );
}

export default SearchBar;