import React from 'react';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6'; 

const Footer = () => {
    return (
        <footer className="bg-[#1e4034] text-white py-5 px-4 mt-10">
            <div className="max-w-2xl mx-auto flex flex-col items-center">

                
                <h2 className="text-2xl font-bold mb-2 tracking-tight">KeenKeeper</h2>

                
                <p className="text-gray-300 text-sm md:text-base text-center max-w-xl mb-5 leading-relaxed font-light">
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                </p>

                
                <div className="flex flex-col items-center mb-5">
                    <span className="text-lg font-semibold mb-3">Social Links</span>
                    <div className="flex gap-4">
                        <a href="#" className="bg-white p-2 rounded-full text-[#1e4034] hover:bg-gray-200 transition-all shadow-md">
                            <FaInstagram size={20} />
                        </a>
                        <a href="#" className="bg-white p-2 rounded-full text-[#1e4034] hover:bg-gray-200 transition-all shadow-md">
                            <FaFacebookF size={20} />
                        </a>
                        <a href="#" className="bg-white p-2 rounded-full text-[#1e4034] hover:bg-gray-200 transition-all shadow-md">
                            <FaXTwitter size={20} />
                        </a>
                    </div>
                </div>

                
                <div className="w-full border-t border-gray-600/40 mb-8"></div>

                
                <div className="w-full flex flex-col md:row justify-between items-center text-[13px] text-gray-400 gap-4">
                    <p>© 2026 KeenKeeper. All rights reserved.</p>

                    <div className="flex gap-8">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Cookies</a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;