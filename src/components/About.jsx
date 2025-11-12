import DataImage from '../data'

export default function About() {
    return (
        <div className="about mt-32 py-10">
            <div className='xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg'>
                <img src={DataImage.ProfileImage} alt="Image" className='w-12 rounded-full mb-5 sm:hidden float-left mr-3' />
                <p className='text-base/loose mb-10 text-justify'>
                    Hi, perkenalkan saya Christian Dwi Nugroho, seorang Full Stack Web Developer dan Designer untuk UI/UX Design. Saya percaya bahwa desain dan fungsionalitas harus berjalan beriringan, sehingga setiap project yang saya kembangkan tidak hanya terlihat menarik tetapi juga memberikan pengalaman pengguna yang optimal.
                </p>
                <div className='flex items-center justify-between'>
                    <img src={DataImage.ProfileImage} alt="Image" className='w-12 rounded-md sm:block hidden' />
                    <div className='flex items-center gap-6'>
                        <div>
                            <h1 className='text-4xl mb-1'>
                                5 <span className='text-violet-500'>+</span>
                            </h1>
                            <p>Project Selesai</p>
                        </div>
                        <div>
                            <h1 className='text-4xl mb-1'>
                                2 <span className='text-violet-500'>+</span>
                            </h1>
                            <p>Tahun Pengalaman</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}