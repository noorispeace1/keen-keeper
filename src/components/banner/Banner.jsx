import React from 'react';

const Banner = () => {
    return (
        <section className="relative overflow-hidden bg-white py-20 lg:py-32">
            {/* Background Decoration - Soft Glows */}
            <div className="absolute left-1/2 top-0 -z-10 h-[400px] w-full -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:h-[600px]">
                <div className="absolute inset-0 bg-gradient-to-r from-[#f0fdf4] to-[#eff6ff] opacity-40"></div>
                <div className="absolute -top-20 left-1/2 h-[300px] w-[500px] -translate-x-1/2 rounded-full bg-emerald-100/50 blur-[100px]"></div>
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    {/* Badge Indicator */}
                    <div className="mb-8 flex justify-center">
                        <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold leading-6 text-emerald-700 ring-1 ring-inset ring-emerald-600/10">
                            Nurture your circle
                        </span>
                    </div>

                    {/* Heading with Character */}
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                        Friends to keep <span className="text-emerald-700">close</span> in your life
                    </h1>

                    {/* Refined Description */}
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most in a space designed for intimacy.
                    </p>

                    {/* Actions */}
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <button className="group relative flex items-center gap-x-2 rounded-xl bg-[#24523B] px-8 py-4 text-sm font-semibold text-white shadow-xl transition-all hover:bg-[#1a3d2c] hover:shadow-emerald-900/20 active:scale-95">
                            <svg 
                                className="h-5 w-5 transition-transform group-hover:rotate-90" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4"></path>
                            </svg>
                            Add a Friend
                        </button>
                        
                        <button className="text-sm font-semibold leading-6 text-gray-900 hover:text-emerald-700 transition-colors">
                            View Directory <span aria-hidden="true">→</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Subtle Grid Bottom Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
        </section>
    );
};

export default Banner;