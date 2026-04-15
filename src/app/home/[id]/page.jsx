import QuickCheckIn from "@/components/clickbtn/QuickCheckIn";
import { AiOutlineDelete } from "react-icons/ai";
import { FaArchive } from "react-icons/fa";
import { LiaSnapchatGhost } from "react-icons/lia";

const PageId = async ({ params }) => {
   
    const { id } = await params;


    const res = await fetch("https://keen-kepper-phi.vercel.app/data.json", {
        cache: "no-store", 
    });

    const apps = await res.json();

 
    const app = apps.find((item) => String(item.id) === String(id));


    if (!app) {
        return (
            <div className="p-10 text-center">
                <h1 className="text-red-500 font-bold">Data is not found for ID: {id}</h1>
            </div>
        );
    }


    const { picture, name, email, days_since_contact, status, tags, bio, goal, next_due_date } = app;


    const getStatusColor = (status) => {
        const s = status?.toLowerCase();
        if (s === "overdue") return "bg-red-500 text-white";
        if (s === "almost due") return "bg-orange-400 text-white";
        return "bg-emerald-700 text-white";
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6 ">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

                
                <div className="space-y-4">
                    <div className="bg-white p-6 rounded-xl text-center shadow">
                        <img
                            src={picture}
                            alt={name}
                            className="w-20 h-20 rounded-full mx-auto mb-3 object-cover shadow-sm"
                        />
                        <h2 className="text-lg font-semibold">{name}</h2>
                        <div className={`w-fit mx-auto px-3 py-1 text-sm mt-2 font-semibold rounded-full ${getStatusColor(status)}`}>
                            {status}
                        </div>
                        <div className="flex flex-wrap justify-center gap-2 mt-4">
                            {tags?.map((tag, index) => (
                                <span key={index} className="px-2 py-1 text-xs bg-green-100 text-green-700 rounded-full">
                                    {tag.toUpperCase()}
                                </span>
                            ))}
                        </div>
                        <p className="text-sm text-gray-500 mt-3">{bio}</p>
                        <p className="text-xs text-gray-400 mt-1">{email}</p>
                    </div>

                    <button className="w-full bg-white p-3 rounded-lg shadow flex items-center justify-center gap-2 font-medium">
                        <LiaSnapchatGhost /> Snooze 2 Weeks
                    </button>
                    <button className="w-full bg-white p-3 rounded-lg shadow flex items-center justify-center gap-2 font-medium">
                        <FaArchive /> Archive
                    </button>
                    <button className="w-full bg-white p-3 rounded-lg shadow text-red-500 flex items-center justify-center gap-2 font-medium">
                        <AiOutlineDelete /> Delete
                    </button>
                </div>


                <div className="md:col-span-2 space-y-6">
                    <div className="grid grid-cols-3 gap-4">
                        <div className="bg-white p-4 rounded-lg text-center shadow">
                            <h2 className="text-xl font-bold">{days_since_contact}</h2>
                            <p className="text-sm text-gray-500">Days Since Contact</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg text-center shadow">
                            <h2 className="text-xl font-bold">{goal}</h2>
                            <p className="text-sm text-gray-500">Goal (Days)</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg text-center shadow">
                            <h2 className="text-sm font-bold">{new Date(next_due_date).toDateString()}</h2>
                            <p className="text-xs text-gray-400">Next Due</p>
                        </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow">
                        <div className="flex justify-between items-center mb-2">
                            <h1 className="font-semibold text-gray-700">Relationship Goal</h1>
                            <button className="text-xs bg-gray-100 px-3 py-1 rounded hover:bg-gray-200">Edit</button>
                        </div>
                        <h2 className="font-bold text-lg text-gray-800">Connect every {goal} days</h2>
                    </div>

                    <QuickCheckIn app={app} />

                    <div className="bg-white p-4 rounded-lg shadow">
                        <h2 className="font-semibold mb-3">Recent Interactions</h2>
                        <div className="space-y-2">
                            <div className="flex justify-between text-sm border-b pb-2">
                                <span className="text-gray-700 font-medium">Text</span>
                                <span className="text-gray-400">Jan 28</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageId;