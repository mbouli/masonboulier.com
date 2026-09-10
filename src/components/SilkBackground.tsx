'use client';
import dynamic from 'next/dynamic';
import { useEffect, useRef, useState } from 'react';
import type { SilkProps } from './Silk';
import { useAccent } from './AccentProvider';

// three + @react-three/fiber is ~267KB gzipped — roughly 60% of the site's JavaScript,
// for a decorative background. Splitting it out keeps it off the initial parse so the
// loader can animate while this streams in behind the overlay.
const Silk = dynamic(() => import('./Silk'), { ssr: false });

const SilkBackground = (props: Omit<SilkProps, 'color' | 'active'>) => {
    const { silk } = useAccent();
    const containerRef = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(true);

    // The shader draws every frame for as long as it is mounted. The hero is only one
    // screen tall, so stop it once the work section takes over.
    useEffect(() => {
        const el = containerRef.current;
        if (!el || typeof IntersectionObserver === 'undefined') return;

        const observer = new IntersectionObserver(
            ([entry]) => setVisible(entry.isIntersecting),
            { threshold: 0 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={containerRef}
            className="absolute inset-0"
            // Stands in for the shader until its chunk lands, and matches the palette so
            // the handoff is a fade rather than a flash.
            style={{
                background: `linear-gradient(140deg, ${silk} 0%, #171717 100%)`,
                transition: 'background 500ms',
            }}
        >
            <Silk
                speed={10}
                scale={0.75}
                noiseIntensity={7.1}
                rotation={1.53}
                {...props}
                color={silk}
                active={visible}
            />
        </div>
    );
};

export default SilkBackground;
