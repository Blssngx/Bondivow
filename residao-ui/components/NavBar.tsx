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
        <footer className="bg-black w-full h-16 bottom-0 fixed border-t border-gray-300">
            <div className="mx-auto px-4 lg:px-8 flex justify-center items-center h-full">
                <div className="gap-8 grid justify-center items-center grid-cols-3">
                    <NavLink text="FEED" to="/feed" iconType="feed" />
                    <NavLink text="RESIDAO" to="/governance" iconType="logo" />
                    <NavLink text="PROFILE" to="/wallet" iconType="profile" />
                    {/* <NavLink text="Trading" to="/protrading" iconType="gavel" /> */}
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
              className='flex flex-col items-center justify-center w-full h-full text-white transition-colors hover:text-black'
            >
                  {isActive && <div className='h-2 w-2 rounded-full bg-white mb-1' />}
                <div   className={`text-sm ${isHovered || isActive ? "text-black rounded-full bg-white px-2 py-1" : "text-white"} transition-colors flex items-center justify-center contect-place-center`}> 
                    <IconComponent
                        fillColor={isHovered || isActive ? "black" : "white"}
                        className="w-5 h-5 "
                    />
                    {isActive && <span className={`font-bold text-xs ml-1`}>{text}</span>}
                </div>

            </Link>
        </>
    );
};
