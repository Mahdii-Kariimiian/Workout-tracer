import { useContext, useRef, useState } from "react";
import { CiSquareRemove } from "react-icons/ci";
import exercise from "../../../public/icons/exercise.png";
import { ActivityContext } from "../../context/activity-provider";
import { Context } from "../../context/context-provider";
import useClickOutside from "../../customHooks/use-click-outside";
import { BurnedArray } from "../../types";
import InfoDisplay from "../atoms/info-display";
import WorkoutForm from "./workout-form";
const WorkoutTracker = () => {
    // Context
    const { burnedArray, setIsModal, setIsModalExercise, isModalExercise } =
        useContext(Context);
    //Activity Context
    const activityContext = useContext(ActivityContext);
    // Check if context is undefined
    if (!activityContext) {
        throw new Error(
            "ActivityContext must be used within an ActivityProvider"
        );
    }
    const { handleEditWorkout, handleRemoveWorkout } = activityContext;

    //State
    const [selectedItem, setSelectedItem] = useState<BurnedArray>();

    const modalRef = useRef<HTMLDivElement>(null);

    useClickOutside({ ref: modalRef, setState: setIsModalExercise });

    return (
        <div className="bg-bgLight max-sm:h-96 px-10 py-7 text-darkText h-full flex flex-col pb-2">
            <div className="flex justify-between gap-5 items-end mb-5">
                <div className="text-2xl font-josefin text-darkText flex gap-2">
                    <div className="flex items-baseline gap-2">
                        <img className="w-9" src={exercise} alt="exercise" />
                        <h1>Workouts</h1>
                    </div>
                </div>
                <button
                    onClick={() => {
                        setSelectedItem(undefined);
                        setIsModal(false);
                        setIsModalExercise(!isModalExercise);
                    }}
                    className="bg-primary text-white px-3 py-2 rounded-sm uppercase whitespace-nowrap hover:bg-bgHover hover:transition-all hover:ease-in"
                >
                    Add New Workout
                </button>
            </div>

            <div className="flex-1 overflow-y-auto pr-5">
                {burnedArray.map((item, index) => {
                    const inputArrays = [
                        { name: "Category", val: item.categoryName },
                        {
                            name: "Calories Burned",
                            val: item.sum,
                            unit: "Kcal",
                        },
                        {
                            name: "Heart Rate",
                            val: item.heartRate,
                            unit: "Rpm",
                        },
                        { name: "Duration", val: item.duration, unit: "min" },
                        { name: "Comment", val: item.comment },
                        { name: "Number of Sets", val: item.nums },
                        { name: "Sets", val: item.sets },
                        { name: "Weight", val: item.weight, unit: "Kg" },
                    ];

                    return (
                        <div
                            key={index}
                            className="border border-bgHover px-5 py-3 mb-2 rounded-lg cursor-pointer hover:bg-bgHover hover:text-lightText hover:transition-all hover:ease-in"
                            onClick={() => handleEditWorkout(index)}
                        >
                            <div className="flex gap-3 items-baseline mb-2">
                                <p className="text-xl font-josefin">
                                    {item.name}
                                </p>
                                <p className="text-[12px] font-josefin">
                                    {item.date}
                                </p>
                                <div
                                    className="ml-auto hover:bg-red-600 rounded-sm cursor-pointer hover:transition-all hover:ease-in"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleRemoveWorkout(index);
                                    }}
                                >
                                    <CiSquareRemove className="text-2xl" />
                                </div>
                            </div>
                            <InfoDisplay props={inputArrays} />
                        </div>
                    );
                })}
            </div>

            {isModalExercise && (
                <div>
                    <div className="z-0 absolute inset-0 bg-black opacity-90"></div>
                    <div
                        ref={modalRef}
                        className="absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%]"
                    >
                        <WorkoutForm selectedItem={selectedItem} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default WorkoutTracker;
