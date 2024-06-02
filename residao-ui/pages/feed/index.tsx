// import BottomNavBar from "@/components/NavBar";
// import { useEffect, useState } from "react";
// import { useAccount } from "wagmi";
// import { Layer } from "@/components/RoundedDrawerNav";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


// export default function Home() {
//     const [userAddress, setUserAddress] = useState("");
//     const [isMounted, setIsMounted] = useState(false);
//     const { address, isConnected } = useAccount();

//     useEffect(() => {
//         setIsMounted(true);
//     }, []);

//     useEffect(() => {
//         if (isConnected && address) {
//             setUserAddress(address);
//         }
//     }, [address, isConnected]);

//     if (!isMounted) {
//         return null;
//     }

//     return (
//         <Layer>
//             <div className="flex flex-col items-center h-screen">
//                 <Tabs defaultValue="account" className="w-full">
//                     <TabsList>
//                         <TabsTrigger value="account">Goods</TabsTrigger>
//                         <TabsTrigger value="password">Services</TabsTrigger>
//                     </TabsList>
//                     <TabsContent value="account">Goods here.</TabsContent>
//                     <TabsContent value="password">Services here.</TabsContent>
//                 </Tabs>
//             </div>
//         </Layer>
//     );
// }

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import classNames from 'classnames';
import BottomNavBar from "@/components/NavBar";
import { useAccount } from "wagmi";
import { Layer } from "@/components/RoundedDrawerNav";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface Item {
    id: number;
    name: string;
    description: string;
    type: 'good' | 'service';
}

const FeedPage: React.FC = () => {
    const [items, setItems] = useState<Item[]>([]);
    const [activeTab, setActiveTab] = useState<'goods' | 'services'>('goods');
    const [userAddress, setUserAddress] = useState("");
    const [isMounted, setIsMounted] = useState(false);
    const { address, isConnected } = useAccount();

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (isConnected && address) {
            setUserAddress(address);
        }
    }, [address, isConnected]);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        const fetchItems = async () => {
            const response = await axios.get('/api/items'); // Replace with your actual API endpoint
            setItems(response.data);
        };

        fetchItems();
    }, []);

    if (!isMounted) {
        return null;
    }



    // @ts-ignore
    const filteredItems = items.filter(item => item.type === activeTab);

    return (
        <Layer>
            <div className="min-h-screen rounded-xl p-4 bg-gray-100">
                <h1 className="text-3xl font-bold text-center mb-4">Community Feed</h1>
                <div className="flex justify-center mb-8">
                    <button
                        className={classNames(
                            'px-4 py-2 rounded-l-full',
                            activeTab === 'goods' ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'
                        )}
                        onClick={() => setActiveTab('goods')}
                    >
                        Goods
                    </button>
                    <button
                        className={classNames(
                            'px-4 py-2 rounded-r-full',
                            activeTab === 'services' ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'
                        )}
                        onClick={() => setActiveTab('services')}
                    >
                        Services
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredItems.map(item => (
                        <div key={item.id} className="bg-white p-4 rounded-md shadow">
                            <h2 className="text-xl font-bold">{item.name}</h2>
                            <p className="mt-2">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Layer>
    );
};

export default FeedPage;
