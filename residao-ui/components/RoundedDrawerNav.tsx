import React, {
    Dispatch,
    ReactNode,
    SetStateAction,
    useMemo,
    useState,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowUpRight, FiCircle, FiCrop, FiMenu, FiPlus } from "react-icons/fi";
import BottomNavBar from "./NavBar";
import { useEffect } from "react";
import { useAccount, useReadContract } from "wagmi";
import Davatar from '@davatar/react';
import { celoAlfajores } from "viem/chains";
import {
    erc20Abi,
    formatEther,
    parseEther,
    createWalletClient,
    custom,
    stringToHex,
    createPublicClient,
    http,
} from "viem";
import Link from "next/link";

const cUSDTokenAddressTestnet = "0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1";

export const RoundedDrawerNavExample = () => {
    return (
        <div className="bg-neutral-950 h-screen">
            <RoundedDrawerNav
                links={[
                    {
                        title: "Documentation",
                        sublinks: [
                            {
                                title: "Github",
                                href: "#",
                            },
                            {
                                title: "Lingofi.xyz",
                                href: "#",
                            },
                        ],
                    },
                ]}
                navBackground="bg-neutral-950"
                bodyBackground="bg-white"
            >
                <div className="flex flex-col items-center justify-center px-12 py-32">
                    <p className="text-center">

                    </p>
                </div>
                <div className="flex flex-col items-center justify-center px-12 py-32">
                    <p className="text-center">

                    </p>
                </div>
                <div className="flex flex-col items-center justify-center px-12 py-32">
                    <p className="text-center">

                    </p>
                </div>
            </RoundedDrawerNav>
            <div className="flex flex-col w-full justify-center items-center">
                <BottomNavBar />
            </div>
        </div>
    );
};

type LinkType = {
    title: string;
    sublinks: { title: string; href: string }[];
};

const RoundedDrawerNav = ({
    children,
    navBackground,
    bodyBackground,
    links,
}: {
    navBackground: string;
    bodyBackground: string;
    children?: ReactNode;
    links: LinkType[];
}) => {
    const [hovered, setHovered] = useState<string | null>(null);
    const [mobileNavOpen, setMobileNavOpen] = useState(false);
    const [userAddress, setUserAddress] = useState<`0x${string}` | null>(null);
    const activeSublinks = useMemo(() => {
        if (!hovered) return [];
        const link = links.find((l) => l.title === hovered);

        return link ? link.sublinks : [];
    }, [hovered]);

    // const [userAddress, setUserAddress] = useState("");
    const [isMounted, setIsMounted] = useState(false);
    const { address, isConnected } = useAccount();

    const { data: balance } = useReadContract({
        abi: erc20Abi,
        address: cUSDTokenAddressTestnet,
        functionName: "balanceOf",
        args: [userAddress!],
        chainId: celoAlfajores.id,
        query: { enabled: !!userAddress },
    });

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

    const formatCurrency = (amount: number | bigint) =>
        new Intl.NumberFormat('en-US', { style: 'decimal', currency: 'USD', minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(amount);


    return (
        <>
            <nav
                onMouseLeave={() => setHovered(null)}
                className={`${navBackground} p-4`}
            >
                <div className="flex items-start justify-between">
                    <div className="flex items-start">
                        <div className="flex">
                            <Logo />
                            <span className="text-xl font-bold text-neutral-50">
                                Residao
                            </span>
                        </div>

                        <DesktopLinks
                            links={links}
                            setHovered={setHovered}
                            hovered={hovered}
                            activeSublinks={activeSublinks}
                        />
                    </div>
                    <button className="hidden rounded-md bg-indigo-500 px-3 py-1.5 text-sm text-neutral-50 transition-colors hover:bg-indigo-600 md:block">
                        <span className="font-bold">Get started - </span> no CC required
                    </button>
                    <button
                        onClick={() => setMobileNavOpen((pv) => !pv)}
                        className="mt-0.5 block text-2xl text-neutral-50 md:hidden"
                    >
                        {isConnected ? (
                            <div className="border border-white rounded-full bg-white">
                                <Davatar
                                    size={20}
                                    address={address || ""}
                                />
                            </div>
                        ) : (
                            <FiCircle />
                        )}
                    </button>
                </div>
                {isConnected ? (

                    <div className="h2 text-center text-white">
                        Your address: {userAddress}
                    </div>) : (<div className="h2 text-center text-white">No Wallet Connected</div>)}

                    {/* {!isConnected && (
                       <div className="h2 text-center text-white">No Wallet Connected</div>)}
    */}
                <AnimatePresence mode="popLayout">
                    {mobileNavOpen && (
                        <motion.div
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                            }}
                            exit={{
                                opacity: 0,
                            }}
                            // className="grid grid-cols-2 gap-6 py-6 md:hidden"
                        >
                            {isConnected ? (
                                <>
                                    {/* <div className="h2 text-center text-white">
                            Your address: {userAddress}
                        </div> */}
                                    <div className="flex justify-between h-50 mt-5 gap-1">
                                        <div className="h-25 w-1/2 p-4 text-white bg-[#D6DFEA] rounded-xl ">
                                            <div className="flex items-center justify-between mb-5">
                                                <div>
                                                    <p className="text-[#353535] font-bold text-xl">${formatCurrency(Number(formatEther(balance || BigInt(0))))}</p>
                                                    <p className="text-[#353535] text-xs">+12.5%</p>
                                                </div>
                                                <Link href="/voucher" className="rounded-full bg-white p-2">
                                                    <FiPlus className="text-[#353535] h-6 w-6" />
                                                    {/* <FiArrowUpRight className="text-[#353535] h-6 w-6" /> */}
                                                </Link>
                                            </div>
                                            <p className="text-[#353535] font-bold">Balance</p>
                                        </div>
                                        <div className="h-25 w-1/2 p-4 text-white bg-[#D6DFEA] rounded-xl">
                                            <div className="flex items-center justify-between mb-5">
                                                <div>
                                                    <p className="text-[#353535] font-bold text-xl">${formatCurrency(Number(formatEther(balance || BigInt(0))))}</p>
                                                    <p className="text-[#353535] text-xs">+12.5%</p>
                                                </div>
                                                <div className="rounded-full bg-white p-2">
                                                    <FiArrowUpRight className="text-[#353535] h-6 w-6" />
                                                </div>
                                            </div>
                                            <p className="text-[#353535] font-bold">Income</p>
                                        </div>
                                    </div>


                                </>

                            ) : (
                                <div className="h2 text-center text-white">No Wallet Connected</div>
                            )}
                            {/* {links.map((l) => {
                                return (
                                    <div key={l.title} className="space-y-1.5">
                                        <span className="text-md block font-semibold text-neutral-50">
                                            {l.title}
                                        </span>
                                        {l.sublinks.map((sl) => (
                                            <a
                                                className="text-md block text-neutral-300"
                                                href={sl.href}
                                                key={sl.title}
                                            >
                                                {sl.title}
                                            </a>
                                        ))}
                                    </div>
                                );
                            })} */}
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
            <motion.main layout className={`${navBackground} px-2 pb-2`}>
                <div className={`${bodyBackground} rounded-3xl`}>{children}</div>
            </motion.main>
        </>
    );
};

const Logo = () => {
    return (
        <svg
            width="40"
            height="auto"
            viewBox="0 0 50 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-neutral-50"
        >
            <title>{"block-solid-badged"}</title>
            <path
                d="M30,13.5V26.36L19,31.44V16.64l8.08-3.73a7.57,7.57,0,0,1-2-1.27L18,14.9,7.39,10,18,5.1l4.61,2.13A7.12,7.12,0,0,1,22.5,6a8,8,0,0,1,.07-1L18.42,3.09a1,1,0,0,0-.84,0l-13,6A1,1,0,0,0,4,10V27a1,1,0,0,0,.58.91l13,6a1,1,0,0,0,.84,0l13-6A1,1,0,0,0,32,27V13.22A7.37,7.37,0,0,1,30,13.5Z"
                className="clr-i-solid--badged clr-i-solid-path-1--badged"
                stopColor="#000000"
            />
            <circle
                cx={30}
                cy={6}
                r={5}
                className="clr-i-solid--badged clr-i-solid-path-2--badged clr-i-badge"
            />
            <rect x={0} y={0} width={36} height={36} fillOpacity={0} />
        </svg>
    );
};

const DesktopLinks = ({
    links,
    setHovered,
    hovered,
    activeSublinks,
}: {
    links: LinkType[];
    setHovered: Dispatch<SetStateAction<string | null>>;
    hovered: string | null;
    activeSublinks: LinkType["sublinks"];
}) => {
    return (
        <div className="ml-9 mt-0.5 hidden md:block">
            <div className="flex gap-6">
                {links.map((l) => (
                    <TopLink key={l.title} setHovered={setHovered} title={l.title}>
                        {l.title}
                    </TopLink>
                ))}
            </div>
            <AnimatePresence mode="popLayout">
                {hovered && (
                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        exit={{
                            opacity: 0,
                        }}
                        className="space-y-4 py-6"
                    >
                        {activeSublinks.map((l) => (
                            <a
                                className="block text-2xl font-semibold text-neutral-50 transition-colors hover:text-neutral-400"
                                href={l.href}
                                key={l.title}
                            >
                                {l.title}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const MobileLinks = ({ links, open }: { links: LinkType[]; open: boolean }) => {
    return (
        <AnimatePresence mode="popLayout">
            {open && (
                <motion.div
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                    }}
                    exit={{
                        opacity: 0,
                    }}
                    className="grid grid-cols-2 gap-6 py-6 md:hidden"
                >
                    {links.map((l) => {
                        return (
                            <div key={l.title} className="space-y-1.5">
                                <span className="text-md block font-semibold text-neutral-50">
                                    {l.title}
                                </span>
                                {l.sublinks.map((sl) => (
                                    <a
                                        className="text-md block text-neutral-300"
                                        href={sl.href}
                                        key={sl.title}
                                    >
                                        {sl.title}
                                    </a>
                                ))}
                            </div>
                        );
                    })}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

const TopLink = ({
    children,
    setHovered,
    title,
}: {
    children: string;
    setHovered: Dispatch<SetStateAction<null | string>>;
    title: string;
}) => (
    <span
        onMouseEnter={() => setHovered(title)}
        className="cursor-pointer text-neutral-50 transition-colors hover:text-neutral-400"
    >
        {children}
    </span>
);