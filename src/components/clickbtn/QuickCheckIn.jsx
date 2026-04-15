"use client";

import { useContext } from "react";
import { InstallAppsContext } from "@/context/AppContext";
import { MdWifiCalling3, MdTextsms } from "react-icons/md";
import { FaVideo } from "react-icons/fa";
import { toast } from "react-toastify";

const QuickCheckIn = ({ app }) => {
    const { timeline, setTimeline } = useContext(InstallAppsContext);

    const handleAction = (type) => {
        
        toast.success(`${app.name} is Added`);
        

        const newInteraction = {
            ...app,
            interactionType: type,
            interactionTime: new Date().toLocaleString(),
            id: Date.now(),
        };

    
        setTimeline((prev) => [newInteraction, ...prev]);
    };

    return (
        <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="font-semibold mb-3">Quick Check-In</h2>

            <div className="grid grid-cols-3 gap-3">
                
                <button
                    onClick={() => handleAction("Call")}
                    className="bg-gray-100 rounded-xl h-24 flex flex-col items-center justify-center hover:bg-green-200"
                >
                    <MdWifiCalling3 className="text-3xl text-gray-600" />
                    <span>Call</span>
                </button>

                <button
                    onClick={() => handleAction("Text")}
                    className="bg-gray-100 rounded-xl h-24 flex flex-col items-center hover:bg-green-200 justify-center"
                >
                    <MdTextsms className="text-3xl text-gray-600" />
                    <span>Text</span>
                </button>

                <button
                    onClick={() => handleAction("Video")}
                    className="bg-gray-100 rounded-xl h-24 flex flex-col hover:bg-green-200 items-center justify-center"
                >
                    <FaVideo className="text-3xl text-gray-600" />
                    <span>Video</span>
                </button>
            </div>
        </div>
    );
};

export default QuickCheckIn;