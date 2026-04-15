import React from 'react';

const Card = () => {
    return (
        <section className="bg-gray-50 flex items-center justify-center p-8 py-10 ">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto w-full ">

                <div className="bg-white p-10 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] text-center flex flex-col items-center justify-center hover:border-1 hover:border-blue-200">
                    <div className="text-4xl font-bold text-[#1F2937] mb-2 leading-none">
                        10
                    </div>
                    <div className="text-sm text-gray-500 font-medium">
                        Total Friends
                    </div>
                </div>

                <div className="bg-white p-10 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] text-center flex flex-col items-center justify-center hover:border-1 hover:border-blue-200">
                    <div className="text-4xl font-bold text-[#1F2937] mb-2 leading-none">
                        3
                    </div>
                    <div className="text-sm text-gray-500 font-medium">
                        On Track
                    </div>
                </div>

                <div className="bg-white p-10 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] text-center flex flex-col items-center justify-center hover:border-1 hover:border-blue-200">
                    <div className="text-4xl font-bold text-[#1F2937] mb-2 leading-none">
                        6
                    </div>
                    <div className="text-sm text-gray-500 font-medium">
                        Need Attention
                    </div>
                </div>

                <div className="bg-white p-10 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] text-center flex flex-col items-center justify-center hover:border-1 hover:border-blue-200">
                    <div className="text-4xl font-bold text-[#1F2937] mb-2 leading-none">
                        12
                    </div>
                    <div className="text-sm text-gray-500 font-medium">
                        Interactions This Month
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Card;