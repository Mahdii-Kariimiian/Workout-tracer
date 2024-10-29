import { useContext, useRef, useState } from "react";
import { Context } from "../../../App";
import { GrYoga } from "react-icons/gr";
import { CiSquareRemove } from "react-icons/ci";
import InsertExercise from "../../InsertExercise";
import useClickOutside from "../../customHooks/useClickOutside";
import { BurnedArray } from "../../../types";

const ExerciseBox = () => {
    const {
        burnedArray,
        setIsModal,
        setBurnedArray,
        setIsModalExercise,
        isModalExercise,
    } = useContext(Context);

    const [selectedItem, setSelectedItem] = useState<BurnedArray>();

    const handleRemoveItem = (i: number) => {
        setBurnedArray(burnedArray.filter((item, index) => i !== index));
    };

    const modalRef = useRef<HTMLDivElement>(null);

    useClickOutside({ ref: modalRef, setState: setIsModalExercise });

    const handleEdit = (item: BurnedArray) => {
        setSelectedItem(item);
        setIsModalExercise?.(true);
    };

    return (
        <div className="bg-bgLight max-sm:h-96 px-10 py-7 text-darkText h-full flex flex-col pb-2">
            <div className="flex justify-between gap-5 items-end mb-5">
                <div className="text-2xl font-josefin text-darkText flex gap-2">
                    <GrYoga />
                    <h1>Exercises</h1>
                </div>
                <button
                    onClick={() => {
                        setSelectedItem(undefined);
                        setIsModal(false);
                        setIsModalExercise(!isModalExercise);
                    }}
                    className={
                        "bg-primary text-white px-3 py-2 rounded-sm uppercase whitespace-nowrap hover:bg-bgHover hover:transition-all hover:ease-in"
                    }
                >
                    Add New Exercise
                </button>
            </div>

            <div className="flex-1 overflow-y-auto pr-5">
                {burnedArray.map((item, index) => (
                    <div
                        key={index}
                        className="border border-primary px-5 py-3 mb-2 rounded-lg"
                        onClick={() => handleEdit(item)}
                    >
                        <div className="flex gap-3 items-baseline">
                            <p className="text-xl font-josefin">{item.name}</p>
                            <p className="text-[12px] font-josefin">
                                {item.date}
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
                        <div className="flex gap-5 justify-between text-lg font-agdasima">
                            <div>
                                <p>Calories</p>
                                <p className="font-josefin">
                                    {item.caloriesBurned} Kcal
                                </p>
                            </div>
                            <div>
                                <p>Heart Rate</p>
                                <p className="font-josefin">
                                    {item.heartRate} Rpm
                                </p>
                            </div>
                            <div>
                                <p>Distance</p>
                                <p className="font-josefin">
                                    {item.distance} Km
                                </p>
                            </div>
                            <div>
                                <p>Duration</p>
                                <p className="font-josefin">
                                    {item.duration} m
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {isModalExercise && (
                <div>
                    <div className="z-0 absolute inset-0 bg-black opacity-90"></div>
                    <div
                        ref={modalRef}
                        className="absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%]"
                    >
                        <InsertExercise selectedItem={selectedItem} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ExerciseBox;
