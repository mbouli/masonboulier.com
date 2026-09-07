'use client';
import { motion } from "framer-motion";

const StaggeredLink = ({ children, href, DURATION = 0.3, STAGGER = 0.05, newTab = false }: { children: string; href: string; DURATION?: number; STAGGER?: number; newTab?: boolean }) => {
    return (
        <motion.a
            initial="inital"
            whileHover="hovered"
            className="relative link inline-block overflow-hidden whitespace-nowrap"
            href={href}
            target={newTab ? "_blank" : "_self"}
            style={{
                lineHeight: 0.85,
                letterSpacing: '.04em'
            }}
        >
            <div>
                {children.split("").map((letter, i) => {
                    return <motion.span
                        variants={{
                            inital: { y: 0 },
                            hovered: { y: '-100%' }
                        }}
                        transition={{
                            duration: DURATION,
                            ease: 'easeInOut',
                            delay: STAGGER * i
                        }}
                        className="inline-block antialiased"
                        key={i}
                    >
                        {letter === " " ? "\u00A0" : letter}
                    </motion.span>
                })}
            </div>
            <div className="absolute inset-0">
                {children.split("").map((letter, i) => {
                    return <motion.span
                        variants={{
                            inital: { y: '100%' },
                            hovered: { y: 0 }
                        }}
                        transition={{
                            duration: DURATION,
                            ease: 'easeInOut',
                            delay: STAGGER * i
                        }}
                        className="inline-block antialiased"
                        key={i}
                    >
                        {letter === " " ? "\u00A0" : letter}
                    </motion.span>
                })}
            </div>
        </motion.a>
    )
}

export default StaggeredLink;