import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className="relative min-h-screen overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
            {/* Background Decorative Elements (Blurry Blobs) */}
            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-blue-100/50 blur-3xl"></div>
            <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-purple-100/50 blur-3xl"></div>

            <div className="relative z-10 mx-auto max-w-2xl text-center">
                {/* Large 404 Text with Gradient */}
                <p className="text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-purple-600 animate-pulse">
                    404
                </p>

                <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                    Ops! Halaman Hilang
                </h1>

                <p className="mt-6 text-lg leading-7 text-gray-600">
                    Sepertinya kamu tersesat di ruang hampa. Halaman yang kamu cari tidak ada atau mungkin sudah pindah ke dimensi lain.
                </p>

                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Link
                        href="/"
                        className="group relative overflow-hidden rounded-full bg-blue-600 px-8 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-blue-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    >
                        <span className="relative z-10">Kembali ke Beranda</span>
                        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 group-hover:translate-x-full"></div>
                    </Link>

                    <Link 
                        href="/contact" 
                        className="text-sm font-semibold text-gray-900 hover:text-blue-600 transition-colors"
                    >
                        Hubungi Support <span aria-hidden="true">&rarr;</span>
                    </Link>
                </div>
            </div>

            {/* Simple Animated Illustration (Floating Circle) */}
            <div className="mt-16 flex justify-center">
                <div className="relative h-24 w-24">
                    <div className="absolute inset-0 animate-bounce rounded-2xl bg-blue-50">
                        <div className="flex h-full w-full items-center justify-center text-4xl">
                            🔍
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;