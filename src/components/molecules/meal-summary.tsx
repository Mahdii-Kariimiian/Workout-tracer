import { useContext, useEffect, useState } from "react";
import MealInfoCard from "../atoms/meal-info-card";
import { Context } from "../../context/context-provider";
import { AppContextType, ConsumedBoxProps } from "../../types";
import meat from "../../../public/icons/meat.png";
import lipid from "../../../public/icons/lipid.png";
import waterBottle from "../../../public/icons/water-bottle.png";
import food from "../../../public/icons/food.png";

const MealSummary = () => {
    // States
    const { consumedArray } = useContext<AppContextType>(Context);
    const [proteinSum, setProteinSum] = useState<number>(0);
    const [carbsSum, setCarbsSum] = useState<number>(0);
    const [fatSum, setFatSum] = useState<number>(0);
    const [waterSum, setWaterSum] = useState<number>(0);

    // Calculate sum of inputs
    useEffect(() => {
        if (consumedArray && consumedArray.length > 0) {
            const totalProtein = consumedArray.reduce(
                (acc, item) => acc + item.protein,
                0
            );
            const totalCarbs = consumedArray.reduce(
                (acc, item) => acc + item.carbs,
                0
            );
            const totalFat = consumedArray.reduce(
                (acc, item) => acc + item.fat,
                0
            );
            const totalWater = consumedArray.reduce(
                (acc, item) => acc + item.water,
                0
            );

            setProteinSum(totalProtein);
            setCarbsSum(totalCarbs);
            setFatSum(totalFat);
            setWaterSum(totalWater);
        } else {
            setProteinSum(0);
            setCarbsSum(0);
            setFatSum(0);
            setWaterSum(0);
        }
    }, [consumedArray]);

    // Array to send for NutrientFood component
    const consumedInfo: ConsumedBoxProps = [
        { title: "Protein", quantity: proteinSum, icon: meat, unit: "gr" },
        { title: "Carbs", quantity: carbsSum, icon: food, unit: "gr" },
        { title: "Fat", quantity: fatSum, icon: lipid, unit: "gr" },
        { title: "Water", quantity: waterSum, icon: waterBottle, unit: "L" },
    ];

    return (
        <div className="h-full">
            <MealInfoCard props={consumedInfo}>
                grid grid-cols-2 text-darkText overflow-hidden h-full
            </MealInfoCard>
        </div>
    );
};

export default MealSummary;
