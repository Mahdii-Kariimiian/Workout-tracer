import { useState, useContext, useEffect } from "react";
import { Context } from "../../App";
import ExerciseBox from "./component/ExerciseBox";

const Title = () => {
    const { consumedArray, burnedArray } = useContext(Context);
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
        <div className="bg-cyan-950 text-white p-10 h-full">
            <h2 className="text-4xl mb-7">Track Your Daily Activity</h2>
            <div className="flex gap-10">
                <div className="w-60">
                    <div>
                        <h2 className="text-gray-400">All Calories Consumed</h2>
                        <p className="text-xl">{allConsumed} Kcal</p>
                    </div>
                    <div>
                        <h2 className="text-gray-400">All Calories Burned</h2>
                        <p className="text-xl">{allBurned} Kcal</p>
                    </div>
                </div>
                <div className="w-full bg-blue-500 p-3">
                    <h2>Exercises</h2>
                    <ExerciseBox />
                </div>
            </div>
        </div>
    );
};

export default Title;
