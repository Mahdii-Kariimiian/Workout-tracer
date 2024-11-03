import React from "react";
import { InfoDisplayProps } from "../types";
type PropsType = {
    props: InfoDisplayProps;
};

const InfoDisplay: React.FC<PropsType> = ({ props }) => {
    return (
        <div
            className={`${
                props.length > 5
                    ? "grid grid-cols-2 gap-1"
                    : "flex gap-2 justify-between"
            }`}
        >
            {props.map((item, index) => {
                return (
                    <div key={index}>
                        <p>{item.name}</p>
                        <p className="font-josefin whitespace-nowrap font-bold">
                            {item.val} {item?.unit}
                        </p>
                    </div>
                );
            })}
        </div>
    );
};

export default InfoDisplay;
