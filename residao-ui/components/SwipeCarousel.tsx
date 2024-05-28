import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import Image from "next/image";
import onbording_1 from "../img/onboarding_1.svg";
import onbording_2 from "../img/onboarding_2.svg";
import onbording_3 from "../img/onboarding_3.svg";
import onbording_4 from "../img/onboarding_4.svg";
import { Button } from "./ui/button";
import Link from "next/link";


const imgs = [
    "../img/onboarding_1.svg",
    "../img/onboarding_2.svg",
    "../img/onboarding_3.svg",
    "../img/onboarding_4.svg",
];

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
    type: "spring",
    mass: 3,
    stiffness: 400,
    damping: 50,
};

export const SwipeCarousel = () => {
    const [imgIndex, setImgIndex] = useState(0);

    const dragX = useMotionValue(0);

    useEffect(() => {
        const intervalRef = setInterval(() => {
            const x = dragX.get();

            if (x === 0) {
                setImgIndex((pv) => {
                    if (pv === imgs.length - 1) {
                        return 0;
                    }
                    return pv + 1;
                });
            }
        }, AUTO_DELAY);

        return () => clearInterval(intervalRef);
    }, [dragX]);

    const onDragEnd = () => {
        const x = dragX.get();

        if (x <= -DRAG_BUFFER && imgIndex < imgs.length - 1) {
            setImgIndex((pv) => pv + 1);
        } else if (x >= DRAG_BUFFER && imgIndex > 0) {
            setImgIndex((pv) => pv - 1);
        }
    };

    const bgColor = (index: Number) => {
        switch (index) {
            case 0:
                return "bg-[#F8FCFF]";
            case 1:
                return "bg-[#F8FCFF]";
            case 2:
                return "bg-[#F8FCFF]";
            case 3:
                return "bg-[#F8FCFF]";
        }
    }

    const title = (index: Number) => {
        switch (index) {
            case 0:
                return "Welcome to Residao";
            case 1:
                return "Decentralized Marketplace";
            case 2:
                return "Community-backed Microloans";
            case 3:
                return "User Verification with NFTs";
        }
    }

    const onboardSVG = (index: Number) => {
        switch (index) {
            case 0:
                return onbording_1;
            case 1:
                return onbording_2;
            case 2:
                return onbording_3;
            case 3:
                return onbording_4;
        }
    }

    const subTitle = (index: Number) => {
        switch (index) {
            case 0:
                return "Discover a new way to trade goods and services within your community, access microloans, and participate in community governance.";
            case 1:
                return "List and discover a variety of goods and services offered by your neighbors. Our decentralized marketplace ensures fair and transparent transactions.";
            case 2:
                return "Access small loans from the community pool to support your business or personal needs. Repay with ease through platform activities and contributions.";
            case 3:
                return "Earn non-transferable NFTs as you complete tasks and contribute to the community. Advance through levels from Tourist to Noble Citizen and unlock new features.";
        }
    }

    return (
        <div className={`${bgColor(imgIndex)} relative overflow-hidden h-[90vh] items-center place-content-center justify-center`}>
            <div className="w-full absolute top-10 px-5 ">
                <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} />
            </div>
            <motion.div
                drag="x"
                dragConstraints={{
                    left: 0,
                    right: 0,
                }}
                style={{
                    x: dragX,
                }}
                animate={{
                    translateX: `-${imgIndex * 100}%`,
                }}
                transition={SPRING_OPTIONS}
                onDragEnd={onDragEnd}
                className="flex cursor-grab items-center active:cursor-grabbing"
            >

                {imgs.map((imgSrc, idx) => {
                    return (
                        <motion.div
                            key={idx}
                            style={{
                                backgroundImage: `url(${imgSrc})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                            animate={{
                                scale: imgIndex === idx ? 0.95 : 0.85,
                            }}
                            transition={SPRING_OPTIONS}
                            className="aspect-video w-screen shrink-0 rounded-xl bg-transparent object-cover"
                        >
                            <Image
                                src={onboardSVG(imgIndex)}
                                alt="onboarding"
                                className="w-6/12 pl-5 shrink-0 rounded-xl bg-transparent object-cover"
                            />
                            <div className="mt-4 flex w-full justify-center gap-2 space-x-2">
                                <div className="items-center text-center px-5">
                                    <h1 className="text-4xl font-bold w-10/12 py-5 text-left">{title(imgIndex)}</h1>
                                    <p className="pb-10 text-left">{subTitle(imgIndex)}</p>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}

            </motion.div>
            <div className="w-full absolute bottom-20 px-5 ">
                <div className="flex space-x-2 ">
                    <Link
                        href="/sign-in"
                        className="text-black w-full border-none"
                    >
                        <Button type="button"
                            className="text-black w-full h-[45px] bg-transparent rounded-[25px] border-[1px] border-black"
                            variant={"secondary"}
                        >
                           Get Started
                        </Button>
                    </Link>
                </div >
            </div>


        </div >
    );
};

const Dots = ({
    imgIndex,
    setImgIndex,
}: {
    imgIndex: number;
    setImgIndex: Dispatch<SetStateAction<number>>;
}) => {
    return (
        <div className="mt-4 flex w-full justify-center gap-2">
            {imgs.map((_, idx) => {
                return (
                    <button
                        key={idx}
                        onClick={() => setImgIndex(idx)}
                        className={`h-3 w-3 rounded border border-black transition-colors ${idx === imgIndex ? "bg-transparent" : "bg-gray-300"
                            }`}
                    />
                );
            })}
        </div>
    );
};