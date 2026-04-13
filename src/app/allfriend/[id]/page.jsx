import React from 'react';
import Image from 'next/image';
import { FiPhone, FiMessageSquare, FiVideo, FiBellOff, FiArchive, FiTrash2, FiClock } from "react-icons/fi";

export default async function BlogPostPage({ params }) {
    const { id } = await params;

    // Data fetch kora
    const res = await fetch("http://localhost:3000/data.json");
    const friends = await res.json();

    // Specific friend-ke filter kora
    const friend = friends.find((f) => f.id === parseInt(id));

    if (!friend) {
        return <div className="text-center py-20 text-2xl font-bold">Friend not found!</div>;
    }

    const statusStyles = {
        "on track": "bg-[#234F40] text-white",
        "overdue": "bg-[#EF4444] text-white",
        "need attention": "bg-[#F59E0B] text-white",
    };

    return (
        <div className="min-h-screen bg-[#f8fafb] py-12 px-6">
            <div className="container mx-auto max-w-6xl">
                
                {/* Main Layout Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    
                    {/* Left Sidebar: Profile & Actions */}
                    <div className="md:col-span-4 flex flex-col gap-4">
                        {/* Profile Card */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                            <div className="relative w-24 h-24 mb-4">
                                <Image src={friend.picture} alt={friend.name} fill className="rounded-full object-cover" />
                            </div>
                            <h2 className="text-xl font-bold text-[#1a2e28]">{friend.name}</h2>
                            <div className="flex flex-col gap-2 mt-2">
                                <span className={`px-4 py-1 rounded-full text-[10px] font-bold uppercase ${statusStyles[friend.status]}`}>
                                    {friend.status === "need attention" ? "Almost Due" : friend.status}
                                </span>
                                {friend.tags.map(tag => (
                                    <span key={tag} className="px-4 py-1 bg-[#E1F3EE] text-[#234F40] text-[10px] font-bold uppercase rounded-full">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <p className="mt-4 text-sm italic text-gray-500">"{friend.bio}"</p>
                            <p className="mt-2 text-xs text-gray-400">Preferred: email</p>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col gap-2">
                            <button className="flex items-center justify-center gap-2 w-full py-3 bg-white border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50">
                                <FiBellOff /> Snooze 2 Weeks
                            </button>
                            <button className="flex items-center justify-center gap-2 w-full py-3 bg-white border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50">
                                <FiArchive /> Archive
                            </button>
                            <button className="flex items-center justify-center gap-2 w-full py-3 bg-white border border-gray-100 rounded-lg text-sm text-red-500 hover:bg-red-50">
                                <FiTrash2 /> Delete
                            </button>
                        </div>
                    </div>

                    {/* Right Content Area */}
                    <div className="md:col-span-8 flex flex-col gap-6">
                        
                        {/* Top Stats Row */}
                        <div className="grid grid-cols-3 gap-4">
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
                                <p className="text-3xl font-bold text-[#1a2e28]">{friend.days_since_contact}</p>
                                <p className="text-[10px] text-gray-400 uppercase font-bold mt-1">Days Since Contact</p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
                                <p className="text-3xl font-bold text-[#1a2e28]">{friend.goal}</p>
                                <p className="text-[10px] text-gray-400 uppercase font-bold mt-1">Goal (Days)</p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center text-emerald-700">
                                <p className="text-lg font-bold">Feb 27, 2026</p>
                                <p className="text-[10px] text-gray-400 uppercase font-bold mt-1">Next Due</p>
                            </div>
                        </div>

                        {/* Relationship Goal Section */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="font-bold text-[#1a2e28] text-sm uppercase">Relationship Goal</h3>
                                <button className="text-xs bg-gray-100 px-3 py-1 rounded text-gray-500 font-bold uppercase">Edit</button>
                            </div>
                            <p className="text-sm text-gray-600">Connect every <span className="font-bold text-[#1a2e28]">{friend.goal} days</span></p>
                        </div>

                        {/* Quick Check-In Section */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                            <h3 className="font-bold text-[#1a2e28] text-sm uppercase mb-4">Quick Check-In</h3>
                            <div className="grid grid-cols-3 gap-4">
                                <button className="flex flex-col items-center gap-2 py-4 border border-gray-100 rounded-xl hover:bg-gray-50 transition-all">
                                    <FiPhone className="text-2xl text-gray-700" /> <span className="text-xs">Call</span>
                                </button>
                                <button className="flex flex-col items-center gap-2 py-4 border border-gray-100 rounded-xl hover:bg-gray-50 transition-all">
                                    <FiMessageSquare className="text-2xl text-gray-700" /> <span className="text-xs">Text</span>
                                </button>
                                <button className="flex flex-col items-center gap-2 py-4 border border-gray-100 rounded-xl hover:bg-gray-50 transition-all">
                                    <FiVideo className="text-2xl text-gray-700" /> <span className="text-xs">Video</span>
                                </button>
                            </div>
                        </div>

                        {/* Recent Interactions List */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="font-bold text-[#1a2e28] text-sm uppercase tracking-wider">Recent Interactions</h3>
                                <button className="text-[10px] bg-gray-100 px-3 py-1 rounded text-gray-500 font-bold uppercase flex items-center gap-1">
                                    <FiClock /> Full History
                                </button>
                            </div>
                            <div className="flex flex-col">
                                {[1, 2, 3, 4].map((_, i) => (
                                    <div key={i} className="flex justify-between items-center py-4 border-b last:border-0 border-gray-50">
                                        <div className="flex items-center gap-4">
                                            <FiMessageSquare className="text-gray-700 text-lg" />
                                            <div>
                                                <p className="text-sm font-bold text-[#1a2e28]">Text</p>
                                                <p className="text-xs text-gray-400">Asked for career advice</p>
                                            </div>
                                        </div>
                                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">Jan 28, 2026</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}