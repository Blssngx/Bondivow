/* eslint-disable react-hooks/exhaustive-deps */
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import classNames from 'classnames';
// import { Layer } from '@/components/RoundedDrawerNav';
// import { Icons } from '@/components/icons';
// import ItemCard from '@/components/item-card';

// interface Item {
//   id: number;
//   name: string;
//   description: string;
//   type: 'goods' | 'services';
//   image: string;
//   price: string;
// }

// const FeedPage: React.FC = () => {
//   const [items, setItems] = useState<Item[]>([]);
//   const [activeTab, setActiveTab] = useState<'goods' | 'services'>('goods');
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     const fetchItems = async () => {
//       const response = await axios.get('/api/items'); // Replace with your actual API endpoint
//       setItems(response.data);
//     };

//     fetchItems();
//   }, []);

//   const filteredItems = items
//     .filter(item => item.type === activeTab)
//     .filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));

//   return (
//     <Layer>
//       <div className="min-h-screen rounded-3xl p-2 bg-gray-100">
//         <div className="flex mb-2">
//           <button
//             className={classNames(
//               'px-4 py-2 rounded-full transition-colors flex items-center justify-center',
//               activeTab === 'goods' ? 'text-black bg-black rounded-full px-3 py-3' : 'text-white'
//             )}
//             onClick={() => setActiveTab('goods')}
//           >
//             <Icons.goods
//               fillColor={activeTab === 'goods' ? 'white' : 'black'}
//               className="w-5 h-5"
//             />
//             {activeTab === 'goods' && (
//               <span
//                 className={`${activeTab === 'goods' ? 'text-white' : 'text-black'} font-bold text-xs uppercase ml-1`}
//               >
//                 Goods
//               </span>
//             )}
//           </button>
//           <button
//             className={classNames(
//               'px-4 py-2 rounded-full transition-colors flex items-center justify-center ml-2',
//               activeTab === 'services' ? 'text-black bg-black rounded-full px-3 py-3' : 'text-white'
//             )}
//             onClick={() => setActiveTab('services')}
//           >
//             <Icons.services
//               fillColor={activeTab === 'services' ? 'white' : 'black'}
//               className="w-5 h-5"
//             />
//             {activeTab === 'services' && (
//               <span
//                 className={`${activeTab === 'services' ? 'text-white' : 'text-black'} font-bold text-xs uppercase ml-1`}
//               >
//                 Services
//               </span>
//             )}
//           </button>
//         </div>
//         <div className="mb-4">
//           <input
//             type="text"
//             placeholder="Search items..."
//             className="w-full p-2 rounded-full border border-black"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//         </div>
//         <div className="grid grid-cols-2 gap-2">
//           {filteredItems.map(item => (
//             <ItemCard
//               key={item.id}
//               id={item.id}
//               name={item.name}
//               description={item.description}
//               image={item.image}
//               price={item.price}
//             />
//           ))}
//         </div>
//       </div>
//     </Layer>
//   );
// };

// export default FeedPage;


// // src/pages/FeedPage.tsx

// // import React, { useEffect, useState } from 'react';
// // import { ethers } from 'ethers';
// // import { useAccount, useDisconnect } from 'wagmi';
// // import { useReadContract, useWriteContract, usePrepareTransactionRequest } from 'wagmi';
// // import classNames from 'classnames';
// // import { CONTRACT_ADDRESS, CONTRACT_ABI } from '../constants';
// // import ItemCard from '@/components/ItemCard';

// // interface Item {
// //   id: number;
// //   name: string;
// //   description: string;
// //   type: 'goods' | 'services';
// //   image: string;
// //   price: string;
// // }

// // const FeedPage: React.FC = () => {
// //   const { address, isConnected } = useAccount();
// //   const { disconnect } = useDisconnect();

// //   const [items, setItems] = useState<Item[]>([]);
// //   const [activeTab, setActiveTab] = useState<'goods' | 'services'>('goods');
// //   const [searchTerm, setSearchTerm] = useState('');
// //   const [newGood, setNewGood] = useState({ name: '', description: '', image: '', price: '' });
// //   const [loading, setLoading] = useState(false);

// //   const { data: goodsCountData } = useReadContract({
// //     address: CONTRACT_ADDRESS,
// //     abi: CONTRACT_ABI,
// //     functionName: 'nextGoodId',
// //   });

// //   const { data: goodsData, refetch: refetchGoods } = useReadContract({
// //     address: CONTRACT_ADDRESS,
// //     abi: CONTRACT_ABI,
// //     functionName: 'getGoods',
// //   });

// //   const { config: listGoodConfig } = usePrepareTransactionRequest({
// //     address: CONTRACT_ADDRESS,
// //     abi: CONTRACT_ABI,
// //     functionName: 'listGood',
// //     args: [newGood.name, newGood.description, newGood.image, ethers.utils.parseUnits(newGood.price, 'ether')],
// //   });

// //   const { write: listGoodWrite } = useWriteContract(listGoodConfig);

// //   useEffect(() => {
// //     if (isConnected && goodsData) {
// //       const goodsArray = goodsData.map((good: any) => ({
// //         id: good.id.toNumber(),
// //         name: good.name,
// //         description: good.description,
// //         image: good.image,
// //         price: ethers.utils.formatUnits(good.price, 'ether'),
// //         type: 'goods',
// //       }));
// //       setItems(goodsArray);
// //     }
// //   }, [isConnected, goodsData]);

// //   const listGood = async () => {
// //     try {
// //       setLoading(true);
// //       await listGoodWrite?.();
// //       refetchGoods();
// //       setNewGood({ name: '', description: '', image: '', price: '' });
// //     } catch (error) {
// //       console.error('Error listing good:', error);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const purchaseGood = async (id: number, price: string) => {
// //     const { config: purchaseGoodConfig } = usePrepareTransactionRequest({
// //       address: CONTRACT_ADDRESS,
// //       abi: CONTRACT_ABI,
// //       functionName: 'purchaseGood',
// //       args: [id],
// //     });

// //     const { write: purchaseGoodWrite } = useWriteContract(purchaseGoodConfig);

// //     try {
// //       setLoading(true);
// //       await purchaseGoodWrite?.();
// //       refetchGoods();
// //     } catch (error) {
// //       console.error('Error purchasing good:', error);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const filteredItems = items
// //     .filter(item => item.type === activeTab)
// //     .filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));

// //   return (
// //     <div className="min-h-screen rounded-3xl p-4 bg-gray-100">
// //       {!isConnected ? (
// //         <p>Please connect your wallet to interact with the marketplace.</p>
// //       ) : (
// //         <>
// //           <button onClick={() => disconnect()} className="bg-red-500 text-white py-2 px-4 rounded-full mb-4">Disconnect</button>
// //           <div className="flex justify-center mb-4">
// //             <button
// //               className={classNames(
// //                 'px-4 py-2 rounded-full transition-colors flex items-center justify-center',
// //                 activeTab === 'goods' ? 'text-white bg-black' : 'text-black bg-white'
// //               )}
// //               onClick={() => setActiveTab('goods')}
// //             >
// //               Goods
// //             </button>
// //             <button
// //               className={classNames(
// //                 'px-4 py-2 rounded-full transition-colors flex items-center justify-center ml-2',
// //                 activeTab === 'services' ? 'text-white bg-black' : 'text-black bg-white'
// //               )}
// //               onClick={() => setActiveTab('services')}
// //             >
// //               Services
// //             </button>
// //           </div>
// //           <div className="mb-4">
// //             <input
// //               type="text"
// //               placeholder="Search items..."
// //               className="w-full p-2 rounded-full border border-gray-300"
// //               value={searchTerm}
// //               onChange={(e) => setSearchTerm(e.target.value)}
// //             />
// //           </div>
// //           <div className="mb-4">
// //             <h2>List New Good</h2>
// //             <input
// //               type="text"
// //               placeholder="Name"
// //               value={newGood.name}
// //               onChange={(e) => setNewGood({ ...newGood, name: e.target.value })}
// //               className="w-full p-2 rounded-full border border-gray-300 mb-2"
// //             />
// //             <input
// //               type="text"
// //               placeholder="Description"
// //               value={newGood.description}
// //               onChange={(e) => setNewGood({ ...newGood, description: e.target.value })}
// //               className="w-full p-2 rounded-full border border-gray-300 mb-2"
// //             />
// //             <input
// //               type="text"
// //               placeholder="Image URL"
// //               value={newGood.image}
// //               onChange={(e) => setNewGood({ ...newGood, image: e.target.value })}
// //               className="w-full p-2 rounded-full border border-gray-300 mb-2"
// //             />
// //             <input
// //               type="number"
// //               placeholder="Price in cUSD"
// //               value={newGood.price}
// //               onChange={(e) => setNewGood({ ...newGood, price: e.target.value })}
// //               className="w-full p-2 rounded-full border border-gray-300 mb-2"
// //             />
// //             <button onClick={listGood} disabled={loading} className="bg-blue-500 text-white py-2 px-4 rounded-full">
// //               {loading ? 'Listing...' : 'List Good'}
// //             </button>
// //           </div>
// //           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
// //             {filteredItems.map(item => (
// //               <ItemCard
// //                 key={item.id}
// //                 id={item.id}
// //                 name={item.name}
// //                 description={item.description}
// //                 image={item.image}
// //                 price={item.price}
// //                 onPurchase={() => purchaseGood(item.id, item.price)}
// //               />
// //             ))}
// //           </div>
// //         </>
// //       )}
// //     </div>
// //   );
// // };

// // export default FeedPage;

import { useEffect, useState } from "react";
import PrimaryButton from "@/components/Button";
import { useWeb3 } from "@/context/useWeb3";

export default function Home() {
    const {
        address,
        getUserAddress,
        sendCUSD,
        getBalance,
        checkIfTransactionSucceeded
    } = useWeb3();
    const [signingLoading, setSigningLoading] = useState(false);
    const [tx, setTx] = useState<any>(undefined);
    const [recipient, setRecipient] = useState<string>("");
    const [amount, setAmount] = useState<string>("");
    const [balance, setBalance] = useState<string>("");
    const [transactionStatus, setTransactionStatus] = useState<string | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    useEffect(() => {
        getUserAddress().then(async () => {
            if (address) {
                const userBalance = await getBalance(address);
                setBalance(userBalance);
            }
        });
    }, [address]);

    useEffect(() => {
        const checkStatus = async () => {
            if (tx) {
                const status = await checkIfTransactionSucceeded(tx.transactionHash);
                setTransactionStatus(status ? "Successful" : "Failed");
            }
        };
        checkStatus();
    }, [tx]);

    const sendingCUSD = async () => {
        if (recipient && amount) {
            const amountInCUSD = parseFloat(amount);
            const balanceInCUSD = parseFloat(balance);
            if (amountInCUSD > balanceInCUSD) {
                setErrorMessage("Insufficient balance to complete the transaction.");
                return;
            }
            setSigningLoading(true);
            setErrorMessage(null);
            try {
                const tx = await sendCUSD(recipient, amount);
                setTx(tx);
                const userBalance = await getBalance(address!);
                setBalance(userBalance);
            } catch (error) {
                console.log(error);
            } finally {
                setSigningLoading(false);
            }
        }
    };

    return (
        <div className="mx-auto p-6 bg-pink-100 shadow-lg">
            {address ? (
                <>
                    <div className="grid grid-cols-1 gap-6">
                        <input
                            type="text"
                            placeholder="Recipient Address"
                            value={recipient}
                            onChange={(e) => setRecipient(e.target.value)}
                            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="text"
                            placeholder="Amount to Send"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errorMessage && (
                            <div className="text-blue-800 text-sm">
                                {errorMessage}
                            </div>
                        )}
                        <PrimaryButton
                            loading={signingLoading}
                            onClick={sendingCUSD}
                            title="Send"
                            widthFull
                        />
                    </div>
                    <div className="mt-6">
                        <div className="text-center">
                            <span className="font-semibold">Receiver:</span> {recipient}
                        </div>
                        <div className="text-center mt-2">
                            <span className="font-semibold">Amount:</span> {amount} cUSD
                        </div>
                    </div>
                    {transactionStatus && (
                        <div className="mt-4 text-center text-lg font-semibold">
                            Transaction Status: {transactionStatus}
                        </div>
                    )}
                </>
            ) : (
                <div className="text-center text-xl font-semibold text-pink-100">
                    
                </div>
            )}
            {tx && (
                <div className="mt-4 text-center text-lg font-semibold">
                    Tx Completed: {tx.transactionHash.substring(0, 6)}...
                    {tx.transactionHash.substring(tx.transactionHash.length - 6)}
                </div>
            )}
        </div>
    );
}
