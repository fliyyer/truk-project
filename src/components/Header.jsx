import React from "react";
import Background from "../assets/Background.jpg";

const Header = () => {
    return (
        <div
            className="flex items-center justify-center h-screen bg-black bg-opacity-50 bg-cover bg-center"
            style={{ backgroundImage: `url(${Background})` }}
        >
            <div className="text-center">
                <h1 className="text-5xl font-bold text-white mb-4">Solusi Terpercaya untuk Rental Truk</h1>
                <h3 className="text-2xl text-white mb-8">Kami menyediakan rental truk yang handal dan efisien<br /> untuk memenuhi kebutuhan transportasi bisnis Anda</h3>
                <button className="px-6 py-3 bg-blue-500 text-white font-bold rounded-md shadow-md hover:bg-blue-600">
                    Lihat jasa sewa
                </button>
            </div>
        </div>
    );
};

export default Header;
