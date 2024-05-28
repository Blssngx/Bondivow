import BottomNavBar from "@/components/NavBar";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { Layer } from "@/components/RoundedDrawerNav";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


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
        <Layer>
            <div className="flex flex-col items-center h-screen">
                <Tabs defaultValue="account" className="w-full">
                    <TabsList>
                        <TabsTrigger value="account">Goods</TabsTrigger>
                        <TabsTrigger value="password">Services</TabsTrigger>
                    </TabsList>
                    <TabsContent value="account">Goods here.</TabsContent>
                    <TabsContent value="password">Services here.</TabsContent>
                </Tabs>
            </div>
        </Layer>
    );
}
