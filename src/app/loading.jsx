export default function Loading() {
    return (
        <div className="flex h-screen w-full items-center justify-center bg-gray-50">
            <div className="h-16 w-16 animate-spin rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-500 shadow-lg transition-all duration-500 ease-in-out">

                <div className="h-full w-full scale-50 rounded-lg bg-white/20 backdrop-blur-sm"></div>
            </div>
        </div>
    );
}