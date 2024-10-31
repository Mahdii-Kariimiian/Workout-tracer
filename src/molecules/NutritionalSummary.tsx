import { useContext, useEffect, useState } from "react";
import NutrientInfoCard from "../atoms/NutrientInfoCard";
import { TbMeat } from "react-icons/tb";
import { GiFat } from "react-icons/gi";
import { GiSlicedBread } from "react-icons/gi";
import { IoIosWater } from "react-icons/io";
import { Context } from "../App";
import { AppContextType, ConsumedBoxProps } from "../types";
import meat from "../../public/icons/meat.png";
import lipid from "../../public/icons/lipid.png";
import waterBottle from "../../public/icons/water-bottle.png";
import food from "../../public/icons/food.png";

const NutritionalSummary = () => {
    const { consumedArray } = useContext<AppContextType>(Context);
    const [proteinSum, setProteinSum] = useState<number>(0);
    const [carbsSum, setCarbsSum] = useState<number>(0);
    const [fatSum, setFatSum] = useState<number>(0);
    const [waterSum, setWaterSum] = useState<number>(0);

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
        }
    }, [consumedArray]);

    const consumedInfo: ConsumedBoxProps = [
        { title: "Protein", quantity: proteinSum, icon: meat },
        { title: "Carbs", quantity: carbsSum, icon: food },
        { title: "Fat", quantity: fatSum, icon: lipid },
        { title: "Water", quantity: waterSum, icon: waterBottle },
    ];

    return (
        <div className="h-full">
            <NutrientInfoCard props={consumedInfo}>
                grid grid-cols-2 text-darkText overflow-hidden h-full
            </NutrientInfoCard>
        </div>
    );
};

export default NutritionalSummary;
