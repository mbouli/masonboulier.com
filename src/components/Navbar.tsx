'use client';
import { useState, useEffect } from "react";
import StaggeredLink from "./StaggeredLink";

const Navbar = () => {
    return (
        <nav className="fixed px-9 py-2 top-5 left-0 right-0 z-20 w-full flex justify-between items-center text-lg font-bold text-black">
            <div className="space-x-4 md:space-x-8 text-base md:text-sm text-[#FF3D49]">
                <StaggeredLink href="/">HOME</StaggeredLink>
                <StaggeredLink href="https://github.com/mbouli">GITHUB</StaggeredLink>
                <StaggeredLink href="https://mase.zip">ARCHIVE</StaggeredLink>
            </div>
            <div className="space-x-4 md:space-x-8 text-bold md:text-sm text-[#FF3D49]">
                {/* <h1>TIME (CST) — 11:25 AM</h1> */}
                {(() => {
                    const [currentTime, setCurrentTime] = useState('');

                    useEffect(() => {
                        const updateTime = () => {
                            const now = new Date();
                            const options: Intl.DateTimeFormatOptions = {
                                hour: '2-digit',
                                minute: '2-digit',
                                hour12: true,
                                timeZone: 'America/Chicago' // Central Time Zone
                            };
                            setCurrentTime(now.toLocaleTimeString('en-US', options));
                        };

                        updateTime(); // Set initial time
                        const intervalId = setInterval(updateTime, 1000); // Update every second

                        return () => clearInterval(intervalId); // Cleanup on unmount
                    }, []);

                    return <h1>TIME (CST) — {currentTime}</h1>;
                })()}
            </div>
            {/* <div className="flex items-center gap-2 md:gap-1">
                <Image src="/logo/logo.png" alt="mase.zip" width={200} height={50} />
                <p className="text-xs hidden md:block md:text-sm">Mason Boulier&apos;s Photo Archive</p>
            </div> */}
        </nav>
    )
}

export default Navbar