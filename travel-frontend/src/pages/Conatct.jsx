function Contact() {
    return (
        <div className="max-w-3xl mx-auto p-6 border rounded-lg bg-white text-black border-gray-300 px-4 py-3">

            <form className="space-y-4">

                <h1 className="text-4xl font-bold mb-6">
                    Contact Us
                </h1>

                <input type="text" placeholder="Name" className="w-full border p-3 rounded" />

                <input type="email" placeholder="Email" className="w-full border p-3 rounded" />

                <textarea rows="5" placeholder="Message" className="w-full border p-3 rounded" />

                <button
                    className="bg-blue-600 text-white px-6 py-3 rounded" >
                    Send Message
                </button>

            </form>
        </div>
    );
}

export default Contact;