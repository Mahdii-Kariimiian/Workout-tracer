import { useContext, useEffect, useState } from "react";
import { Context } from "../App";
import { AppContextType, ConsumedArray } from "../types";

const InsertMeal = ({ selectedItem }: { selectedItem?: ConsumedArray }) => {
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

                <label className="mb-1" htmlFor="protein">
                    Protein
                </label>
                <input
                    className="mb-3 text-darkText p-1"
                    onChange={(e) => setProtein(parseFloat(e.target.value))}
                    value={protein}
                    type="number"
                    name="protein"
                    id="protein"
                    placeholder="protein"
                />
                <label className="mb-1" htmlFor="carbs">
                    Carbs
                </label>
                <input
                    className="mb-3 text-darkText p-1"
                    onChange={(e) => setCarbs(parseFloat(e.target.value))}
                    value={carbs}
                    type="number"
                    name="carbs"
                    id="carbs"
                    placeholder="carbs"
                />
                <label htmlFor="fat">Fat</label>
                <input
                    className="mb-3 text-darkText p-1"
                    onChange={(e) => setFat(parseFloat(e.target.value))}
                    value={fat}
                    type="number"
                    name="fat"
                    id="fat"
                    placeholder="fat"
                />
                <label htmlFor="water">Water</label>
                <input
                    className="mb-7 p-1 text-darkText"
                    onChange={(e) => setWater(parseFloat(e.target.value))}
                    value={water}
                    type="number"
                    name="water"
                    id="water"
                    placeholder="water"
                />
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

export default InsertMeal;
