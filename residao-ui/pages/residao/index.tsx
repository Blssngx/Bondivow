import BottomNavBar from "@/components/NavBar";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { Layer } from "@/components/RoundedDrawerNav";
import axios from 'axios';


interface Activity {
    date: string;
    description: string;
  }
  
  interface PoolData {
    totalFunds: number;
    totalContributions: number;
    totalLoans: number;
    recentActivities: Activity[];
  }

export default function Home() {
    const [userAddress, setUserAddress] = useState("");
    const [isMounted, setIsMounted] = useState(false);
    const { address, isConnected } = useAccount();
    const [poolData, setPoolData] = useState<PoolData>({
        totalFunds: 0,
        totalContributions: 0,
        totalLoans: 0,
        recentActivities: [],
      });
    
      useEffect(() => {
        const fetchData = async () => {
          // Example API call to fetch pool data
          const response = await axios.get('/api/community-pool');
          setPoolData(response.data);
        };
    
        fetchData();
      }, []);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (isConnected && address) {
            setUserAddress(address);
        }
    }, [address, isConnected]);

    if (!isMounted) {
        return null;
    }

    return (
        <Layer>
            <div className="bg-gray-100 min-h-screen p-4 rounded-xl">
                {/* <h1 className="text-3xl font-bold text-center mb-4">Community Pool Overview</h1> */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div className="h-24 text-center text-white bg-neutral-500 rounded-full flex flex-col justify-center items-center">
                        <p className="text-neutral-950 text-lg">${poolData.totalFunds}</p>
                        <p className="text-neutral-950">Total Funds</p>
                    </div>
                    <div className="h-24 text-center text-white bg-neutral-500 rounded-full flex flex-col justify-center items-center">
                        <p className="text-neutral-950 text-lg">${poolData.totalContributions}</p>
                        <p className="text-neutral-950">Total Contributions</p>
                    </div>
                    <div className="h-24 text-center text-white bg-neutral-500 rounded-full flex flex-col justify-center items-center">
                        <p className="text-neutral-950 text-lg">${poolData.totalLoans}</p>
                        <p className="text-neutral-950">Total Loans Issued</p>
                    </div>
                </div>
                <div>
                    <h2 className="text-2xl font-bold mb-4">Recent Activities</h2>
                    <ul className="list-disc list-inside space-y-2">
                        {poolData.recentActivities.map((activity, index) => (
                            <li key={index} className="bg-white p-2 rounded-md shadow">
                                {activity.date}: {activity.description}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Layer>
    );
}
