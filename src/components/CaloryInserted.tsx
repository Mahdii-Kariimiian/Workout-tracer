import { useContext, useRef } from "react";
import InsertMeal from "./InsertMeal";
import { Context } from "../App";
import { ConsumedArray } from "../types";
import { FaBowlFood } from "react-icons/fa6";
import useClickOutsideProps from "../components/customHooks/useClickOutside";

const CaloryInserted = () => {
    const { isModal, setIsModal, consumedArray, setIsModalExercise } =
        useContext(Context);

    const modalRef = useRef<HTMLDivElement>(null);

    useClickOutsideProps({ ref: modalRef, setState: setIsModal });

    return (
        <div className="p-10 max-sm:h-96 text-darkText h-full flex flex-col bg-bgLight ">
            <div className="flex justify-between gap-5 items-end mb-5">
                <div className="flex gap-2 text-2xl font-josefin">
                    <FaBowlFood />
                    <h1>Meals</h1>
                </div>
                <button
                    className={
                        "bg-primary text-lightText px-3 py-2 rounded-sm uppercase hover:bg-bgHover hover:transition-all hover:ease-in"
                    }
                    onClick={() => {
                        setIsModal?.(!isModal);
                        setIsModalExercise?.(false);
                    }}
                >
                    Add New Meal
                </button>
            </div>
            <div className="overflow-y-auto h-full overflow-x-hidden w-full pr-5">
                {consumedArray.map((meal: ConsumedArray, index: number) => {
                    return (
                        <div
                            key={index}
                            className="border border-darkText rounded-lg px-5 py-3 mb-2"
                        >
                            <p className="text-lg font-josefin">{meal.name}</p>
                            <div className="flex gap-5 justify-between text-xl font-agdasima">
                                <div>
                                    <p>Carbs</p>
                                    <p className="font-josefin whitespace-nowrap">
                                        {meal.carbs} gr
                                    </p>
                                </div>
                                <div>
                                    <p>Fat</p>
                                    <p className="font-josefin whitespace-nowrap">
                                        {meal.fat} gr
                                    </p>
                                </div>
                                <div>
                                    <p>Protein</p>
                                    <p className="font-josefin whitespace-nowrap">
                                        {meal.protein} gr
                                    </p>
                                </div>
                                <div>
                                    <p>Sum</p>
                                    <p className="font-josefin whitespace-nowrap">
                                        {meal.sum} gr
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {isModal && (
                <div>
                    <div className="z-0 absolute inset-0 bg-black opacity-90"></div>
                    <div
                        ref={modalRef}
                        className="absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%]"
                    >
                        <InsertMeal />
                    </div>
                </div>
            )}
        </div>
    );
};

export default CaloryInserted;
