// import BottomNavBar from "@/components/NavBar";
// import { useEffect, useState } from "react";
// import { useAccount } from "wagmi";
// import { Layer } from "@/components/RoundedDrawerNav";
// import axios from 'axios';


// interface Activity {
//     date: string;
//     description: string;
//   }
  
//   interface PoolData {
//     totalFunds: number;
//     totalContributions: number;
//     totalLoans: number;
//     recentActivities: Activity[];
//   }

// export default function Home() {
//     const [userAddress, setUserAddress] = useState("");
//     const [isMounted, setIsMounted] = useState(false);
//     const { address, isConnected } = useAccount();
//     const [poolData, setPoolData] = useState<PoolData>({
//         totalFunds: 0,
//         totalContributions: 0,
//         totalLoans: 0,
//         recentActivities: [],
//       });
    
//       useEffect(() => {
//         const fetchData = async () => {
//           // Example API call to fetch pool data
//           const response = await axios.get('/api/community-pool');
//           setPoolData(response.data);
//         };
    
//         fetchData();
//       }, []);

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
//             <div className="bg-gray-100 min-h-screen p-4 rounded-xl">
//                 {/* <h1 className="text-3xl font-bold text-center mb-4">Community Pool Overview</h1> */}
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
//                     <div className="h-24 text-center text-white bg-neutral-500 rounded-full flex flex-col justify-center items-center">
//                         <p className="text-neutral-950 text-lg">${poolData.totalFunds}</p>
//                         <p className="text-neutral-950">Total Funds</p>
//                     </div>
//                     <div className="h-24 text-center text-white bg-neutral-500 rounded-full flex flex-col justify-center items-center">
//                         <p className="text-neutral-950 text-lg">${poolData.totalContributions}</p>
//                         <p className="text-neutral-950">Total Contributions</p>
//                     </div>
//                     <div className="h-24 text-center text-white bg-neutral-500 rounded-full flex flex-col justify-center items-center">
//                         <p className="text-neutral-950 text-lg">${poolData.totalLoans}</p>
//                         <p className="text-neutral-950">Total Loans Issued</p>
//                     </div>
//                 </div>
//                 <div>
//                     <h2 className="text-2xl font-bold mb-4">Recent Activities</h2>
//                     <ul className="list-disc list-inside space-y-2">
//                         {poolData.recentActivities.map((activity, index) => (
//                             <li key={index} className="bg-white p-2 rounded-md shadow">
//                                 {activity.date}: {activity.description}
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             </div>
//         </Layer>
//     );
// }

import Globe from "@/components/magicui/globe";
import { Layer } from "@/components/RoundedDrawerNav";

export default function GlobeDemo() {
  return (
    <Layer>
    <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-3xl border bg-background px-40 pb-40 pt-8 md:pb-60 md:shadow-xl">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Residao
      </span>
      <Globe className="top-28" />
      <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
    </div>
    </Layer>
  );
}
