import Navbar from '@/components/Navbar'
import Silk from '@/components/Silk';

export default function NotFound() {
    return (
        <>
            <div className="w-full h-screen relative overflow-hidden">
                <Navbar />
                <div className="absolute inset-0 z-0">
                    <Silk
                        speed={10}
                        scale={0.75}
                        color="#9F6565"
                        noiseIntensity={7.1}
                        rotation={1.53}
                    />
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-center z-10">
                    <h1 className="text-3xl font-bold text-[#FF3D49]">
                        ERROR 404
                    </h1>
                </div>
            </div>
        </>
    )
}
