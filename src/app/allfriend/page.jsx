import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AllFriendPage = async () => {

    const res = await fetch("http://localhost:3000/data.json", 
    );
    const friends = await res.json();

  
    const statusStyles = {
        "on track": "bg-[#234F40] text-white",     
        "overdue": "bg-[#EF4444] text-white",      
        "need attention": "bg-[#F59E0B] text-white", 
    };

    return (
        <div className="min-h-screen bg-[#f8fafb] py-12 px-6">
            <div className="container mx-auto">
                {/* Section Header */}
                <h2 className="text-2xl font-bold text-[#1a2e28] mb-8">Your Friends</h2>

                {/* 4 Column Grid Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {friends.map((friend) => (
                      <Link   key={friend?.id} href={`allfriend/${friend?.id}`}>
                        <div 
                          
                            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col items-center text-center transition-all hover:shadow-md"
                        >
                            {/* Profile Picture */}
                            <div className="relative w-20 h-20 mb-4">
                                <Image
                                    src={friend.picture}
                                    alt={friend.name}
                                    fill
                                    className="rounded-full object-cover border-2 border-gray-50"
                                />
                            </div>

                            {/* Friend Details */}
                            <h3 className="text-lg font-bold text-[#1a2e28]">{friend.name}</h3>
                            <p className="text-gray-400 text-xs mb-3">{friend.days_since_contact}d ago</p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 justify-center mb-5">
                                {friend.tags.map((tag, i) => (
                                    <span 
                                        key={i} 
                                        className="px-3 py-1 bg-[#E1F3EE] text-[#234F40] text-[10px] font-bold uppercase rounded-full"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Dynamic Status Badge */}
                            <span className={`px-5 py-1.5 rounded-full text-xs font-bold capitalize ${statusStyles[friend.status]}`}>
                                {friend.status === "need attention" ? "Almost Due" : friend.status}
                            </span>
                        </div>
                      </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllFriendPage;