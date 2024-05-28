import BottomNavBar from "@/components/NavBar";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { RoundedDrawerNavExample } from "@/components/RoundedDrawerNav";

export default function Home() {
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

    if (!isMounted) {
        return null;
    }

    return (
        <RoundedDrawerNavExample />
    );
}
