import { useContext, useState } from "react";
import { Context } from "../App";

type InsertMealTypes = {
    setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
    name: string;
    setName: React.Dispatch<React.SetStateAction<number | null>>;
    protein: number;
    setProtein: React.Dispatch<React.SetStateAction<number | null>>;
    fat: number;
    setFat: React.Dispatch<React.SetStateAction<number | null>>;
    sum: number;
    setSum: React.Dispatch<React.SetStateAction<number | null>>;
    carbs: number;
    setCarbs: React.Dispatch<React.SetStateAction<number | null>>;
};

const InsertMeal = () => {
    const {
        setIsModal,
        name,
        setName,
        protein,
        setProtein,
        fat,
        setFat,
        sum,
        setSum,
        carbs,
        setCarbs,
    } = useContext<InsertMealTypes>(Context);

    return (
        <div className="p-10 bg-blue-500">
            <form noValidate action="" className="flex flex-col gap-3">
                <label htmlFor="meal">Meal</label>
                <input
                    onChange={(e) => setName(e.target.value)}
                    value={name as string}
                    type="text"
                    name="meal"
                    id="meal"
                    placeholder="meal"
                />
                <label htmlFor="protein">Protein</label>
                <input
                    onChange={(e) => setProtein(e.target.value)}
                    value={protein as number}
                    type="number"
                    name="protein"
                    id="protein"
                    placeholder="protein"
                />
                <label htmlFor="carbs">Carbs</label>
                <input
                    onChange={(e) => setCarbs(e.target.value)}
                    value={carbs as number}
                    type="number"
                    name="carbs"
                    id="carbs"
                    placeholder="carbs"
                />
                <label htmlFor="fat">Fat</label>
                <input
                    onChange={(e) => setFat(e.target.value)}
                    value={fat as number}
                    type="number"
                    name="fat"
                    id="fat"
                    placeholder="fat"
                />
                <label htmlFor="sum">Sum</label>
                <input type="text" name="sum" id="sum" placeholder="sum" />
                <button onClick={() => setIsModal(false)}>submit</button>
            </form>
        </div>
    );
};

export default InsertMeal;
