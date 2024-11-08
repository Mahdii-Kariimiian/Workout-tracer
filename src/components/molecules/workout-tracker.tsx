import { useContext } from "react";
import { Link } from "react-router-dom";
import exercise from "../../../public/icons/exercise.png";
import { ActivityContext } from "../../context/activity-provider";
import { Context } from "../../context/context-provider";
import RecordCard from "./record-card";
const WorkoutTracker = () => {
    // Context
    const { burnedArray } = useContext(Context);
    //Activity Context
    const activityContext = useContext(ActivityContext);
    // Check if context is undefined
    if (!activityContext) {
        throw new Error(
            "ActivityContext must be used within an ActivityProvider"
        );
    }
    const { handleEditWorkout, handleRemoveWorkout } = activityContext;

    return (
        <div className="bg-bgLight max-sm:h-96 px-10 py-7 text-darkText h-full flex flex-col pb-2">
            <div className="flex justify-between gap-5 items-end mb-5">
                <div className="text-2xl font-josefin text-darkText flex gap-2">
                    <div className="flex items-baseline gap-2">
                        <img className="w-9" src={exercise} alt="exercise" />
                        <h1>Workouts</h1>
                    </div>
                </div>
                <Link
                    to={"/workout/form"}
                    className="bg-primary text-white px-3 py-2 rounded-sm uppercase whitespace-nowrap hover:bg-bgHover hover:transition-all hover:ease-in"
                >
                    Add New Workout
                </Link>
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
                        <RecordCard
                            data={inputArrays}
                            key={index}
                            handleEdit={() => handleEditWorkout(index)}
                            handleRemove={() => handleRemoveWorkout(index)}
                            date={item.date}
                            title={item.name}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default WorkoutTracker;
