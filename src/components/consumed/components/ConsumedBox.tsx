import { TbMeat } from "react-icons/tb";

const ConsumedBox = () => {
    return (
        <div className="bg-sky-950 p-3 border border-sky-800 text-white">
            <TbMeat />
            <p>Protein</p>
            <p>15/40g</p>
        </div>
    );
};

export default ConsumedBox;
