import { useContext, useRef } from "react";
// Custom hook
import useClickOutside from "./customHooks/useClickOutside";
//Components
import Login from "./Login";
// Context
import { Context } from "../App";
// Icons
import { IoStatsChartSharp } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";

const Sidebar = () => {
    const { isLoginOpen, setIsLoginOpen, setIsModal, setIsModalExercise } =
        useContext(Context); //use global context

    const modalRef = useRef<HTMLDivElement>(null); //Ref for modal to check clicking outside

    const handleProfileClick = () => {
        setIsLoginOpen((prev) => !prev);
        setIsModal(false);
        setIsModalExercise(false);
    };

    useClickOutside({ ref: modalRef, setState: setIsLoginOpen }); //Custom hook

    return (
        // Make hamburger menu
        <div className="max-sm:flex-row flex sm:flex-col sm:py-10 p-5 sm:h-screen gap-5 max-sm:justify-between">
            <div>
                <div className="flex justify-center items-center w-8 h-8 bg-darkText rounded-full">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <div className="w-8 h-3 bg-darkText mt-2"></div>
            </div>
            <div className="flex sm:flex-col gap-10 sm:mt-36 text-darkText items-center">
                <FaCheckCircle className="w-8 h-8" />
                <IoPerson
                    onClick={handleProfileClick}
                    className="w-8 h-8 cursor-pointer hover:text-bgHover hover:transition-all hover:ease-in"
                />
                <IoStatsChartSharp className="w-8 h-8" />
                <IoIosSettings className="w-8 h-8" />
            </div>

            {isLoginOpen && (
                <div>
                    <div className="z-0 absolute inset-0 bg-black opacity-90"></div>
                    <div
                        ref={modalRef}
                        className="absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%]"
                    >
                        <Login />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Sidebar;
