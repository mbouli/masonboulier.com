'use client';
import { useState, useEffect, ReactNode } from "react";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import StaggeredLink from "./StaggeredLink";
import { useAccent } from "./AccentProvider";

const NAV_BAND = 76;

const Navbar = () => {
    const [currentTime, setCurrentTime] = useState('');
    const [overWork, setOverWork] = useState(false);
    const { cycle } = useAccent();
    const { scrollY } = useScroll();
    const opacity = useTransform(scrollY, [0, 120], [0, 1]);

    useEffect(() => {
        const section = document.getElementById('work');
        if (!section) return;

        const check = () => {
            const { top, bottom } = section.getBoundingClientRect();
            setOverWork(top <= NAV_BAND && bottom >= 0);
        };

        check();
        window.addEventListener('scroll', check, { passive: true });
        window.addEventListener('resize', check);

        return () => {
            window.removeEventListener('scroll', check);
            window.removeEventListener('resize', check);
        };
    }, []);

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
            <Glass opacity={opacity}>
                <div className={`space-x-2 md:space-x-8 text-base md:text-sm transition-colors duration-300 ${overWork ? 'text-stone-300' : 'text-accent'}`}>
                    <StaggeredLink href="/">HOME</StaggeredLink>
                    <StaggeredLink href="https://photo.mase.zip" newTab={true}>ARCHIVE</StaggeredLink>
                </div>
            </Glass>
            <Glass opacity={opacity}>
                <div className={`space-x-4 md:space-x-8 text-base font-bold md:text-sm transition-colors duration-300 ${overWork ? 'text-stone-300' : 'text-accent'}`}>
                    <h1 className="link">
                        <button
                            type="button"
                            onClick={cycle}
                            aria-label="Change the site's accent color"
                            className="cursor-pointer select-none"
                        >
                            TIME (CST) — {currentTime}
                        </button>
                    </h1>
                </div>
            </Glass>
        </nav>
    )
}

const Glass = ({ children, opacity }: { children: ReactNode; opacity: MotionValue<number> }) => (
    <div className="relative rounded-full px-5 py-2.5">
        <motion.span aria-hidden style={{ opacity }} className="pointer-events-none absolute inset-0">
            <span className="absolute inset-0 rounded-full bg-white/[0.06] backdrop-blur-[10px] backdrop-saturate-[180%] shadow-[0_8px_28px_-10px_rgba(0,0,0,0.5),inset_0_1px_1px_0_rgba(255,255,255,0.4),inset_0_-1px_1px_0_rgba(255,255,255,0.14)]" />
            <span className="absolute inset-0 rounded-full backdrop-blur-[18px] [mask-image:linear-gradient(to_bottom,black,transparent_38%,transparent_62%,black)] [-webkit-mask-image:linear-gradient(to_bottom,black,transparent_38%,transparent_62%,black)]" />
            <span className="absolute inset-0 rounded-full bg-[linear-gradient(140deg,rgba(255,255,255,0.20)_0%,rgba(255,255,255,0.03)_38%,rgba(255,255,255,0)_62%,rgba(255,255,255,0.12)_100%)]" />
        </motion.span>
        <span className="relative">{children}</span>
    </div>
)

export default Navbar
