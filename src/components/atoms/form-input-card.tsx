import React from "react";
import { InputCardProps } from "../../types";

type PropsType = { props: InputCardProps };

const FormInputCard: React.FC<PropsType> = ({ props }) => {
    return (
        <div
            className={`${
                props.length > 5
                    ? "grid grid-cols-2 gap-x-5"
                    : "flex flex-col items-stretch"
            }`}
        >
            {props.map((item, index) => {
                return (
                    <div className="flex flex-col gap-1" key={index}>
                        <label className="mb-1" htmlFor={item.label}>
                            {item.label}
                        </label>
                        {item.options ? (
                            <select
                                className="mb-3 text-darkText p-2 bg-white"
                                name={item.label}
                                id={item.label}
                                value={item.state}
                                onChange={(e) =>
                                    item.setStringState?.(e.target.value)
                                }
                            >
                                {item.options.map((option, optionIndex) => (
                                    <option key={optionIndex} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                        ) : (
                            <input
                                className="mb-3 text-darkText p-1"
                                onChange={(e) =>
                                    typeof item.state === "number"
                                        ? item.setNumberState?.(
                                              parseFloat(e.target.value) || 0
                                          )
                                        : item.setStringState?.(e.target.value)
                                }
                                value={item.state}
                                type={
                                    typeof item.state === "number"
                                        ? "number"
                                        : "text"
                                }
                                name={item.label}
                                id={item.label}
                                placeholder={item.label}
                            />
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default FormInputCard;
