// /* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import classNames from 'classnames';
import { Layer } from '@/components/RoundedDrawerNav';
import { Icons } from '@/components/icons';
import ItemCard from '@/components/item-card';

interface Item {
  id: number;
  name: string;
  description: string;
  type: 'goods' | 'services';
  image: string;
  price: string;
}

const FeedPage: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [activeTab, setActiveTab] = useState<'goods' | 'services'>('goods');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      const response = await axios.get('/api/items'); // Replace with your actual API endpoint
      setItems(response.data);
    };

    fetchItems();
  }, []);

  const filteredItems = items
    .filter(item => item.type === activeTab)
    .filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <Layer>
      <div className="bg-white min-h-screen">
      {/* Top Navbar */}
      <div className="bg-gradient-to-r from-red-400 to-pink-500 p-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <span className="text-white text-lg font-bold">BondiVow</span>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.004 6.004 0 00-4.725-5.917C13.023 5.042 12.526 5 12 5s-1.023.042-1.275.083A6.004 6.004 0 006 11v3.159c0 .425-.214.823-.595 1.036L4 17h11z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Profile Section */}
      <div className="p-4 flex flex-col items-center">
        <div className="bg-gray-200 rounded-full p-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
        </div>
        <div className="flex space-x-4 mt-4">
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-sm font-semibold">BH84</p>
            <p className="text-xs text-gray-500">Title Here</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-sm font-semibold">ol__r</p>
            <p className="text-xs text-gray-500">1 sec a day</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-sm font-semibold">kar__</p>
            <p className="text-xs text-gray-500">Keep my B...</p>
          </div>
        </div>
      </div>

      {/* Active/Complete Tabs */}
      <div className="p-4 flex justify-between items-center">
        <div className="flex space-x-4">
          <button className="text-red-500 border-b-2 border-red-500 pb-1">Active</button>
          <button className="text-gray-500 pb-1">Complete</button>
        </div>
        <button className="bg-red-500 text-white px-4 py-2 rounded-lg">Create</button>
      </div>

      {/* Placeholder for Content */}
      <div className="p-4 flex justify-center items-center h-64">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>
      </div>
    </div>
      {/* <div className="min-h-screen rounded-3xl p-2 bg-gray-100">
        <div className="flex mb-2">
          <button
            className={classNames(
              'px-4 py-2 rounded-full transition-colors flex items-center justify-center',
              activeTab === 'goods' ? 'text-black bg-black rounded-full px-3 py-3' : 'text-white'
            )}
            onClick={() => setActiveTab('goods')}
          >
            <Icons.goods
              fillColor={activeTab === 'goods' ? 'white' : 'black'}
              className="w-5 h-5"
            />
            {activeTab === 'goods' && (
              <span
                className={`${activeTab === 'goods' ? 'text-white' : 'text-black'} font-bold text-xs uppercase ml-1`}
              >
                Goods
              </span>
            )}
          </button>
          <button
            className={classNames(
              'px-4 py-2 rounded-full transition-colors flex items-center justify-center ml-2',
              activeTab === 'services' ? 'text-black bg-black rounded-full px-3 py-3' : 'text-white'
            )}
            onClick={() => setActiveTab('services')}
          >
            <Icons.services
              fillColor={activeTab === 'services' ? 'white' : 'black'}
              className="w-5 h-5"
            />
            {activeTab === 'services' && (
              <span
                className={`${activeTab === 'services' ? 'text-white' : 'text-black'} font-bold text-xs uppercase ml-1`}
              >
                Services
              </span>
            )}
          </button>
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search items..."
            className="w-full p-2 rounded-full border border-black"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-2 gap-2">
          {filteredItems.map(item => (
            <ItemCard
              key={item.id}
              id={item.id}
              name={item.name}
              description={item.description}
              image={item.image}
              price={item.price}
            />
          ))}
        </div>
      </div> */}
    </Layer>
  );
};

export default FeedPage;


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

// import { useEffect, useState } from "react";
// import PrimaryButton from "@/components/Button";
// import { useWeb3 } from "@/context/useWeb3";
// import TransferCUSD from "@/components/dApps/TransferCUSD";
// import PayTokenFunctionCall from "@/components/dApps/PayTokenFunctionCall";

// export default function Home() {
//     const {
//         address,
//         getUserAddress,
//         sendCUSD,
//         getBalance,
//         checkIfTransactionSucceeded
//     } = useWeb3();
//     const [signingLoading, setSigningLoading] = useState(false);
//     const [tx, setTx] = useState<any>(undefined);
//     const [recipient, setRecipient] = useState<string>("");
//     const [amount, setAmount] = useState<string>("");
//     const [balance, setBalance] = useState<string>("");
//     const [transactionStatus, setTransactionStatus] = useState<string | null>(null);
//     const [errorMessage, setErrorMessage] = useState<string | null>(null);

//     useEffect(() => {
//         getUserAddress().then(async () => {
//             if (address) {
//                 const userBalance = await getBalance(address);
//                 setBalance(userBalance);
//             }
//         });
//     }, [address]);

//     useEffect(() => {
//         const checkStatus = async () => {
//             if (tx) {
//                 const status = await checkIfTransactionSucceeded(tx.transactionHash);
//                 setTransactionStatus(status ? "Successful" : "Failed");
//             }
//         };
//         checkStatus();
//     }, [tx]);

//     const sendingCUSD = async () => {
//         if (recipient && amount) {
//             const amountInCUSD = parseFloat(amount);
//             const balanceInCUSD = parseFloat(balance);
//             if (amountInCUSD > balanceInCUSD) {
//                 setErrorMessage("Insufficient balance to complete the transaction.");
//                 return;
//             }
//             setSigningLoading(true);
//             setErrorMessage(null);
//             try {
//                 const tx = await sendCUSD(recipient, amount);
//                 setTx(tx);
//                 const userBalance = await getBalance(address!);
//                 setBalance(userBalance);
//             } catch (error) {
//                 console.log(error);
//             } finally {
//                 setSigningLoading(false);
//             }
//         }
//     };

//     return (
//         // <div className="mx-auto p-6 bg-pink-100 shadow-lg">
//         //     {address ? (
//         //         <>
//         //             <div className="grid grid-cols-1 gap-6">
//         //                 <input
//         //                     type="text"
//         //                     placeholder="Recipient Address"
//         //                     value={recipient}
//         //                     onChange={(e) => setRecipient(e.target.value)}
//         //                     className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//         //                 />
//         //                 <input
//         //                     type="text"
//         //                     placeholder="Amount to Send"
//         //                     value={amount}
//         //                     onChange={(e) => setAmount(e.target.value)}
//         //                     className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//         //                 />
//         //                 {errorMessage && (
//         //                     <div className="text-blue-800 text-sm">
//         //                         {errorMessage}
//         //                     </div>
//         //                 )}
//         //                 <PrimaryButton
//         //                     loading={signingLoading}
//         //                     onClick={sendingCUSD}
//         //                     title="Send"
//         //                     widthFull
//         //                 />
//         //             </div>
//         //             <div className="mt-6">
//         //                 <div className="text-center">
//         //                     <span className="font-semibold">Receiver:</span> {recipient}
//         //                 </div>
//         //                 <div className="text-center mt-2">
//         //                     <span className="font-semibold">Amount:</span> {amount} cUSD
//         //                 </div>
//         //             </div>
//         //             {transactionStatus && (
//         //                 <div className="mt-4 text-center text-lg font-semibold">
//         //                     Transaction Status: {transactionStatus}
//         //                 </div>
//         //             )}
//         //         </>
//         //     ) : (
//         //         <div className="text-center text-xl font-semibold text-pink-100">
                    
//         //         </div>
//         //     )}
//         //     {tx && (
//         //         <div className="mt-4 text-center text-lg font-semibold">
//         //             Tx Completed: {tx.transactionHash.substring(0, 6)}...
//         //             {tx.transactionHash.substring(tx.transactionHash.length - 6)}
//         //         </div>
//         //     )}
//         // </div>
//         <div
//         style={{
//             marginTop: "20px",
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             gap: "12px",
//         }}
//     >
//         <TransferCUSD />
//         {/* <PayTokenFunctionCall /> */}
//     </div>
//     );
// }


