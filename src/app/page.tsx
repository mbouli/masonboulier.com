import Loader from '@/components/Loader';
import Navbar from '@/components/Navbar'
import Silk from '@/components/Silk';
import Image from 'next/image';
import logo from '../../public/masonboulier.png'
import Link from 'next/link';

export default function Home() {
  return (
    <>
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
            className="md:-mb-[35px]"
          />
          <p className="text-sm md:max-w-3/4 md:text-lg font-bold md:leading-relaxed md:tracking-wide text-white">
            I am Mason Boulier, an aspiring software engineer,
            studying computer science at Auburn University.
            I am also really passionate about photography and design.
            I am open to freelance, feel free to connect!
          </p>
          <div className="space-x-4 md:space-x-8 text-base md:text-lg pt-1 text-[#FF3D49]">
            <Link href="https://instagram.com/masonboulier" className='hover:underline font-bold'>INSTAGRAM</Link>
          </div>
        </div>
      </div>
    </>
  )
}
