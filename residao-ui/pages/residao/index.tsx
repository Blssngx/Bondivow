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

export default function GlobeDemo() {
    const daoAddress = "0x3F54dFf2343CB2464e62Be2b3DBE88dF39186604"
    const { data: balance } = useReadContract({
        abi: erc20Abi,
        address: cUSDTokenAddressTestnet,
        functionName: "balanceOf",
        args: [daoAddress!],
        chainId: celoAlfajores.id,
        query: { enabled: !!daoAddress },
    });
    const formatCurrency = (amount: number | bigint) =>
        new Intl.NumberFormat('en-US', { style: 'decimal', currency: 'USD', minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(amount);

    return (
        <Layer>
            <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-3xl border bg-background px-40 pb-40 pt-8 md:pb-60 md:shadow-xl">
                <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
                    Residao
                </span>
                <Globe className="top-28" />
                <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
            </div>
            <div className="bg-background p-3 rounded-3xl">
                <p className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-400/80 bg-clip-text text-center text-3xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">Total Funds</p>
                <p className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-500/80 bg-clip-text text-center text-5xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
                    ${formatCurrency(Number(formatEther(balance || BigInt(0))))}
                </p>
                <p className="mt-5 pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-500/80 bg-clip-text text-center text-sm border p-1 rounded-full font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">{daoAddress}</p>
            </div>

            <div className="flex grid grid-cols-2">
                <div className="bg-background p-3 rounded-3xl">
                    <p className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-400/80 bg-clip-text text-center text-md font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10  mb-1">Total<br />Contributions</p>
                    <p className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-500/80 bg-clip-text text-center text-2xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
                        ${formatCurrency(2 * Number(formatEther(balance || BigInt(0))))}
                    </p>

                </div>

                <div className="bg-background p-3 rounded-3xl">
                    <p className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-400/80 bg-clip-text text-center text-md font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10 mb-1">Total<br />Loans</p>
                    <p className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-500/80 bg-clip-text text-center text-2xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
                        ${formatCurrency(0.5 * Number(formatEther(balance || BigInt(0))))}
                    </p>

                </div>
            </div>

            <div className="w-full p-2">
                <Button className="mt-5 rounded-full w-full bg-[#353535]">Become a Citizen</Button>
            </div>

        </Layer>
    );
}
