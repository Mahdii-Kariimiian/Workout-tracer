import { useContext } from "react";
import InsertMeal from "./InsertMeal";
import { Context } from "../App";
import { ConsumedArray } from "../types";
import { FaBowlFood } from "react-icons/fa6";

const CaloryInserted = () => {
    const { isModal, setIsModal, consumedArray, setIsModalExercise, isLogged } =
        useContext(Context);

    return (
        <div className="p-3 space-y-2 bg-gray-200 h-full flex flex-col">
            <div className="flex justify-between gap-5">
                <div className="mb-2 flex gap-2 text-2xl font-josefin text-sky-950">
                    <FaBowlFood />
                    <h1>Meals</h1>
                </div>
                <button
                    className={`${
                        isLogged
                            ? "bg-sky-950"
                            : "bg-gray-400 hover:cursor-not-allowed"
                    } text-white px-3 py-1 rounded-sm uppercase`}
                    onClick={() => {
                        setIsModal?.(!isModal);
                        setIsModalExercise?.(false);
                    }}
                >
                    Add New Meal
                </button>
            </div>
            <div className="overflow-y-scroll h-full overflow-x-hidden w-full">
                {isLogged ? (
                    consumedArray.map((meal: ConsumedArray, index: number) => {
                        return (
                            <div
                                key={index}
                                className="bg-sky-900 text-white px-2 py-1 mb-2"
                            >
                                <p className="text-lg font-josefin">
                                    {meal.name}
                                </p>
                                <div className="flex gap-5 justify-between text-xl font-agdasima">
                                    <div>
                                        <p>Carbs</p>
                                        <p className="font-josefin ">
                                            {meal.carbs} gr
                                        </p>
                                    </div>
                                    <div>
                                        <p>Fat</p>
                                        <p className="font-josefin ">
                                            {meal.fat} gr
                                        </p>
                                    </div>
                                    <div>
                                        <p>Protein</p>
                                        <p className="font-josefin ">
                                            {meal.protein} gr
                                        </p>
                                    </div>
                                    <div>
                                        <p>Water</p>
                                        <p className="font-josefin ">
                                            {meal.water} gr
                                        </p>
                                    </div>
                                    <div>
                                        <p>Sum</p>
                                        <p className="font-josefin ">
                                            {meal.sum} gr
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <div className="text-xl text-sky-950 font-josefin">
                        Please log in
                    </div>
                )}
            </div>

            {isModal && (
                <div className="absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%]">
                    <InsertMeal />
                </div>
            )}
        </div>
    );
};

export default CaloryInserted;
