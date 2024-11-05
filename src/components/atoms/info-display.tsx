import React from "react";

interface InfoDisplayProps {
    props?: { name: string; val: number; unit: string }[];
}

const InfoDisplay: React.FC<InfoDisplayProps> = ({ props = [] }) => {
    return (
        <div className="flex justify-between p-2">
            {props.map((item, index) => (
                <div key={index}>
                    <p>{item.name}</p>
                    <p>
                        {item.val} {item.unit}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default InfoDisplay;
