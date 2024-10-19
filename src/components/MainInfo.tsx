import { FaPersonRunning } from "react-icons/fa6";
import { IoWatch } from "react-icons/io5";
import { MdOutlineSportsScore } from "react-icons/md";
import { Context } from "../App";
import { useContext, useEffect, useState } from "react";

const MainInfo = () => {
    const { burnedArray, isLogged } = useContext(Context);
    const [distance, setDistance] = useState<number>(0);
    const [duration, setDuration] = useState<number>(0);

    useEffect(() => {
        burnedArray.map((exercise) => {
            setDistance((prev) => prev + exercise.distance);
            setDuration((prev) => prev + exercise.duration);
        });
    }, [burnedArray]);

    return (
        <div className="bg-gray-100 max-lg:w-screen text-sky-950 py-10 px-3 h-full">
            <div className="flex gap-2 mb-12 justify-start items-start">
                <MdOutlineSportsScore className="w-12 h-12 -translate-y-2" />
                <h1 className="text-4xl font-josefin whitespace-nowrap">
                    All You've Done
                </h1>
            </div>
            <div className="flex flex-wrap">
                <div className="flex gap-4 items-center min-w-[50%]">
                    <div className="p-2 border border-sky-950 rounded-full">
                        <FaPersonRunning className="w-5 h-5" />
                    </div>
                    <div>
                        <h2 className="text-sky-900 text-lg font-agdasima">
                            Running
                        </h2>
                        <p className="text-2xl font-josefin">
                            {isLogged ? distance : "-"} km
                        </p>
                    </div>
                </div>
                <div className="flex gap-4 items-center">
                    <div className="p-2 border border-sky-950 rounded-full">
                        <IoWatch className="w-5 h-5" />
                    </div>
                    <div>
                        <h2 className="text-sky-900 text-lg font-agdasima">
                            Duration
                        </h2>
                        <p className="text-2xl font-josefin">
                            {isLogged ? duration : "-"} M
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainInfo;
