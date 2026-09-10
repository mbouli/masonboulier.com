'use client';
import { createContext, useCallback, useContext, useEffect, useMemo, useState, ReactNode } from 'react';

const PALETTE = [
    { accent: '#FF3D49', silk: '#9F6565' }, // red (default)
    { accent: '#9B4DFF', silk: '#82659F' }, // purple
    { accent: '#FF4DA6', silk: '#9F6582' }, // pink
    { accent: '#FF7A1A', silk: '#9F7E65' }, // orange
    { accent: '#2E8BFF', silk: '#65829F' }, // blue
    { accent: '#8ACE00', silk: '#8a9f65' }, // brat
];

type AccentContextValue = {
    silk: string;
    cycle: () => void;
};

const AccentContext = createContext<AccentContextValue>({
    silk: PALETTE[0].silk,
    cycle: () => { },
});

export const useAccent = () => useContext(AccentContext);

const AccentProvider = ({ children }: { children: ReactNode }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        document.documentElement.style.setProperty('--accent', PALETTE[index].accent);
    }, [index]);

    const cycle = useCallback(() => setIndex(current => (current + 1) % PALETTE.length), []);

    const value = useMemo(() => ({ silk: PALETTE[index].silk, cycle }), [index, cycle]);

    return <AccentContext.Provider value={value}>{children}</AccentContext.Provider>;
};

export default AccentProvider;
