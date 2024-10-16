import React from "react";
import { ConsumedBoxProps } from "../../../types";

const ConsumedBox: React.FC<{ consumedInfo: ConsumedBoxProps }> = ({ consumedInfo }) => {
    return (
        <div className="grid grid-cols-2 border border-sky-800 text-white">
            {consumedInfo.map((item, index) => (
                <div
                    key={index}
                    className={`px-3 py-4 ${
                        index === 0 || index === 3 ? "bg-sky-900" : "bg-sky-950"
                    }`}
                >
                    <p className="text-4xl flex justify-end">{item.icon}</p>
                    <p className="text-gray-400">{item.title}</p>
                    <p className="text-lg">
                        {item.quantity} {item.title === "Water" ? "L" : "gr"}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default ConsumedBox;
