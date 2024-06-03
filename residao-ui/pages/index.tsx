import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import Lottie from "lottie-react";
import loader from "@/components/lottie/loader.json";

export default function Home() {
    const [userAddress, setUserAddress] = useState("");
    const [isMounted, setIsMounted] = useState(false);
    const { address, isConnected } = useAccount();
    const router = useRouter();

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (isConnected && address) {
            setUserAddress(address);
            router.push("/welcome"); // Redirect to another page
        }
    }, [address, isConnected, router]);

    if (!isMounted) {
        return null;
    }

    return (
        <>
            <h1>Connecting to your wallet...</h1>
            <Lottie animationData={loader} loop={true} />
        </>
    );
}
