"use client"
import React, { useState, ReactElement } from 'react';
import { Icons } from "./icons";
import { usePathname } from "next/navigation";
import Link from 'next/link';

// Define the type for the props
type NavLinkProps = {
    text: string;
    to: string;
    iconType: keyof typeof Icons;
};

export default function BottomNavBar() {
    return (
        <footer className="bg-[#0E100F] z-50 rounded-full h-12 bottom-10 fixed w-9/12 mx-auto">
            <div className="px-[1.5px] flex justify-center items-center h-full">
                <div className="grid grid-cols-3 gap-1 w-full">
                    <NavLink text="FEED" to="/feed" iconType="feed" />
                    <NavLink text="RESIDAO" to="/residao" iconType="logo" />
                    <NavLink text="PROFILE" to="/wallet" iconType="profile" />
                </div>
            </div>
        </footer>
    );
}

const NavLink = ({
    text,
    to,
    iconType,
}: NavLinkProps): ReactElement => {
    const [isHovered, setIsHovered] = useState(false);
    const isActive = usePathname() === to; // Using the usePathname hook to determine if the link is active
    // Dynamically select the icon component based on iconType
    const IconComponent = Icons[iconType];
    return (
        <>
            <Link
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                href={to}
                rel="nofollow"
                className={`text-sm ${isHovered || isActive ? "text-black rounded-full bg-white px-3 py-3" : "text-white"} transition-colors flex items-center justify-center contect-place-center`}
            //   className='flex flex-col items-center justify-center w-full h-full text-white transition-colors hover:text-black'
            >


                <IconComponent
                    fillColor={isHovered || isActive ? "black" : "white"}
                    className="w-5 h-5 "
                />
                {isActive && <span className={`font-bold text-xs ml-1`}>{text}</span>}


            </Link>
        </>
    );
};
