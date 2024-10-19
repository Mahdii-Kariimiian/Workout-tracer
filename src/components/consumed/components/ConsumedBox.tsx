import React, { useContext } from "react";
import { ConsumedBoxProps } from "../../../types";
import { Context } from "../../../App";

const ConsumedBox: React.FC<{ consumedInfo: ConsumedBoxProps }> = ({
    consumedInfo,
}) => {
    const { isLogged } = useContext(Context);
    return (
        <div className="grid grid-cols-2 border border-sky-800 text-white">
            {consumedInfo.map((item, index) => (
                <div
                    key={index}
                    className={`p-3 ${
                        index === 0 || index === 3 ? "bg-sky-900" : "bg-sky-950"
                    }`}
                >
                    <p className="text-4xl flex justify-end">{item.icon}</p>
                    <p className="text-gray-400 text-lg font-agdasima">
                        {item.title}
                    </p>
                    <p className="font-josefin text-xl">
                        {isLogged ? item.quantity : "-"}{" "}
                        {item.title === "Water" ? "L" : "gr"}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default ConsumedBox;
