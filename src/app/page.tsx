import Loader from '@/components/Loader';
import Navbar from '@/components/Navbar'
import Silk from '@/components/Silk';
import Image from 'next/image';
import logo from '../../public/masonboulier.png'
import StaggeredLink from '@/components/StaggeredLink';
import Projects from '@/components/Projects';
import { Analytics } from "@vercel/analytics/next"


export default function Home() {
  return (
    <>
      <Analytics />
      <Loader />
      <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
        <Navbar />
        <Silk
          speed={10}
          scale={0.75}
          color="#9F6565"
          noiseIntensity={7.1}
          rotation={1.53}
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-center z-10">
          <Image
            src={logo}
            alt="Mason Boulier"
            width={500}
            height={750}
            priority
            className="w-auto h-auto md:-mb-[35px]"
          />
          <p className="text-sm md:max-w-3/4 md:text-lg font-bold md:leading-relaxed md:tracking-wide text-white">
            I&#39;m Mason Boulier, a CS student at Auburn University who loves building things with code and design.
            I&#39;m interested in all things software and mixing creativity with technology.
            When I&#39;m not coding, I&#39;m probably taking photos or designing something.
          </p>
          <div className="space-x-4 md:space-x-8 text-base font-bold md:text-lg pt-1 text-[#FF3D49]">
            <StaggeredLink href="https://github.com/mbouli">GITHUB</StaggeredLink>
            <StaggeredLink href="mailto:mtb0121@auburn.edu">EMAIL ME</StaggeredLink>
          </div>
        </div>
      </div>
      <Projects />
    </>
  )
}
