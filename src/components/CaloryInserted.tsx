import { useContext, useRef, useState } from "react";
import InsertMeal from "./InsertMeal";
import { Context } from "../App";
import { ConsumedArray } from "../types";
import { FaBowlFood } from "react-icons/fa6";
import { CiSquareRemove } from "react-icons/ci";
import useClickOutside from "../components/customHooks/useClickOutside";

const CaloryInserted = () => {
    const {
        isModal,
        setIsModal,
        consumedArray,
        setConsumedArray,
        setIsModalExercise,
    } = useContext(Context);

    const [selectedItem, setSelectedItem] = useState<ConsumedArray>();

    const modalRef = useRef<HTMLDivElement>(null);

    // Custom Hook for closing modal by clicking anywhere on the window
    useClickOutside({ ref: modalRef, setState: setIsModal });

    const handleRemoveItem = (i: number) => {
        setConsumedArray(consumedArray.filter((item, index) => i !== index));
    };

    const handleEdit = (meal: ConsumedArray) => {
        setSelectedItem(meal);
        setIsModal?.(true);
    };

    return (
        <div className="p-10 max-sm:h-96 text-lightText h-full flex flex-col bg-gradientPrimary ">
            <div className="flex justify-between gap-5 items-end mb-5">
                <div className="flex gap-2 text-2xl font-josefin">
                    <FaBowlFood />
                    <h1>Meals</h1>
                </div>
                <button
                    className={
                        "bg-bgLight text-darkText px-3 py-2 rounded-sm uppercase hover:bg-bgHover hover:text-lightText hover:transition-all hover:ease-in"
                    }
                    onClick={() => {
                        setSelectedItem(undefined);
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
                            className="border border-lightText rounded-lg px-5 py-3 mb-2 hover:bg-bgHover hover:transition-all hover:ease-in cursor-pointer"
                            onClick={() => handleEdit(meal)}
                        >
                            <div className="flex gap-3 items-baseline">
                                <p className="text-xl font-josefin">
                                    {meal.name}
                                </p>
                                <p className="text-[12px] font-josefin">
                                    {meal.date}
                                </p>
                                <div
                                    className="ml-auto hover:bg-red-600 rounded-sm cursor-pointer hover:transition-all hover:ease-in"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleRemoveItem(index);
                                    }}
                                >
                                    <CiSquareRemove className="text-2xl " />
                                </div>
                            </div>
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
                        <InsertMeal selectedItem={selectedItem} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default CaloryInserted;
