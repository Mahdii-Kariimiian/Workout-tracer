import React from "react";
import { NutrientInfoProps } from "../types";
type PropsType = {
    props: NutrientInfoProps;
};

const NutrientInfo: React.FC<PropsType> = ({ props }) => {
    return (
        <div className="flex gap-2 justify-between">
            {props.map((item) => {
                return (
                    <div>
                        <p>{item.name}</p>
                        <p className="font-josefin whitespace-nowrap">
                            {item.nutrient} {item.unit}{" "}
                        </p>
                    </div>
                );
            })}
        </div>
    );
};

export default NutrientInfo;
