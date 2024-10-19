import { useState, useContext, useEffect } from "react";
import { Context } from "../../App";
import { HiCalendarDays } from "react-icons/hi2";
import { FaSpoon } from "react-icons/fa6";
import { FaFireAlt } from "react-icons/fa";

const Title = () => {
    const { consumedArray, burnedArray, isLogged } = useContext(Context);
    const [allConsumed, setAllConsumed] = useState(0);
    const [allBurned, setAllBurned] = useState(0);

    useEffect(() => {
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
        <div className="bg-sky-900 max-lg:w-screen text-white py-10 px-3 h-full">
            <div className="flex gap-2 mb-12 justify-start items-start">
                <HiCalendarDays className="w-12 h-12 -translate-y-2" />
                <h2 className="text-4xl font-josefin whitespace-nowrap">
                    Your Daily Activity
                </h2>
            </div>
            <div className="flex flex-wrap">
                <div className="flex gap-4 items-center min-w-[50%]">
                    <div className="p-2 border border-gray-100 rounded-full">
                        <FaSpoon className="w-5 h-5 p-1" />
                    </div>
                    <div className="space-y-1">
                        <h2 className="text-gray-300 text-lg font-agdasima whitespace-nowrap">
                            All Calories Consumed
                        </h2>
                        <p className="text-2xl font-josefin">
                            {isLogged ? allConsumed : "-"} Kcal
                        </p>
                    </div>
                </div>
                <div className="flex gap-4 items-center">
                    <div className="p-2 border border-gray-100 rounded-full">
                        <FaFireAlt className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                        <h2 className="text-gray-300 text-lg font-agdasima whitespace-nowrap">
                            All Calories Burned
                        </h2>
                        <p className="text-2xl font-josefin">
                            {isLogged ? allBurned : "-"} Kcal
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Title;
