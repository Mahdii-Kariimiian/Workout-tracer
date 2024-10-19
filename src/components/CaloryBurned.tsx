import { useState, useContext, useEffect } from "react";
import { TbActivityHeartbeat } from "react-icons/tb";
import { FaBurn } from "react-icons/fa";
import { Context } from "../App";
import { AppContextType } from "../types";
import InsertExercise from "./InsertExercise";

const CaloryBurned = () => {
    const { isModalExercise, burnedArray, isLogged } =
        useContext<AppContextType>(Context);

    const [heartRate, setHeartRate] = useState<number>(0);

    useEffect(() => {
        if (burnedArray && burnedArray.length > 0) {
            setHeartRate(burnedArray[burnedArray.length - 1].heartRate);
        }
    }, [burnedArray]);

    return (
        <div className="bg-gray-200 text-white h-full flex flex-col">
            <div className="flex flex-1 justify-between items-center bg-sky-950 p-3">
                <div className="space-y-2 ">
                    <p className="text-gray-400 font-agdasima text-xl">
                        Calories Consumed
                    </p>
                    <p className="text-xl font-josefin">
                        {isLogged && burnedArray.length > 0
                            ? burnedArray[burnedArray.length - 1].caloriesBurned
                            : "-"}
                        Kcal
                    </p>
                </div>

                <FaBurn className="text-4xl" />
            </div>

            <div className="flex flex-1 justify-between items-center bg-sky-900 p-3">
                <div className="space-y-2">
                    <p className="text-gray-400 font-agdasima text-xl">
                        Heart Rate
                    </p>
                    <p className="text-xl font-josefin">
                        {isLogged && burnedArray.length > 0 ? heartRate : "-"}{" "}
                        Rpm
                    </p>
                </div>

                <TbActivityHeartbeat className="text-4xl" />
            </div>

            {isModalExercise && (
                <div className="absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%]">
                    <InsertExercise />
                </div>
            )}
        </div>
    );
};

export default CaloryBurned;
