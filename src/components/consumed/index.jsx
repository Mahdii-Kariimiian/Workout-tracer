import ConsumedBox from "../consumed/components/ConsumedBox";
import { TbMeat } from "react-icons/tb";
import { GiFat } from "react-icons/gi";
import { GiSlicedBread } from "react-icons/gi";
import { IoIosWater } from "react-icons/io";

const index = () => {
    const consumedArray = [
        { title: "Protein", quantity: 15 / 4, icon: <TbMeat /> },
        { title: "Carbs", quantity: 15 / 4, icon: <GiSlicedBread /> },
        { title: "Fat", quantity: 15 / 4, icon: <GiFat /> },
        { title: "Water", quantity: 15 / 4, icon: <IoIosWater /> },
    ];

    return (
        <div className="">
            <ConsumedBox consumedArray={consumedArray} />
        </div>
    );
};

export default index;
