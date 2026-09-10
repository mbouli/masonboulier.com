'use client';
import Silk, { SilkProps } from './Silk';
import { useAccent } from './AccentProvider';

const SilkBackground = (props: Omit<SilkProps, 'color'>) => {
    const { silk } = useAccent();

    return (
        <Silk
            speed={10}
            scale={0.75}
            noiseIntensity={7.1}
            rotation={1.53}
            {...props}
            color={silk}
        />
    );
};

export default SilkBackground;
