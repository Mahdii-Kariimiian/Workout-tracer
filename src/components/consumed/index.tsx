import { useContext } from "react";
import ConsumedBox from "./components/ConsumedBox";
import { TbMeat } from "react-icons/tb";
import { GiFat } from "react-icons/gi";
import { GiSlicedBread } from "react-icons/gi";
import { IoIosWater } from "react-icons/io";
import { Context } from "../../App";
import { AppContextType, ConsumedBoxProps } from "../../types";
const index = () => {
    const consumedInfo: ConsumedBoxProps = [
        { title: "Protein", quantity: 15 / 4, icon: <TbMeat /> },
        { title: "Carbs", quantity: 15 / 4, icon: <GiSlicedBread /> },
        { title: "Fat", quantity: 15 / 4, icon: <GiFat /> },
        { title: "Water", quantity: 15 / 4, icon: <IoIosWater /> },
    ];
    const { consumedArray } = useContext<AppContextType>(Context);

    return (
        <div className="">
            <ConsumedBox consumedInfo={consumedInfo} />
        </div>
    );
};

export default index;
