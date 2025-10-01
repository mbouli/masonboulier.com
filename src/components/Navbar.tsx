'use client';
import { useState, useEffect } from "react";
import StaggeredLink from "./StaggeredLink";

const Navbar = () => {
    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const options: Intl.DateTimeFormatOptions = {
                hour: '2-digit',
                minute: '2-digit',
                hour12: true,
                timeZone: 'America/Chicago'
            };
            setCurrentTime(now.toLocaleTimeString('en-US', options));
        };

        updateTime();
        const intervalId = setInterval(updateTime, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <nav className="fixed px-9 py-2 top-5 left-0 right-0 z-20 w-full flex justify-between items-center text-lg font-bold text-black">
            <div className="space-x-2 md:space-x-8 text-base md:text-sm text-[#FF3D49]">
                <StaggeredLink href="/">HOME</StaggeredLink>
                <StaggeredLink href="https://mase.zip" newTab={true}>ARCHIVE</StaggeredLink>
            </div>
            <div className="space-x-4 md:space-x-8 text-base font-bold md:text-sm text-[#FF3D49]">
                <h1 className="link">TIME (CST) — {currentTime}</h1>
            </div>
        </nav>
    )
}

export default Navbar