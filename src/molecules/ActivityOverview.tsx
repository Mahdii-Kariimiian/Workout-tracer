import { Context } from "../App";
import { useContext, useEffect, useState } from "react";
import ActivityCard from "../atoms/ActivityCard";
import stopWatch from "../../public/icons/stopwatch.png";
import run from "../../public/icons/run.png";
import kcal from "../../public/icons/kcal.png";
import cutlery from "../../public/icons/cutlery.png";
import ranking from "../../public/icons/ranking.png";

const MainInfo = () => {
    const { burnedArray, consumedArray } = useContext(Context);
    const [distance, setDistance] = useState<number>(0);
    const [duration, setDuration] = useState<number>(0);
    const [allConsumed, setAllConsumed] = useState<number>(0);
    const [allBurned, setAllBurned] = useState<number>(0);

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

    const infoArray = [
        { title: "Running", quantity: distance, icon: run },
        { title: "Duration", quantity: duration, icon: stopWatch },
        {
            title: "All Calories Consumed",
            quantity: allConsumed,
            icon: cutlery,
        },
        {
            title: "All Calories Burned",
            quantity: allBurned,
            icon: kcal,
        },
    ];

    return (
        <div className="bg-bgLight max-lg:w-screen text-darkText px-10 py-7 h-full">
            <div className="flex gap-3 mb-5 justify-start items-baseline">
                <img className="w-10" src={ranking} alt="ranking" />
                <h1 className="text-2xl font-josefin whitespace-nowrap">
                    Your Activities
                </h1>
            </div>

            <ActivityCard props={infoArray}>
                sm:grid sm:grid-cols-2 max-sm:space-y-3 gap-3 flex flex-col
                gap-4
            </ActivityCard>
        </div>
    );
};

export default MainInfo;
