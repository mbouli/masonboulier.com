'use client';
import { motion } from "framer-motion";

type StaggeredLinkProps = {
    children: string;
    /** Omit to render inline text instead of an anchor (e.g. when already inside a link). */
    href?: string;
    DURATION?: number;
    STAGGER?: number;
    newTab?: boolean;
};

const StaggeredLink = ({ children, href, DURATION = 0.3, STAGGER = 0.05, newTab = false }: StaggeredLinkProps) => {
    const Tag = href ? motion.a : motion.span;

    const letters = (variants: { inital: { y: number | string }; hovered: { y: number | string } }) =>
        children.split("").map((letter, i) => (
            <motion.span
                variants={variants}
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
        ));

    return (
        <Tag
            initial="inital"
            whileHover="hovered"
            className="relative link inline-block overflow-hidden whitespace-nowrap"
            {...(href ? { href, target: newTab ? "_blank" : "_self" } : {})}
            style={{
                lineHeight: 0.85,
                letterSpacing: '.04em'
            }}
        >
            <span className="block">
                {letters({ inital: { y: 0 }, hovered: { y: '-100%' } })}
            </span>
            <span className="absolute inset-0">
                {letters({ inital: { y: '100%' }, hovered: { y: 0 } })}
            </span>
        </Tag>
    )
}

export default StaggeredLink;
