import { useContext, useState } from "react";
import { Context } from "../App";
import { AppContextType } from "../types";

const InsertMeal = () => {
    const { setIsModal, setConsumedArray } =
        useContext<AppContextType>(Context);
    const [name, setName] = useState<string>("");
    const [carbs, setCarbs] = useState<number>(0);
    const [protein, setProtein] = useState<number>(0);
    const [fat, setFat] = useState<number>(0);
    const [water, setWater] = useState<number>(0);

    const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        e.preventDefault();
        setIsModal?.(false);
        const sum = protein + fat + carbs;
        setConsumedArray?.((prev) => [
            ...prev,
            {
                name: name,
                carbs: carbs,
                protein: protein,
                fat: fat,
                sum: sum,
                water: water,
            },
        ]);
    };
    return (
        <div className="p-10 bg-sky-700 rounded-lg font-josefin text-white">
            <form noValidate className="flex flex-col">
                <label className="mb-1" htmlFor="meal">
                    Meal
                </label>
                <input
                    className="mb-3 text-black p-1"
                    onChange={(e) => setName(e.target.value)}
                    value={name as string}
                    type="text"
                    name="meal"
                    id="meal"
                    placeholder="Enter your meal"
                />
                <label className="mb-1" htmlFor="protein">
                    Protein
                </label>
                <input
                    className="mb-3 text-black p-1"
                    required
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
                    className="mb-3 text-black p-1"
                    onChange={(e) => setCarbs(parseFloat(e.target.value))}
                    value={carbs}
                    type="number"
                    name="carbs"
                    id="carbs"
                    placeholder="carbs"
                />
                <label htmlFor="fat">Fat</label>
                <input
                    className="mb-3 text-black p-1"
                    onChange={(e) => setFat(parseFloat(e.target.value))}
                    value={fat}
                    type="number"
                    name="fat"
                    id="fat"
                    placeholder="fat"
                />
                <label htmlFor="water">Water</label>
                <input
                    className="mb-7 p-1 text-black"
                    onChange={(e) => setWater(parseFloat(e.target.value))}
                    value={water}
                    type="number"
                    name="water"
                    id="water"
                    placeholder="water"
                />
                <button
                    className="bg-sky-950 text-white px-3 py-1 rounded-sm"
                    onClick={(e) => handleClick(e)}
                >
                    submit
                </button>
            </form>
        </div>
    );
};

export default InsertMeal;
