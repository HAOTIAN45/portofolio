import { listTools } from "../data"

export default function Tool() {
    return (
        <div className="tool mt-32">
            <h1 className="text-4xl/snug font-bold mb-4 text-center">Tools yang dipakai</h1>
            <p className="text-base/loose text-center opacity-50">Berikut ini beberapa tools yang biasa saya pakai untuk pembuatan Website ataupun Design.</p>
            <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">

                {listTools.map((tool) => (
                    <div className="group flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800" key={tool.id}>
                        <img src={tool.gambar} alt="Tools Image" className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900" />
                        <div>
                            <h4 className="font-bold">{tool.nama}</h4>
                            <p className="opacity-50">{tool.ket}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}