"use client"; // Next.js use korle eta lage active path check korar jonno
import React from "react";
import { usePathname } from "next/navigation";
import { GoHome } from "react-icons/go";
import { MdOutlineTimeline } from "react-icons/md";
import { IoStatsChartOutline } from "react-icons/io5";
import Link from "next/link";

const Navbar = () => {
  const pathname = usePathname();

  const navItems = [
    { path: "/home", text: "Home", icon: <GoHome className="text-xl" /> },
    { path: "/timeline", text: "Timeline", icon: <MdOutlineTimeline className="text-xl" /> },
    { path: "/stars", text: "Stars", icon: <IoStatsChartOutline className="text-xl" /> },
  ];

  return (
    <nav className="border-b border-gray-100 bg-white">
      <div className="container mx-auto flex items-center justify-between px-6 py-3">
        
        {/* Logo Section */}
        <div className="flex items-center gap-1">
           <h1 className="text-2xl font-bold text-[#1a2e28]">
             Keen<span className="font-medium text-[#2d4a43]">Keeper</span>
           </h1>
        </div>

        {/* Nav Items (Menu) */}
        <ul className="flex items-center gap-2">
          {navItems.map((item, index) => {
            const isActive = pathname === item.path;
            
            return (
              <li key={index}>
                <Link
                  href={item.path}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-md transition-all duration-300 font-medium text-sm
                    ${
                      isActive
                        ? "bg-[#234F40] text-white shadow-md" // Active Style (Image er moto)
                        : "text-gray-500 hover:bg-gray-100 hover:text-[#234F40]" // Normal Style
                    }`}
                >
                  {item.icon}
                  {item.text}
                </Link>
              </li>
            );
          })}
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;