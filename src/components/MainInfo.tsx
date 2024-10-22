import { FaPersonRunning } from "react-icons/fa6";
import { IoWatch } from "react-icons/io5";
import { MdOutlineSportsScore } from "react-icons/md";
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
        <div className="bg-bgLight max-lg:w-screen text-darkText p-10 h-full">
            <div className="flex gap-2 mb-12 justify-start items-start">
                <MdOutlineSportsScore className="w-12 h-12 -translate-y-2" />
                <h1 className="text-3xl font-josefin whitespace-nowrap">
                    All You've Done
                </h1>
            </div>
            <div className="flex flex-wrap">
                <div className="flex gap-4 items-center min-w-[50%]">
                    <div className="p-2 border border-darkText rounded-full">
                        <FaPersonRunning className="w-5 h-5" />
                    </div>
                    <div>
                        <h2 className="text-lg font-agdasima">Running</h2>
                        <p className="text-xl font-josefin">{distance} km</p>
                    </div>
                </div>
                <div className="flex gap-4 items-center">
                    <div className="p-2 border border-darkText rounded-full">
                        <IoWatch className="w-5 h-5" />
                    </div>
                    <div>
                        <h2 className="text-lg font-agdasima">Duration</h2>
                        <p className="text-xl font-josefin">{duration} m</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainInfo;
