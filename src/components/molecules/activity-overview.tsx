import { Context } from "../../context/context-provider";
import { useContext, useEffect, useState } from "react";
import ActivityCard from "../atoms/activity-card";
import kcal from "../../../public/icons/kcal.png";
import cutlery from "../../../public/icons/cutlery.png";
import ranking from "../../../public/icons/ranking.png";

const ActivityOverview = () => {
    const { burnedArray, consumedArray } = useContext(Context);

    const [allConsumed, setAllConsumed] = useState<number>(0);
    const [allBurned, setAllBurned] = useState<number>(0);

    useEffect(() => {
        const burnedAll = burnedArray?.reduce(
            (acc, item) => acc + item.sum,
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
        {
            title: "All Calories Consumed",
            quantity: allConsumed,
            icon: cutlery,
            unit: "Kcal",
        },
        {
            title: "All Calories Burned",
            quantity: allBurned,
            icon: kcal,
            unit: "Kcal",
        },
    ];

    return (
        <div className="bg-bgLight max-lg:w-screen text-darkText px-10 py-7 h-full">
            <div className="flex gap-3 mb-10 justify-start items-baseline">
                <img className="w-10" src={ranking} alt="ranking" />
                <h1 className="text-2xl font-josefin whitespace-nowrap">
                    Your Activities
                </h1>
            </div>

            <ActivityCard props={infoArray}>
                grid grid-cols-2 space-y-3 gap-3 flex flex-col gap-4
            </ActivityCard>
        </div>
    );
};

export default ActivityOverview;
