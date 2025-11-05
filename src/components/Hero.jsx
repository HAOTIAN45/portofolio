import DataImage from '../data'

export default function Hero() {
    return (
        <div className="hero grid md:grid-cols-2 pt-10 xl:gap-0 gap-6 grid-cols-1">
            <div>
                <div className='flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-full border-2 border-y-blue-700 border-x-violet-700 shadow-2xl shadow-blue-500'>
                    <img src={DataImage.ProfileImage} alt="Hero Image" className='w-10 rounded-full' />
                    <q className='text-center'>Belajar bukan soal cepat, tapi soal konsisten melangkah sedikit demi sedikit😁.</q>
                </div>
                <h1 className='text-5xl/tight font-bold mb-6'>Hi, Saya Christian Dwi Nugroho👋</h1>
                <p className='text-base/loose mb-6 opacity-50 text-justify'>Saya mempunyai ketertarikan dalam bidang Web Programming dan Design. Saya senang menggabungkan logika pemrograman dengan sentuhan visual agar setiap project yang saya buat tidak hanya berfungsi dengan baik, tetapi juga nyaman dipandang. Fokus saya saat ini adalah mengembangkan website interaktif dengan React dan Express.</p>
                <div className='flex items-center sm:gap-4 gap-2 justify-center md:justify-start'>
                    <a href="#" className='bg-blue-700 p-4 rounded-2xl hover:bg-blue-600'>Download CV <i className='ri-download-line ri-lg'></i></a>
                    <a href="#" className='bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600'>Lihat Project <i className='ri-arrow-down-line ri-lg'></i></a>
                </div>
            </div>
            <img src={DataImage.ProfileImage} alt="Hero Image" className='w-[300px] rounded-2xl ml-auto md:ml-auto mx-auto md:mx-0' />
        </div>
    )
}