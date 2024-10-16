import { CiSun } from "react-icons/ci";
import { FaPersonRunning } from "react-icons/fa6";
import { IoWatch } from "react-icons/io5";
import { Context } from "../App";
import { useContext, useEffect, useState } from "react";

const MainInfo = () => {
    const { burnedArray } = useContext(Context);
    const [distance, setDistance] = useState<number>(0);
    const [duration, setDuration] = useState<number>(0);

    useEffect(() => {
        burnedArray.map((exercise) => {
            setDistance((prev) => prev + exercise.distance);
            setDuration((prev) => prev + exercise.duration);
        });
    }, [burnedArray]);

    return (
        <div className="bg-blue-500 text-white p-10 space-y-12 h-full">
            <div className="flex gap-2 justify-start items-center">
                <CiSun className="text-yellow-300 w-10 h-10" />
                <h1 className="text-4xl">Morning Walk</h1>
            </div>
            <div className="grid grid-cols-2">
                <div className="flex gap-4 items-center">
                    <div className="p-2 border border-gray-100 rounded-full">
                        <FaPersonRunning className="w-9 h-9" />
                    </div>
                    <div>
                        <h2 className="text-gray-300">Running</h2>
                        <p className="text-xl"> {distance} km</p>
                    </div>
                </div>
                <div className="flex gap-4 items-center">
                    <div className="p-2 border border-gray-100 rounded-full">
                        <IoWatch className="w-9 h-9" />
                    </div>
                    <div>
                        <h2 className="text-gray-300">Duration</h2>
                        <p className="text-xl">{duration} M</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainInfo;
