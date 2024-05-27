import { useState, FormEvent } from 'react';
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

const FormSchema = z.object({
    pin: z.string().min(6, {
        message: "Your one-time password must be 6 characters.",
    }),
})

const GetVoucher: React.FC = () => {
    const [token, setToken] = useState<string>('');
    const [transactionHash, setTransactionHash] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const address = "0x80C8Ab0d65868CcB0AF23D99762196AFe2aa18A7";

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        try {
            const res = await fetch('http://localhost:8080/api/getVoucher/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ toAddress: address, token })
            });

            const data = await res.json();

            if (res.ok) {
                setTransactionHash(data.transactionHash);
                setError(null);
            } else {
                setTransactionHash(null);
                setError(data.message || 'Error occurred');
            }
        } catch (error) {
            setTransactionHash(null);
            setError('Error occurred while sending the request');
        }
    };

    return (
        <div>
            <h1>Get Voucher</h1>
            <InputOTPForm />
        </div>
    );
};

export default GetVoucher;


export function InputOTPForm() {
    const [token, setToken] = useState<string>('');
    const [transactionHash, setTransactionHash] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const address = "0x80C8Ab0d65868CcB0AF23D99762196AFe2aa18A7";
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
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
                    <FormField
                        control={form.control}
                        name="pin"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Voucher number</FormLabel>
                                <FormControl>
                                    <InputOTP maxLength={9} {...field}>
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
                                        <InputOTPSeparator />
                                        <InputOTPGroup>
                                            <InputOTPSlot index={8} />
                                            {/* <InputOTPSlot index={9} />
                                        <InputOTPSlot index={10} />
                                        <InputOTPSlot index={11} /> */}
                                        </InputOTPGroup>
                                    </InputOTP>
                                </FormControl>
                                <FormDescription>
                                    Load a voucher to add to your balance.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Load</Button>
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