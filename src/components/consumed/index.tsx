import { useContext, useEffect, useState } from "react";
import ConsumedBox from "./components/ConsumedBox";
import { TbMeat } from "react-icons/tb";
import { GiFat } from "react-icons/gi";
import { GiSlicedBread } from "react-icons/gi";
import { IoIosWater } from "react-icons/io";
import { Context } from "../../App";
import { AppContextType, ConsumedBoxProps } from "../../types";
const index = () => {
    const { consumedArray } = useContext<AppContextType>(Context);
    const [proteinSum, setProteinSum] = useState<number>(0);
    const [carbsSum, setCarbsSum] = useState<number>(0);
    const [fatSum, setFatSum] = useState<number>(0);

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

            setProteinSum(totalProtein);
            setCarbsSum(totalCarbs);
            setFatSum(totalFat);
        }
    }, [consumedArray]);

    const consumedInfo: ConsumedBoxProps = [
        { title: "Protein", quantity: proteinSum, icon: <TbMeat /> },
        { title: "Carbs", quantity: carbsSum, icon: <GiSlicedBread /> },
        { title: "Fat", quantity: fatSum, icon: <GiFat /> },
        { title: "Water", quantity: 15 / 4, icon: <IoIosWater /> },
    ];

    return (
        <div className="">
            <ConsumedBox consumedInfo={consumedInfo} />
        </div>
    );
};

export default index;
