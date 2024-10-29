import { useState, useContext, useEffect } from "react";
import { TbActivityHeartbeat } from "react-icons/tb";
import { FaBurn } from "react-icons/fa";
import { Context } from "../App";
import { AppContextType } from "../types";

const CaloryBurned = () => {
    const { burnedArray } = useContext<AppContextType>(Context);

    const [heartRate, setHeartRate] = useState<number>(0);

    useEffect(() => {
        if (burnedArray && burnedArray.length > 0) {
            setHeartRate(burnedArray[burnedArray.length - 1].heartRate);
        }
    }, [burnedArray]);

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
                            : "0 "}
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
                        {burnedArray.length > 0 ? heartRate : "0 "} Rpm
                    </p>
                </div>

                <TbActivityHeartbeat className="text-4xl" />
            </div>
        </div>
    );
};

export default CaloryBurned;
