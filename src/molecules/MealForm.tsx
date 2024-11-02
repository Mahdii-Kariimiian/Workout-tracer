import { useContext, useEffect, useState } from "react";
import { Context } from "../App";
import { AppContextType, ConsumedArray } from "../types";
import FormInputCard from "../atoms/FormInputCard";

const MealForm = ({ selectedItem }: { selectedItem?: ConsumedArray }) => {
    // Context
    const { setIsModal, setConsumedArray } =
        useContext<AppContextType>(Context);
    // States
    const [name, setName] = useState<string>(selectedItem?.name || "");
    const [carbs, setCarbs] = useState<number>(selectedItem?.carbs || 0);
    const [protein, setProtein] = useState<number>(selectedItem?.protein || 0);
    const [fat, setFat] = useState<number>(selectedItem?.fat || 0);
    const [water, setWater] = useState<number>(selectedItem?.water || 0);

    // For checking Empty Input
    const [isEmptyInput, setIsEmptyInput] = useState<boolean>(() => {
        return selectedItem ? false : true;
    });
    // Put values for update mode
    useEffect(() => {
        if (selectedItem) {
            setName(selectedItem.name);
            setCarbs(selectedItem.carbs);
            setProtein(selectedItem.protein);
            setFat(selectedItem.fat);
            setWater(selectedItem.water);
        }
    }, [selectedItem]);

    const inputArrays = [
        { label: "carbs", state: carbs, setNumberState: setCarbs },
        { label: "protein", state: protein, setNumberState: setProtein },
        { label: "fat", state: fat, setNumberState: setFat },
        { label: "water", state: water, setNumberState: setWater },
    ];

    const handleSubmit = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        setIsModal(false);

        const sum = protein + fat + carbs;

        if (selectedItem) {
            setConsumedArray?.((prev) =>
                prev.map((item) =>
                    item === selectedItem
                        ? {
                              ...item,
                              name,
                              carbs,
                              protein,
                              fat,
                              water,
                              sum,
                          }
                        : item
                )
            );
        } else {
            setConsumedArray?.((prev) => [
                ...prev,
                {
                    name,
                    carbs,
                    protein,
                    fat,
                    water,
                    sum,
                    date: new Date().toLocaleDateString(),
                },
            ]);
        }
    };

    return (
        <div className="z-10 p-10 bg-bgLight rounded-lg font-josefin text-darkText">
            <form noValidate className="flex flex-col">
                <div className="flex gap-4 justify-between">
                    <label className="mb-1" htmlFor="meal">
                        Meal
                    </label>
                    {isEmptyInput && (
                        <p className="text-sm text-red-600">
                            Please insert the name
                        </p>
                    )}
                </div>

                <input
                    className="mb-3 text-darkText p-1"
                    onChange={(e) => {
                        setIsEmptyInput(!e.target.value.trim());
                        setName(e.target.value);
                    }}
                    value={name}
                    type="text"
                    name="meal"
                    id="meal"
                    placeholder="Enter your meal"
                    required
                />

                <FormInputCard props={inputArrays}></FormInputCard>

                <button
                    className="bg-primary text-white px-3 py-2 rounded-sm hover:bg-bgHover hover:transition-all hover:ease-in"
                    onClick={(e) => {
                        e.preventDefault();
                        !isEmptyInput && handleSubmit(e);
                    }}
                >
                    {selectedItem ? "Update Meal" : "Add Meal"}
                </button>
            </form>
        </div>
    );
};

export default MealForm;
