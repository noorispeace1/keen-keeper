export default function Loading() {
    return (
        <div className="flex h-screen w-full items-center justify-center bg-slate-950">
            <div className="relative flex items-center justify-center">
                {/* Outer Ring */}
                <div className="absolute h-24 w-24 animate-[spin_3s_linear_infinite] rounded-full border-t-4 border-b-4 border-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.5)]"></div>
                
                {/* Inner Ring */}
                <div className="absolute h-16 w-16 animate-[spin_2s_linear_infinite_reverse] rounded-full border-r-4 border-l-4 border-indigo-400"></div>
                
                {/* Center Core */}
                <div className="h-6 w-6 animate-pulse rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)]"></div>
            </div>
        </div>
    );
}