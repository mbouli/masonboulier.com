import Loader from '@/components/Loader';
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import { Analytics } from "@vercel/analytics/next"


export default function Home() {
  return (
    <>
      <Analytics />
      <Loader />
      <Navbar />
      <Hero />
      <Projects />
    </>
  )
}
