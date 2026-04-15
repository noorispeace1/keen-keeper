import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-white selection:bg-indigo-100">
            {/* Subtle Grid Background */}
            <div className="absolute inset-0 z-0 opacity-[0.03] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" 
                 style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0\' 0 40 40 xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 0h40v40H0V0zm1 1h38v38H1V1z\' fill=\'%23000\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")' }}>
            </div>

            <div className="container relative z-10 px-6 text-center">
                {/* Minimalist 404 Identifier */}
                <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-50 ring-1 ring-slate-200">
                    <span className="text-xl font-bold text-slate-900">404</span>
                </div>

                {/* Typography with Tight Tracking */}
                <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
                    Page not found
                </h1>

                <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-slate-500">
                    The resource you are looking for does not exist or has been moved to a new permanent location. Please verify the URL or return to the dashboard.
                </p>

                {/* Structured Action Buttons */}
                <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <Link
                        href="/"
                        className="inline-flex h-11 items-center justify-center rounded-lg bg-slate-900 px-7 text-sm font-medium text-white transition-all hover:bg-slate-800 focus:ring-2 focus:ring-slate-950 focus:ring-offset-2"
                    >
                        Return to dashboard
                    </Link>
                    
                    <Link
                        href="/support"
                        className="inline-flex h-11 items-center justify-center rounded-lg border border-slate-200 bg-white px-7 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-900"
                    >
                        Contact support
                    </Link>
                </div>
            </div>

            {/* Bottom Footer Info */}
            <div className="absolute bottom-8 text-center">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
                    System Status: <span className="text-emerald-500">All Systems Operational</span>
                </p>
            </div>
        </main>
    );
};

export default NotFound;