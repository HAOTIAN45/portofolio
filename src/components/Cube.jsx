export default function Cube() {
    const CUBE_SIZE = 200;
    const HALF_SIZE = CUBE_SIZE / 2 + 4;

    return (
        <div className="flex justify-center items-center mt-32" style={{ perspective: '1000px' }}>
            <div className="relative w-52 h-52 transition-transform duration-4000 ease-in-out animate-rotate" style={{ transformStyle: 'preserve-3d', transform: 'rotateX(-30deg) rotateY(45deg)' }}>
                <div className="absolute w-52 h-52 bg-red-800/ text-white flex items-center justify-center text-xl [backface-visibility: hidden]" style={{
                    transform: `translateZ(${HALF_SIZE}px)`, backgroundImage: 'url(milky-way.avif)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }} ></div>

                <div className="absolute w-52 h-52 bg-blue-500/8 text-white flex items-center justify-center text-xl [backface-visibility: hidden]" style={{
                    transform: `rotateY(180deg) translateZ(${HALF_SIZE}px)`, backgroundImage: 'url(milky-way.avif)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}></div>

                <div className="absolute w-52 h-52 bg-green-500/80 text-white flex items-center justify-center text-xl [backface-visibility: hidden]" style={{
                    transform: `rotateY(90deg) translateZ(${HALF_SIZE}px)`, backgroundImage: 'url(milky-way.avif)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}></div>

                <div className="absolute w-52 h-52 bg-yellow-500/80  text-white flex items-center justify-center text-xl [backface-visibility: hidden]" style={{
                    transform: `rotateY(-90deg) translateZ(${HALF_SIZE}px)`, backgroundImage: 'url(milky-way.avif)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}></div>

                <div className="absolute w-52 h-52 bg-purple-500/80 text-white flex items-center justify-center text-xl [backface-visibility: hidden]" style={{
                    transform: `rotateX(90deg) translateZ(${HALF_SIZE}px)`, backgroundImage: 'url(milky-way.avif)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}></div>

                <div className="absolute w-52 h-52 bg-pink-500/80 text-white flex items-center justify-center text-xl [backface-visibility: hidden]" style={{
                    transform: `rotateX(-90deg) translateZ(${HALF_SIZE}px)`, backgroundImage: 'url(milky-way.avif)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}></div>
            </div>
        </div>
    )
}