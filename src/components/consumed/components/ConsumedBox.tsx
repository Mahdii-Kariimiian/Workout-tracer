import React from "react";
import { ConsumedBoxProps } from "../../../types";

const ConsumedBox: React.FC<{ consumedInfo: ConsumedBoxProps }> = ({
    consumedInfo,
}) => {
    return (
        <div className="grid grid-cols-2 text-lightText overflow-hidden">
            {consumedInfo.map((item, index) => (
                <div
                    key={index}
                    className={`px-10 py-[27.2px] flex justify-between items-center  ${
                        index === 0 || index === 3
                            ? "bg-gradientSecondary"
                            : "bg-gradientPrimary"
                    }`}
                >
                    <div className="space-y-2">
                        <p className="text-lightText text-lg font-agdasima">
                            {item.title}
                        </p>
                        <p className="font-josefin text-xl">
                            {item.quantity}
                            {item.title === "Water" ? "lit" : "gr"}
                        </p>
                    </div>
                    <p className="text-3xl">{item.icon}</p>
                </div>
            ))}
        </div>
    );
};

export default ConsumedBox;
