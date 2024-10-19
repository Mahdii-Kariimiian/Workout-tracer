import { useContext } from "react";
import Login from "./Login";
import { IoStatsChartSharp } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { Context } from "../App";

const Sidebar = () => {
    const { isLoginOpen, setIsLoginOpen, setIsModal, setIsModalExercise } =
        useContext(Context);

    const handleProfileClick = () => {
        setIsLoginOpen((prev) => !prev);
        setIsModal(false);
        setIsModalExercise(false);
    };

    return (
        // Make hamburger menu
        <div className="max-sm:flex-row flex sm:flex-col sm:py-10 py-5 px-4 sm:h-screen gap-5 max-sm:justify-between">
            <div>
                <div className="flex justify-center items-center w-8 h-8 bg-orange-600 rounded-full">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <div className="w-8 h-3 bg-orange-600 mt-2"></div>
            </div>
            <div className="flex sm:flex-col gap-10 sm:mt-36 text-gray-600 items-center">
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
