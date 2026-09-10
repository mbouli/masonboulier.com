import SilkBackground from './SilkBackground';
import StaggeredLink from './StaggeredLink';
import ScrollCue from './ScrollCue';

const Hero = () => {
    return (
        <div className="relative w-full h-svh">
            <SilkBackground />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-center z-10">
                <span
                    role="img"
                    aria-label="Mason Boulier"
                    className="inline-block w-[min(540px,80vw)] aspect-6046/2000 bg-accent transition-colors duration-500 md:-mb-[35px]"
                    style={{
                        maskImage: 'url(/masonboulier.webp)',
                        WebkitMaskImage: 'url(/masonboulier.webp)',
                        maskSize: '100% 100%',
                        WebkitMaskSize: '100% 100%',
                        maskRepeat: 'no-repeat',
                        WebkitMaskRepeat: 'no-repeat',
                    }}
                />
                <p className="text-sm md:max-w-3/4 md:text-lg font-bold md:leading-relaxed md:tracking-wide text-white">
                    I&#39;m Mason Boulier, a CS student at Auburn University who loves building things with code and design.
                    I&#39;m interested in all things software and mixing creativity with technology.
                    When I&#39;m not coding, I&#39;m probably taking photos or designing something.
                </p>
                <div className="space-x-4 md:space-x-8 text-base font-bold md:text-lg pt-1 text-accent transition-colors duration-500">
                    <StaggeredLink href="https://github.com/mbouli">GITHUB</StaggeredLink>
                    <StaggeredLink href="mailto:mtb0121@auburn.edu">EMAIL ME</StaggeredLink>
                </div>
            </div>
            <ScrollCue />
        </div>
    )
}

export default Hero;
