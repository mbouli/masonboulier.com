'use client';
import { motion } from "framer-motion";

const StaggeredLink = ({ children, href, className, DURATION = 0.3, STAGGER = 0.05 }: { children: string; href: string; className?: string; DURATION?: number; STAGGER?: number }) => {
    return (
        <motion.a
            initial="inital"
            whileHover="hovered"
            className="relative link inline-block overflow-hidden whitespace-nowrap"
            href={href}
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
                        {letter}
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
                        {letter}
                    </motion.span>
                })}
            </div>
        </motion.a>
    )
}

export default StaggeredLink;