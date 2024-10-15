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

    const handleClick = (e) => {
        e.preventDefault();
        setIsModal?.(false);
        const sum = protein + fat + carbs;
        setConsumedArray?.((prev) => [
            ...prev,
            { name: name, carbs: carbs, protein: protein, fat: fat, sum: sum },
        ]);
    };
    return (
        <div className="p-10 bg-blue-500">
            <form noValidate action="" className="flex flex-col">
                <label className="mb-1" htmlFor="meal">
                    Meal
                </label>
                <input
                    className="mb-3"
                    onChange={(e) => setName(e.target.value)}
                    value={name as string}
                    type="text"
                    name="meal"
                    id="meal"
                    placeholder="meal"
                />
                <label className="mb-1" htmlFor="protein">
                    Protein
                </label>
                <input
                    className="mb-3"
                    required
                    onChange={(e) => setProtein(parseFloat(e.target.value))}
                    value={protein as number}
                    type="number"
                    name="protein"
                    id="protein"
                    placeholder="protein"
                />
                <label className="mb-1" htmlFor="carbs">
                    Carbs
                </label>
                <input
                    className="mb-3"
                    onChange={(e) => setCarbs(parseFloat(e.target.value))}
                    value={carbs as number}
                    type="number"
                    name="carbs"
                    id="carbs"
                    placeholder="carbs"
                />
                <label htmlFor="fat">Fat</label>
                <input
                    className="mb-7"
                    onChange={(e) => setFat(parseFloat(e.target.value))}
                    value={fat as number}
                    type="number"
                    name="fat"
                    id="fat"
                    placeholder="fat"
                />
                <button
                    className="bg-sky-950 text-white px-3 py-1"
                    onClick={(e) => handleClick(e)}
                >
                    submit
                </button>
            </form>
        </div>
    );
};

export default InsertMeal;
