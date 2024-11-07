import React from "react";

interface InfoDisplayProps {
    props?: { name: string; val: number | string; unit?: string }[];
}

const InfoDisplay: React.FC<InfoDisplayProps> = ({ props = [] }) => {
    return (
        <div
            className={`${
                props.length < 5
                    ? "flex justify-between gap-2"
                    : "grid grid-cols-2 gap-2"
            }`}
        >
            {props.map((item, index) => (
                <div key={index}>
                    <p className="font-semibold">{item.name}</p>
                    <p>
                        {item.val} {item.unit}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default InfoDisplay;
