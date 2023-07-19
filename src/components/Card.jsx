import React from "react";

const Card = ({ imageSrc, title, description }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full h-56 object-cover" src={imageSrc} alt="Card Image" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">{description}</p>
            </div>
            <div className="px-6 py-4">
                <button className="w-full py-2 bg-blue-500 text-white font-bold rounded-md shadow-md hover:bg-blue-600">
                    Order Sekarang
                </button>
            </div>
        </div>
    );
};

export default Card;
