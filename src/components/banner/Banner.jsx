import React from 'react';

const Banner = () => {
    return (
        <section className="bg-gray-50 flex items-center justify-center p-8 py-10 ">
            <div className="max-w-xl text-center flex flex-col items-center">

                <h1 className="text-4xl sm:text-5xl font-extrabold text-[#111827] mb-4 leading-tight tracking-tight">
                    Friends to keep close in your life
                </h1>

                <p className="text-gray-500 text-base sm:text-lg mb-8 max-w-md mx-auto leading-relaxed">
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                </p>

                <button className="bg-[#24523B] hover:bg-[#1a3d2c] text-white font-medium text-sm py-2.5 px-6 rounded-md flex items-center gap-2 shadow-sm transition-all duration-150">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4"></path>
                    </svg>
                    Add a Friend
                </button>

            </div>
        </section>
    );
};

export default Banner;