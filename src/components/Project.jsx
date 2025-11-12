import { listProject } from "../data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { span } from "motion/react-client";

export default function Project() {
    return (
        <div className="container">
            <section id="project" className="project mt-32 py-16 px-4">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-2 text-white">Project</h1>
                    <p className="text-gray-400 max-w-xl mx-auto">
                        Beberapa project yang telah saya kerjakan menggunakan berbagai teknologi modern.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {listProject.map((project) => (
                        <div
                            key={project.id}
                            className="rounded-2xl overflow-hidden bg-linear-to-br from-zinc-900 to-zinc-800 border border-zinc-700 shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col">
                            <div className="relative w-full bg-black">
                                <Swiper className="w-full">
                                    {project.gambar.map((img, index) => (
                                        <SwiperSlide key={index}>
                                            <img
                                                src={img}
                                                alt={`${project.nama} ${index + 1}`}
                                                className="w-full h-48 object-contain bg-black" />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>

                            <div className="p-5 flex flex-col justify-between grow">
                                <div>
                                    <h2 className="text-lg font-semibold text-white mb-2">{project.nama}</h2>
                                    <p className="text-gray-400 text-sm">{project.desk}</p>
                                </div>

                                <div className="flex flex-wrap gap-2 mt-4">
                                    {project.tools.map((tool, idx) => (
                                        <span
                                            key={idx}
                                            className="text-xs bg-zinc-800 text-gray-300 px-2 py-1 rounded-full border border-zinc-700 hover:bg-white hover:text-black transition-all"
                                        >{tool}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}