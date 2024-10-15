import { useState, useContext } from "react";
import { TbActivityHeartbeat } from "react-icons/tb";
import { IoIosWater } from "react-icons/io";
import { FaBurn } from "react-icons/fa";
import { Context } from "../App";
import { AppContextType } from "../types";
import InsertExercise from "./InsertExercise";

const CaloryBurned = () => {
    const { isModalExercise, setIsModalExercise, setIsModal } =
        useContext<AppContextType>(Context);

    const [rate, SetRate] = useState<number>(0);
    const [inputRate, setInputRate] = useState<number>(0);
    return (
        <div className="bg-zinc-200 h-full p-5 flex flex-col justify-between">
            <div className="space-y-2">
                <div className="flex justify-between items-center">
                    <div>
                        <h2 className="text-3xl mb-2">Calories</h2>
                        <div>
                            <p className="text-gray-800">Consumed</p>
                            <p className="text-xl">130 Cal</p>
                        </div>
                    </div>
                    <FaBurn className="text-7xl" />
                </div>
                <button
                    onClick={() => {
                        setIsModal?.(false);
                        setIsModalExercise?.(!isModalExercise);
                    }}
                    className=" bg-sky-950 text-white px-3 py-1"
                >
                    Enter Exercise
                </button>
            </div>
            <div className="space-y-2">
                <div className="flex justify-between items-center">
                    <div>
                        <h2 className="text-3xl mb-2">Heart</h2>
                        <div className="mb-2">
                            <p className="text-gray-800">Rate</p>
                            <p className="text-xl">{rate}</p>
                        </div>
                        <input
                            className="px-3 py-1"
                            type="text"
                            placeholder="Heart rate"
                            value={rate}
                            onChange={(e) =>
                                SetRate(parseFloat(e.target.value))
                            }
                        />
                        <button className=" bg-sky-950 text-white px-3 py-1">
                            Enter
                        </button>
                    </div>
                    <TbActivityHeartbeat className="text-7xl" />
                </div>
            </div>
            <div className="space-y-2">
                <div className="flex justify-between items-center">
                    <div>
                        <h2 className="text-3xl mb-2">Water</h2>
                        <div className="mb-2">
                            <p className="text-gray-800">Consumed</p>
                            <p className="text-xl"> 2 L</p>
                        </div>
                        <input
                            className="px-3 py-1"
                            type="text"
                            placeholder="Water"
                        />
                        <button className="bg-sky-950 text-white px-3 py-1">
                            Enter
                        </button>
                    </div>
                    <IoIosWater className="text-7xl" />
                </div>
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
