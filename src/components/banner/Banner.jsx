import React from 'react';

const Banner = () => {
    return (
        <section className="relative flex min-h-[60vh] flex-col items-center justify-center overflow-hidden bg-white px-6 py-20 selection:bg-emerald-100">
            {/* Subtle Grid Background (Konsisten dengan design sebelumnya) */}
            <div className="absolute inset-0 z-0 opacity-[0.03] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" 
                 style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0\' 0 40 40 xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 0h40v40H0V0zm1 1h38v38H1V1z\' fill=\'%23000\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")' }}>
            </div>

            {/* Decorative Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-emerald-50 blur-[120px] opacity-40"></div>

            <div className="relative z-10 max-w-3xl text-center">
                {/* Professional Badge */}
                <div className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 ring-1 ring-inset ring-emerald-600/20">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="text-xs font-medium text-emerald-800 tracking-wide uppercase">Connection Manager</span>
                </div>

                {/* Heading */}
                <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl lg:leading-[1.1]">
                    Friends to keep <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                        close in your life
                    </span>
                </h1>

                {/* Description */}
                <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-500">
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most in a structured, professional space.
                </p>

                {/* Actions */}
                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-xl bg-slate-900 px-8 font-medium text-white transition-all hover:bg-slate-800 active:scale-95 shadow-lg shadow-slate-200">
                        <svg className="mr-2 h-4 w-4 transition-transform group-hover:rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4"></path>
                        </svg>
                        Add a Friend
                    </button>
                    
                    <button className="inline-flex h-12 items-center justify-center rounded-xl border border-slate-200 bg-white px-8 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-900">
                        View Directory
                    </button>
                </div>
            </div>

            {/* Bottom Accent */}
            <div className="absolute bottom-0 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
        </section>
    );
};

export default Banner;