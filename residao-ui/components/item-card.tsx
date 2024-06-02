// components/ItemCard.tsx

import React from 'react';

interface ItemCardProps {
    id: number;
    name: string;
    description: string;
    image: string;
    price: string;
}

const CARD_WIDTH = 195;
const CARD_HEIGHT = 180;
const MARGIN = 20;

const BREAKPOINTS = {
    sm: 640,
    lg: 1024,
};



const ItemCard: React.FC<ItemCardProps> = ({ id, name, description, image, price }) => {
    return (
        <div
            className="relative shrink-0 cursor-pointer rounded-lg bg-white shadow-md transition-all hover:scale-[1.015] hover:shadow-xl"
            style={{
                width: CARD_WIDTH,
                height: CARD_HEIGHT,
                marginRight: MARGIN,
                backgroundImage: `url(${image || ""})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
            }}
        >
            {/* <img src={image} alt={name} className="w-full h-40 object-cover rounded-md mb-4" />
            <h2 className="text-xl font-bold">{name}</h2>
            <p className="text-gray-600 mt-2">{description}</p>
            <p className="text-gray-800 font-bold mt-2">${price}</p> */}

            <div className="absolute rounded-lg inset-0 z-20 bg-gradient-to-b from-black/90 via-black/60 to-black/0 p-6 text-white transition-[backdrop-filter] hover:backdrop-blur-sm">
                <span className="text-xs font-semibold uppercase text-green-300">
                    ${price}
                </span>
                <p className="my-2 text-xl font-bold">{name}</p>
            </div>
        </div>
    );
};

export default ItemCard;
