
"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const MyLink = ({ href, children }) => {
    const pathname = usePathname()
    return (
        <Link
            href={href}
            className={` font-semibold ${pathname === href ? "btn bg-[#244D3F] text-white" : ""}`}
        >
            {children}
        </Link>
    );
};

export default MyLink;