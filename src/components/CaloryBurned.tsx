import { useState, useContext, useEffect, useRef } from "react";
import { TbActivityHeartbeat } from "react-icons/tb";
import { FaBurn } from "react-icons/fa";
import { Context } from "../App";
import { AppContextType } from "../types";
import InsertExercise from "./InsertExercise";
import useClickOutsideProps from "../components/customHooks/useClickOutside";

const CaloryBurned = () => {
    const { isModalExercise, burnedArray, setIsModalExercise } =
        useContext<AppContextType>(Context);

    const [heartRate, setHeartRate] = useState<number>(0);

    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (burnedArray && burnedArray.length > 0) {
            setHeartRate(burnedArray[burnedArray.length - 1].heartRate);
        }
    }, [burnedArray]);

    useClickOutsideProps({ ref: modalRef, setState: setIsModalExercise });

    return (
        <div className="bg-gray-200 text-lightText h-full flex flex-col max-sm:flex-row">
            <div className="flex flex-1 justify-between items-center bg-gradientPrimary px-10 py-5">
                <div className="space-y-2 ">
                    <p className="text-lightText font-agdasima text-xl">
                        Calories Consumed
                    </p>
                    <p className="text-xl font-josefin">
                        {burnedArray.length > 0
                            ? burnedArray[burnedArray.length - 1].caloriesBurned
                            : "-"}
                        Kcal
                    </p>
                </div>

                <FaBurn className="text-4xl" />
            </div>

            <div className="flex flex-1 justify-between items-center bg-gradientSecondary px-10 py-5">
                <div className="space-y-2">
                    <p className="text-lightText font-agdasima text-xl">
                        Heart Rate
                    </p>
                    <p className="text-xl font-josefin">
                        {burnedArray.length > 0 ? heartRate : "-"} Rpm
                    </p>
                </div>

                <TbActivityHeartbeat className="text-4xl" />
            </div>

            {isModalExercise && (
                <div>
                    <div className="z-0 absolute inset-0 bg-black opacity-90"></div>
                    <div
                        ref={modalRef}
                        className="absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%]"
                    >
                        <InsertExercise />
                    </div>
                </div>
            )}
        </div>
    );
};

export default CaloryBurned;
