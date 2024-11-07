import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
// Custom hook
import useClickOutside from "../../customHooks/use-click-outside";
//Components
import Login from "../../pages/login";
// Context
import { authContext } from "../../context/authorization";
import { Context } from "../../context/context-provider";
// Icons
import { IoIosSettings } from "react-icons/io";
import profile from "../../../public/icons/user.png";
import barBell from "../../../public/icons/barbell.png";
import meal from "../../../public/icons/food.png";

const Sidebar = () => {
    const { isLoginOpen, setIsLoginOpen } = useContext(authContext); //use global context
    const { setIsModal, setIsModalExercise } = useContext(Context);

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
                <Link className="w-10" to={"/workout"}>
                    <img src={barBell} alt="barBell" />
                </Link>
                <Link className="w-10" to={"/meals"}>
                    <img src={meal} alt="meal" />
                </Link>
                <Link className="w-10" onClick={handleProfileClick} to={"/login"}>
                    <img src={profile} alt="profile" />
                </Link>

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
