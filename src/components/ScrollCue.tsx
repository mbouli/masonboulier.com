'use client'

import { motion, useReducedMotion } from 'framer-motion'
import StaggeredLink from './StaggeredLink'

const ScrollCue = ({ href = '#work' }: { href?: string }) => {
    const reduceMotion = useReducedMotion();

    return (
        <motion.a
            href={href}
            aria-label="Scroll to work"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.25, duration: 0.6, ease: 'easeInOut' }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-accent transition-colors duration-500"
        >
            <span className="text-xs font-bold md:text-sm">
                <StaggeredLink>WORK</StaggeredLink>
            </span>
            <motion.span
                animate={reduceMotion ? undefined : { y: [0, 6, 0] }}
                transition={{ duration: 2, ease: 'easeInOut', repeat: Infinity }}
                className="link text-sm leading-none md:text-base"
            >
                ↓
            </motion.span>
        </motion.a>
    )
}

export default ScrollCue;
