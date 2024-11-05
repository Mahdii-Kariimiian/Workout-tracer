import React from "react";
import { ConsumedItems } from "../../types";

type ActivityCardProps = {
    props: ConsumedItems[];
    children: string;
};

const ActivityCard: React.FC<ActivityCardProps> = ({ props, children }) => {
    return (
        <div className={children}>
            {props.map((item, index) => (
                <div
                    key={index}
                    className="flex gap-4 items-center min-w-[50%]"
                >
                    <img className="w-8" src={item.icon} alt={item.icon} />

                    <div className="space-y-1">
                        <h2 className="text-lg font-agdasima">{item.title}</h2>
                        <p className="text-xl font-josefin">
                            {item.quantity} {item.unit}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ActivityCard;
