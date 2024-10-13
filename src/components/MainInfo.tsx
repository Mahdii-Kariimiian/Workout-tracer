import { CiSun } from "react-icons/ci";
import { FaPersonRunning } from "react-icons/fa6";
import { IoWatch } from "react-icons/io5";

const MainInfo = () => {
    return (
        <div className="bg-blue-500 text-white p-10 space-y-8 h-full">
            <div className="flex gap- justify-center items-center">
                <CiSun className="text-yellow-300 w-10 h-10" />
                <h1 className="text-4xl">Morning Walk</h1>
            </div>
            <div className="flex justify-between">
                <div className="flex gap-4 items-center">
                    <div className="p-2 border border-gray-100 rounded-full">
                        <FaPersonRunning className="w-5 h-5" />
                    </div>
                    <div>
                        <h2>Running</h2>
                        <p className="font-bold">130 km</p>
                    </div>
                </div>
                <div className="flex gap-4 items-center">
                    <div className="p-2 border border-gray-100 rounded-full">
                        <IoWatch />
                    </div>
                    <div>
                        <h2>Duration</h2>
                        <p className="font-bold">31:12 h</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainInfo;
