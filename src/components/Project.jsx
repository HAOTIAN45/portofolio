import { listProyek } from "../data"

export default function Project() {
    return (
        <div className="project mt-32 py-10">
            <h1 className="text-4xl/snug font-bold mb-2 text-center">Project</h1>
            <p className="text-center text-base/loose opacity-50">Berikut ini beberapa project yang telah saya buat.</p>
            <div className="project-box mt-14 grid-cols-3 gap-4">
                {listProyek.map((project) => (
                    <div key={project.id}>
                        {/* <img src={project.gambar} alt="Project Image" /> */}

                    </div>
                ))}
            </div>
        </div>
    )
}