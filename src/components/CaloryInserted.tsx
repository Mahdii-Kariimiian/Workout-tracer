import { useContext } from "react";
import InsertMeal from "./InsertMeal";
import { Context } from "../App";
import { ConsumedArray } from "../types";

const CaloryInserted = () => {
    const { isModal, setIsModal, consumedArray, setIsModalExercise } =
        useContext(Context);
    console.log(consumedArray);
    return (
        <div className="p-3 space-y-2 bg-zinc-200">
            {consumedArray &&
                consumedArray.map((meal: ConsumedArray, index: number) => {
                    return (
                        <div key={index} className="bg-sky-900 text-white p-3 ">
                            <p>{meal.name}</p>
                            <div className="flex gap-2 justify-between">
                                <p>carbs: {meal.carbs} gr</p>
                                <p>protein: {meal.protein} gr</p>
                                <p>fat: {meal.fat} gr</p>
                                <p>sum: {meal.sum} gr</p>
                            </div>
                        </div>
                    );
                })}
            <button
                className="bg-sky-950 text-white p-3"
                onClick={() => {
                    setIsModal?.(!isModal);
                    setIsModalExercise?.(false);
                }}
            >
                Enter Your Meal
            </button>

            {isModal && (
                <div className="absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%]">
                    <InsertMeal />
                </div>
            )}
        </div>
    );
};

export default CaloryInserted;
