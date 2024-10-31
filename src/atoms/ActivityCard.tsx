import React from "react";
import { ConsumedItems } from "../types";

type MainCardProps = {
    props: ConsumedItems[];
    children: string;
};

const MainCard: React.FC<MainCardProps> = ({ props, children }) => {
    return (
        <div className={children}>
            {props.map((item, index) => (
                <div
                    key={index}
                    className="flex gap-4 items-center min-w-[50%]"
                >
                    <img className="w-8" src={item.icon} alt={item.icon} />

                    <div>
                        <h2 className="text-lg font-agdasima">{item.title}</h2>
                        <p className="text-xl font-josefin">
                            {item.quantity} km
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MainCard;
