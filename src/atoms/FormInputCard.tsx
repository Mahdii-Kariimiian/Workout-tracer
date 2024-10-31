import React from "react";
import { InputCardProps } from "../types";

type PropsType = { props: InputCardProps };

const InputCard: React.FC<PropsType> = ({ props }) => {
    return (
        <div className="flex flex-col items-stretch">
            {props.map((item, index) => {
                return (
                    <div className="flex flex-col gap-1" key={index}>
                        <label className="mb-1" htmlFor={item.label}>
                            {item.label}
                        </label>
                        <input
                            className="mb-3 text-darkText p-1"
                            onChange={(e) =>
                                item.setState(parseFloat(e.target.value))
                            }
                            value={item.state}
                            type="number"
                            name={item.label}
                            id={item.label}
                            placeholder={item.label}
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default InputCard;
