import { useContext } from "react";
import Login from "./Login";
import { IoStatsChartSharp } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { Context } from "../App";

const Sidebar = () => {
    const { isLoginOpen, setIsLoginOpen } = useContext(Context);

    const handleProfileClick = () => {
        setIsLoginOpen((prev) => !prev);
    };

    return (
        // Make hamburger menu
        <div className="max-lg:hidden flex flex-col py-10 px-4 h-screen">
            <div>
                <div className="flex justify-center items-center w-8 h-8 bg-orange-600 rounded-full">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <div className="w-8 h-3 bg-orange-600 mt-2"></div>
            </div>
            <div className="flex flex-col gap-10 mt-36 text-gray-600">
                <FaCheckCircle className="w-8 h-8" />
                <IoPerson
                    onClick={handleProfileClick}
                    className="w-8 h-8 cursor-pointer hover:text-gray-900"
                />
                <IoStatsChartSharp className="w-8 h-8" />
                <IoIosSettings className="w-8 h-8" />
            </div>

            {isLoginOpen && (
                <div className="absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%]">
                    <Login />
                </div>
            )}
        </div>
    );
};

export default Sidebar;
