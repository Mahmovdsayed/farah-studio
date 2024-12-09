"use client"

import LoadingScreen from '@/components/Layout/LoadingScreen';
import { NextUIProvider } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react';
import { Toaster } from 'sonner';

export function Providers({ children }: { children: React.ReactNode }) {
    const router = useRouter()
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    return <>
        {loading ? (
            <LoadingScreen />
        ) : (
            <NextUIProvider navigate={router.push}>
                <Toaster
                    duration={1000}
                    position='top-center'
                    theme={"dark"}

                    expand={false}
                />
                {children}
            </NextUIProvider>
        )}
    </>


}