
import React from "react";
import { FiPlus } from "react-icons/fi";
import AllFriendPage from "../allfriend/page";

const HomePage = () => {

  const stats = [
    { label: "Total Friends", value: 10 },
    { label: "On Track", value: 3 },
    { label: "Need Attention", value: 6 },
    { label: "Interactions This Month", value: 12 },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafb] pb-20">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center pt-16 pb-12 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1a2e28] mb-4">
          Friends to keep close in your life
        </h1>
        <p className="text-gray-500 max-w-lg mb-6 leading-relaxed">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the
          relationships that matter most.
        </p>
        
        {/* Pink Divider Line */}
        <div className="w-8 h-1 bg-pink-500 mb-8 rounded-full"></div>

        {/* Add Friend Button */}
        <button className="flex items-center gap-2 bg-[#234F40] text-white px-6 py-3 rounded-md font-medium hover:bg-[#1a3a2f] transition-all shadow-lg">
          <FiPlus className="text-xl" />
          Add a Friend
        </button>
      </section>

      {/* Stats Cards Section */}
      <section className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-50 flex flex-col items-center justify-center text-center transition-transform hover:scale-105"
            >
              <h2 className="text-4xl font-bold text-[#1a2e28] mb-2">
                {stat.value}
              </h2>
              <p className="text-gray-500 font-medium text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>
      <AllFriendPage></AllFriendPage>
    </div>
    
  );
};

export default HomePage;