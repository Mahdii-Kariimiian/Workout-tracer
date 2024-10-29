import { FaPersonRunning } from "react-icons/fa6";
import { IoWatch } from "react-icons/io5";
import { MdOutlineSportsScore } from "react-icons/md";
import { FaSpoon } from "react-icons/fa6";
import { FaFireAlt } from "react-icons/fa";
import { Context } from "../App";
import { useContext, useEffect, useState } from "react";

const MainInfo = () => {
    const { burnedArray, consumedArray } = useContext(Context);
    const [distance, setDistance] = useState<number>(0);
    const [duration, setDuration] = useState<number>(0);
    const [allConsumed, setAllConsumed] = useState(0);
    const [allBurned, setAllBurned] = useState(0);

    useEffect(() => {
        burnedArray.map((exercise) => {
            setDistance((prev) => prev + exercise.distance);
            setDuration((prev) => prev + exercise.duration);
        });
        const burnedAll = burnedArray?.reduce(
            (acc, item) => acc + item.caloriesBurned,
            0
        );

        const consumedAll = consumedArray?.reduce(
            (acc, item) => acc + item.sum,
            0
        );
        setAllConsumed(consumedAll);
        setAllBurned(burnedAll);
    }, [consumedArray, burnedArray]);

    return (
        <div className="bg-bgLight max-lg:w-screen text-darkText px-10 py-7 h-full">
            <div className="flex gap-3 mb-5 justify-start items-start">
                <MdOutlineSportsScore className="w-7 h-7" />
                <h1 className="text-2xl font-josefin whitespace-nowrap">
                    Your Activities
                </h1>
            </div>
            <div className="sm:grid sm:grid-cols-2 max-sm:space-y-3 gap-3">
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
                <div className="flex gap-4 items-center">
                    <div className="p-2 border border-darkText rounded-full">
                        <FaSpoon className="w-5 h-5 p-1" />
                    </div>
                    <div className="space-y-1">
                        <h2 className="text-darkText text-lg font-agdasima whitespace-nowrap">
                            All Calories Consumed
                        </h2>
                        <p className="text-2xl font-josefin">
                            {allConsumed} Kcal
                        </p>
                    </div>
                </div>
                <div className="flex gap-4 items-center">
                    <div className="p-2 border border-darkText rounded-full">
                        <FaFireAlt className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                        <h2 className="text-darkText text-lg font-agdasima whitespace-nowrap">
                            All Calories Burned
                        </h2>
                        <p className="text-2xl font-josefin">
                            {allBurned} Kcal
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainInfo;
