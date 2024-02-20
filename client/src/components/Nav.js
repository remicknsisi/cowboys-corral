function Nav() {

    return (
        <nav className="bg-gray-800 py-4">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between">
                    <div className="flex space-x-4">
                        <a href="home" className="text-white hover:bg-gray-700 px-3 py-2 rounded">Home</a>
                        <a href="social" className="text-white hover:bg-gray-700 px-3 py-2 rounded">Socials</a>
                        <a href="shop" className="text-white hover:bg-gray-700 px-3 py-2 rounded">Shop</a>
                        <a href="collabs" className="text-white hover:bg-gray-700 px-3 py-2 rounded">Work with Me</a>
                    </div>
                    <div>
                        {/* Add any additional elements here, such as a logo or user menu */}
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Nav;