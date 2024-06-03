/* eslint-disable @next/next/no-img-element */
// @ts-nocheck
// components/ItemCard.tsx

import React from 'react';
import SpringModal from './spring-modal';
import Image from 'next/image';
import { Button } from './ui/button';

interface ItemCardProps {
    id: number;
    name: string;
    description: string;
    image: string;
    price: string;
}

const CARD_WIDTH = 180;
const CARD_HEIGHT = 180;
const MARGIN = 20;

const BREAKPOINTS = {
    sm: 640,
    lg: 1024,
};



const ItemCard: React.FC<ItemCardProps> = ({ id, name, description, image, price }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <>


            <button
                onClick={() => setIsOpen(true)}
                className="relative w-full h-[150px] shrink-0 cursor-pointer rounded-lg bg-white shadow-md transition-all hover:scale-[1.015] hover:shadow-xl"
                style={{
                    // width: CARD_WIDTH,
                    // height: CARD_HEIGHT,
                    marginRight: MARGIN,
                    backgroundImage: `url(${image || ""})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                }}
            >

                <div className="absolute rounded-lg inset-0 z-20 bg-gradient-to-b from-black/90 via-black/60 to-black/0 p-3 text-white transition-[backdrop-filter] hover:backdrop-blur-sm">
                    <span className="text-md font-semibold uppercase text-green-300">
                        ${price}
                    </span>
                    <p className="my-2 text-xl font-bold">{name}</p>
                    <p className="text-white text-xs mt-2">{description}</p>
                </div>
            </button>

            <SpringModal isOpen={isOpen} setIsOpen={setIsOpen}>
                <div className="flex flex-col items-center justify-center">
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-64 object-cover rounded-lg shadow-lg"
                    />
                    <h1 className="text-2xl font-bold mt-4 text-black">{name}</h1>
                    <p className="text-gray-500 mt-2">{description}</p>
                    <Button
                        onClick={() => alert("Purchased!")}
                        className="mt-4 text-white py-1 px-2 rounded w-full rounded-full bg-gradient-to-r from-black to-gray-600 hover:from-blue-600 hover:to-gray-400"
                    >
                        Purchase for ${price}
                    </Button>
                </div>
            </SpringModal>

        </>
    );
};

export default ItemCard;

// src/components/ItemCard.tsx

// import React from 'react';

// interface ItemCardProps {
//     id: number;
//     name: string;
//     description: string;
//     image: string;
//     price: string;
//     onPurchase: () => void;
// }

// const CARD_WIDTH = 195;
// const CARD_HEIGHT = 180;
// const MARGIN = 20;

// const ItemCard: React.FC<ItemCardProps> = ({ id, name, description, image, price, onPurchase }) => {
//     return (
//         <div
//             className="relative shrink-0 cursor-pointer rounded-lg bg-white shadow-md transition-all hover:scale-[1.015] hover:shadow-xl"
//             style={{
//                 width: CARD_WIDTH,
//                 height: CARD_HEIGHT,
//                 marginRight: MARGIN,
//                 backgroundImage: `url(${image || ""})`,
//                 backgroundPosition: "center",
//                 backgroundSize: "cover",
//             }}
//         >
//             <div className="absolute rounded-lg inset-0 z-20 bg-gradient-to-b from-black/90 via-black/60 to-black/0 p-3 text-white transition-[backdrop-filter] hover:backdrop-blur-sm">
//                 <span className="text-md font-semibold uppercase text-green-300">
//                     ${price}
//                 </span>
//                 <p className="my-2 text-xl font-bold">{name}</p>
//                 <p className="text-gray-300 mt-2">{description}</p>
//                 <button
//                     onClick={onPurchase}
//                     className="mt-4 bg-blue-500 text-white py-1 px-2 rounded"
//                 >
//                     Purchase
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default ItemCard;
