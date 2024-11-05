import { useState, useContext, useEffect } from "react";
import { Context } from "../../context/context-provider";
import { AppContextType } from "../../types";
import NutrientInfoCard from "../atoms/nutrient-info-card";
import heartRateIcon from "../../../public/icons/heart-rate.png";
import food from "../../../public/icons/food.png";

const ActivitySummary = () => {
    const { burnedArray } = useContext<AppContextType>(Context);

    const [heartRate, setHeartRate] = useState<number>(0);

    useEffect(() => {
        if (burnedArray && burnedArray.length > 0) {
            setHeartRate(burnedArray[burnedArray.length - 1].heartRate);
        }
    }, [burnedArray]);

    const InfoArray = [
        {
            title: "Calories Consumed",
            quantity:
                burnedArray.length > 0
                    ? burnedArray[burnedArray.length - 1].caloriesBurned
                    : 0,
            icon: food,
            unit: "Kcal",
        },
        {
            title: "Heart Rate",
            quantity: burnedArray.length > 0 ? heartRate : 0,
            icon: heartRateIcon,
            unit: "Rpm",
        },
    ];

    return (
        <div className="h-full">
            <NutrientInfoCard props={InfoArray}>
                flex flex-col h-full
            </NutrientInfoCard>
        </div>
    );
};

export default ActivitySummary;
