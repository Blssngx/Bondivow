import Globe from "@/components/magicui/globe";
import { Layer } from "@/components/RoundedDrawerNav";
import NumberTicker from "@/components/magicui/number-ticker";
import { celoAlfajores } from "viem/chains";
import { useState } from "react";
import { useAccount, useReadContract } from "wagmi";
import {
    erc20Abi,
    formatEther,
} from "viem";
import { Button } from "@/components/ui/button";

const cUSDTokenAddressTestnet = "0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1";

type Tab = 'featured' | 'create';

export default function GlobeDemo() {
    // const daoAddress = "0x3F54dFf2343CB2464e62Be2b3DBE88dF39186604"
    // const { data: balance } = useReadContract({
    //     abi: erc20Abi,
    //     address: cUSDTokenAddressTestnet,
    //     functionName: "balanceOf",
    //     args: [daoAddress!],
    //     chainId: celoAlfajores.id,
    //     query: { enabled: !!daoAddress },
    // });
    // const formatCurrency = (amount: number | bigint) =>
    //     new Intl.NumberFormat('en-US', { style: 'decimal', currency: 'USD', minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(amount);

  
    const [activeTab, setActiveTab] = useState<Tab>('featured');
    return (
        // <Layer>
        //     <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-3xl border bg-background px-40 pb-40 pt-8 md:pb-60 md:shadow-xl">
        //         <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-6xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        //             Residao
        //         </span>
        //         <Globe className="top-28" />
        //         <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
        //     </div>
        //     <div className="bg-background py-3 rounded-3xl">
        //         <p className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-400/80 bg-clip-text text-center text-3xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">Total Funds</p>
        //         <p className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-500/80 bg-clip-text text-center text-5xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        //             ${formatCurrency(Number(formatEther(balance || BigInt(0))))}
        //         </p>
        //         {/* <p className="mt-5 pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-500/80 bg-clip-text text-center text-sm border p-1 rounded-full font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">{daoAddress}</p> */}
        //     </div>

        //     <div className="flex grid grid-cols-2">
        //         <div className="bg-background  rounded-3xl">
        //             <p className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-400/80 bg-clip-text text-center text-md font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10  mb-1">Total<br />Contributions</p>
        //             <p className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-500/80 bg-clip-text text-center text-2xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        //                 ${formatCurrency(2 * Number(formatEther(balance || BigInt(0))))}
        //             </p>

        //         </div>

        //         <div className="bg-background rounded-3xl">
        //             <p className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-400/80 bg-clip-text text-center text-md font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10 mb-1">Total<br />Loans</p>
        //             <p className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-500/80 bg-clip-text text-center text-2xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        //                 ${formatCurrency(0.5 * Number(formatEther(balance || BigInt(0))))}
        //             </p>

        //         </div>
        //     </div>

        //     <div className="w-full p-2">
        //         <Button className="mt-5 rounded-full w-full bg-[#353535]">Become a Citizen</Button>
        //     </div>

        // </Layer>
        <Layer>
         (
    <div className="bg-white min-h-screen">
      {/* Top Navbar */}
      <div className="bg-gradient-to-r from-red-400 to-pink-500 p-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.004 6.004 0 00-4.725-5.917C13.023 5.042 12.526 5 12 5s-1.023.042-1.275.083A6.004 6.004 0 006 11v3.159c0 .425-.214.823-.595 1.036L4 17h11z" />
            </svg>
          </button>
          <span className="text-white text-lg font-bold">What's your goal?</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-4">
        <h1 className="text-4xl font-bold">What's <br /> your goal?</h1>
        <p className="mt-4 text-gray-600">
          Pick from our popular options or create a custom goal specific for you. If you need some inspiration, check out our <span className="text-blue-500">Communities</span>. Get started now!
        </p>

        {/* Activation Code Section */}
        <div className="mt-6 flex items-center space-x-4">
          <div className="flex-1">
            <label className="block text-gray-700">Have an Activation Code?</label>
            <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="What's that?" />
          </div>
          <button className="bg-black text-white px-4 py-2 rounded-md">Go</button>
        </div>

        {/* Tabs */}
        <div className="mt-6 flex space-x-4 border-b">
          <button
            onClick={() => setActiveTab('featured')}
            className={`pb-1 ${activeTab === 'featured' ? 'text-red-500 border-b-2 border-red-500' : 'text-gray-500 border-transparent'}`}
          >
            Featured
          </button>
          <button
            onClick={() => setActiveTab('create')}
            className={`pb-1 ${activeTab === 'create' ? 'text-red-500 border-b-2 border-red-500' : 'text-gray-500 border-transparent'}`}
          >
            Create your own
          </button>
        </div>

        {/* Content Based on Active Tab */}
        {activeTab === 'featured' && (
          <div className="mt-6">
            <img src="/path-to-your-image.jpg" alt="Lose Weight" className="rounded-lg w-full" />
            <h2 className="text-2xl font-semibold mt-4">Lose Weight</h2>
            <p className="mt-2 text-gray-600">
              Slowly but surely! Decide on your target weight and set a timeline to reach it. Don’t worry about calculations — stickK automatically sets up smart milestones to help you succeed.
            </p>
            <button className="bg-gradient-to-r from-red-400 to-pink-500 text-white px-4 py-2 rounded-lg mt-4">Select Goal</button>
          </div>
        )}

        {activeTab === 'create' && (
          <div className="mt-6">
            <input type="text" className="w-full border border-gray-300 rounded-md shadow-sm p-4 text-center text-gray-500" placeholder="Your Goal Title" />
            <button className="bg-gray-400 text-white px-4 py-2 rounded-lg mt-4 w-full">Start committing now!</button>

            <div className="mt-6">
              <h2 className="text-2xl font-semibold">What exactly is a Custom goal?</h2>
              <p className="mt-2 text-gray-600">
                Commit to anything and dare to change, whatever it is you want to do. It’s your goal.
              </p>
              <p className="mt-2 text-gray-600">
                Whether it’s writing your dissertation, stop talking to your ex, or finally making your own Kombucha brewery, commit to it! stickK provides the tools necessary to commit to anything.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
        </Layer>
    );
}
