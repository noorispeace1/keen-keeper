import React from 'react';
import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-[#234F40] text-white py-12 px-6">
            <div className="container mx-auto flex flex-col items-center text-center">
                
                {/* Logo / Brand Name */}
                <h2 className="text-4xl font-bold mb-4 tracking-tight">
                    KeenKeeper
                </h2>

                {/* Description */}
                <p className="text-gray-300 text-sm max-w-2xl mb-8 opacity-80">
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                </p>

                {/* Social Links Section */}
                <div className="mb-10">
                    <p className="text-sm font-semibold mb-4 uppercase tracking-widest opacity-90">
                        Social Links
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="w-10 h-10 flex items-center justify-center bg-white text-[#234F40] rounded-full hover:bg-gray-200 transition-all">
                            <FaInstagram size={20} />
                        </a>
                        <a href="#" className="w-10 h-10 flex items-center justify-center bg-white text-[#234F40] rounded-full hover:bg-gray-200 transition-all">
                            <FaFacebookF size={20} />
                        </a>
                        <a href="#" className="w-10 h-10 flex items-center justify-center bg-white text-[#234F40] rounded-full hover:bg-gray-200 transition-all">
                            <FaXTwitter size={20} />
                        </a>
                    </div>
                </div>

                {/* Bottom Border / Divider */}
                <div className="w-full border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-4">
                    <p>© 2026 KeenKeeper. All rights reserved.</p>
                    
                    <div className="flex gap-6">
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