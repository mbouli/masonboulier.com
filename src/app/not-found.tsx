import Navbar from '@/components/Navbar'
import SilkBackground from '@/components/SilkBackground';

export default function NotFound() {
    return (
        <>
            <div className="w-full h-screen relative overflow-hidden">
                <Navbar />
                <div className="absolute inset-0 z-0">
                    <SilkBackground />
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-center z-10">
                    <h1 className="text-3xl font-bold text-accent transition-colors duration-500">
                        ERROR 404
                    </h1>
                </div>
            </div>
        </>
    )
}
