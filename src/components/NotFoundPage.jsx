import { Link } from "react-router";

export default function NotFoundPage() {
    return (
        <div className="relative flex flex-col justify-center items-center min-h-screen text-center bg-white px-4">

            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-linear-to-br from-blue-400 to-purple-600 rounded-full opacity-10 blur-3xl animate-pulse"></div>

                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-linear-to-br from-green-400 to-blue-600 rounded-full opacity-10 blur-3xl animate-pulse delay-1000"></div>

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-linear-to-br from-pink-400 to-purple-600 rounded-full opacity-5 blur-3xl animate-pulse delay-500"></div>
            </div>

            <h1
                className="font-extrabold text-8xl sm:text-9xl bg-clip-text text-transparent py-4"
                style={{
                    backgroundImage: 'url(milky-way.avif)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}>Oops!</h1>

            <h2 className="font-bold text-sm mb-2">404 - PAGE NOT FOUND</h2>
            <p className="text-sm text-gray-600 mb-6 max-w-md">The page you are looking for might have been removed had its name changed, or is temporarily unavailable.</p>
            <Link to="/" className="flex items-center justify-center bg-blue-800 hover:bg-blue-900 h-10 px-8 rounded-3xl text-white font-medium text-sm shadow-md transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-100">GO TO HOMEPAGE</Link>
        </div>
    )
}