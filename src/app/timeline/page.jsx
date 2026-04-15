"use client";

import { useContext, useState } from "react";
import { InstallAppsContext } from "@/context/AppContext";
import { BiChevronDown } from "react-icons/bi";

const TimelinePage = () => {
    const [filter, setFilter] = useState("all");
    const [open, setOpen] = useState(false);

    const { timeline = [] } = useContext(InstallAppsContext) || {};

    const filterOptions = ["all", "Call", "Text", "Video"];


    const filteredTimeline = timeline.filter((item) => {
        const type = (item?.interactionType || "").toLowerCase().trim();
        const validTypes = ["call", "text", "video"];

        if (filter === "all") {
        
            return validTypes.includes(type);
        }

    
        return type === filter.toLowerCase();
    });

    
    const getIcon = (type) => {
        if (!type) return ""; 

        const normalized = type.toLowerCase().trim();

        if (normalized.includes("call")) return "📞";
        if (normalized.includes("text")) return "💬";
        if (normalized.includes("video")) return "🎥";

        return ""; 
    };

    return (
        <div className="max-w-3xl mx-auto p-8 bg-white min-h-screen">
            <h1 className="text-4xl font-bold mb-6">Timeline</h1>

            
            <div className="relative mb-8 w-64">
                <button
                    onClick={() => setOpen(!open)}
                    className="w-full flex justify-between items-center px-4 py-2 bg-white border rounded-lg shadow-sm"
                >
                    <span className="capitalize">
                        {filter === "all" ? "Filter timeline" : filter}
                    </span>
                    <BiChevronDown size={18} />
                </button>

                {open && (
                    <div className="absolute mt-2 w-full bg-white border rounded-lg shadow-lg z-10">
                        {filterOptions.map((item) => (
                            <div
                                key={item}
                                onClick={() => {
                                    setFilter(item);
                                    setOpen(false);
                                }}
                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer capitalize"
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                )}
            </div>

            
            {filteredTimeline.length === 0 ? (
                <p className="text-gray-500 text-center">
                    No interactions found 😢
                </p>
            ) : (
                <div className="space-y-4">
                    {filteredTimeline.map((item, index) => (
                        <div
                            key={item?.id || index}
                            className="flex items-center gap-4 p-4 border rounded-lg"
                        >
                            
                            <div className="text-3xl">
                                {getIcon(item?.interactionType)}
                            </div>

                            
                            <div>
                                <h3>
                                    <b>{item?.interactionType || "Unknown"}</b>{" "}
                                    with {item?.name || "Unknown"}
                                </h3>
                                <p className="text-sm text-gray-500">
                                    {item?.interactionTime || ""}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default TimelinePage;