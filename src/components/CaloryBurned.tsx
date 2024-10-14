import { TbActivityHeartbeat } from "react-icons/tb";
import { IoIosWater } from "react-icons/io";
import { FaBurn } from "react-icons/fa";

const CaloryBurned = () => {
    return (
        <div className="bg-zinc-200 h-full p-5 flex flex-col justify-between">
            <div className="space-y-2">
                <div className="flex justify-between items-center">
                    <div>
                        <h2 className="text-4xl">Calories</h2>
                        <div>
                            <p>Consumed</p>
                            <p>130 Cal</p>
                        </div>
                    </div>
                    <FaBurn className="text-7xl" />
                </div>
            </div>
            <div className="space-y-2">
                <div className="flex justify-between items-center">
                    <div>
                        <h2 className="text-4xl">Heart</h2>
                        <div>
                            <p>Rate</p>
                            <p>70 Bpm</p>
                        </div>
                        <input
                            className="px-3 py-1"
                            type="text"
                            placeholder="Heart rate"
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
                        <h2 className="text-4xl">Water</h2>
                        <div>
                            <p>Consumed</p>
                            <p> 2 L</p>
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
        </div>
    );
};

export default CaloryBurned;
