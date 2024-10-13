import { IoStatsChartSharp } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";

const Sidebar = () => {
    return (
        <div className="flex flex-col py-10 px-7 h-screen">
            <div>
                <div className="flex justify-center items-center w-8 h-8 bg-black rounded-full">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <div className="w-8 h-3 bg-black mt-2"></div>
            </div>
            <div className="flex flex-col gap-10 mt-36 text-gray-600">
                <FaCheckCircle className="w-8 h-8" />
                <IoPerson className="w-8 h-8" />
                <IoStatsChartSharp className="w-8 h-8" />
                <IoIosSettings className="w-8 h-8" />
            </div>
        </div>
    );
};

export default Sidebar;
