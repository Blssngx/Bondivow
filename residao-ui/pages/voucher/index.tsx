"use client"
import { useState, FormEvent, useEffect } from 'react';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
    InputOTPSeparator,
} from "@/components/ui/input-otp"
import { toast } from "@/components/ui/use-toast"
import { useAccount } from "wagmi";
import { FiArrowLeft } from 'react-icons/fi';

const FormSchema = z.object({
    pin: z.string().min(6, {
        message: "Your voucher must be 8 characters.",
    }),
})

const VoucherPage: React.FC = () => {
    const [userAddress, setUserAddress] = useState<`0x${string}` | null>(null);
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

    return (
        <div className="flex flex-col justify-center items-center h-[100vh] relative">
            <FiArrowLeft className="absolute text-2xl top-4 left-4 cursor-pointer" onClick={() => window.history.back()} />
            {isConnected && (<InputOTPForm address={userAddress ?? ''} />)}
        </div>
    );
};

export default VoucherPage;


export function InputOTPForm({ address }: { address: string }) {
    const [token, setToken] = useState<string>('');
    const [transactionHash, setTransactionHash] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            pin: "",
        },
    })

    async function onSubmit(data: z.infer<typeof FormSchema>): Promise<void> {
        console.log(data.pin)
        try {
            const res = await fetch('http://localhost:8080/api/getVoucher/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ toAddress: address, token: data.pin })
            });

            const tx = await res.json();

            if (res.ok) {
                setTransactionHash(tx.transactionHash);
                toast({
                    title: "Your transaction was successful!",
                    description: (
                        <p>transactionHash</p>
                    ),
                })
                setError(null);
            } else {
                setTransactionHash(null);
                setError(tx.message || 'Error occurred');
            }
        } catch (error) {
            setTransactionHash(null);
            setError('Error occurred while sending the request');
        }
    }

    return (
        <>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col w-9/12 h-screen items-center justify-center space-y-6">
                    <FormField
                        control={form.control}
                        name="pin"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Voucher number</FormLabel>
                                <FormControl>
                                    <InputOTP maxLength={8} {...field}>
                                        <InputOTPGroup>
                                            <InputOTPSlot index={0} />
                                            <InputOTPSlot index={1} />
                                            <InputOTPSlot index={2} />
                                            <InputOTPSlot index={3} />
                                        </InputOTPGroup>
                                        <InputOTPSeparator />
                                        <InputOTPGroup>
                                            <InputOTPSlot index={4} />
                                            <InputOTPSlot index={5} />
                                            <InputOTPSlot index={6} />
                                            <InputOTPSlot index={7} />
                                        </InputOTPGroup>
                                    </InputOTP>
                                </FormControl>
                                <FormDescription>
                                    Load a voucher to add to your balance {address}.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button
                        className='w-full h-12 rounded-2xl text-xs font-bold'
                        variant={"secondary"}
                        type="submit">
                        LOAD VOUCHER
                    </Button>
                </form>
            </Form>
            {transactionHash && (
                <div>
                    <h2>Transaction Hash</h2>
                    <p>{transactionHash}</p>
                </div>
            )}
            {error && (
                <div>
                    <h2>Error</h2>
                    <p>{error}</p>
                </div>
            )}
        </>

    )
}