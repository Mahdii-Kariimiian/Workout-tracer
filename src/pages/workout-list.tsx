import { useContext } from "react";
import RecordCard from "../components/molecules/record-card";
import { Context } from "../context/context-provider";
import LineGraph from "../charts/line";
import { ActivityContext } from "../context/activity-provider";
import { Link } from "react-router-dom";

const WorkoutList = () => {
    const { burnedArray } = useContext(Context);
    const { handleEditWorkout, handleRemoveWorkout } =
        useContext(ActivityContext) ?? {};

    return (
        <div className="p-10 bg-bgLightGradient">
            <div className="flex justify-between mb-5">
                <h1 className="text-3xl font-agdasima">Workouts</h1>
                <Link
                    to="/workout/form"
                    className="bg-primary text-lightText ml-auto mr-5 px-3 py-2 rounded-md uppercase hover:bg-bgHover transition-all hover:ease-in"
                >
                    Add New Workout
                </Link>
                <Link
                    className="bg-primary text-lightText px-3 py-2 rounded-md uppercase hover:bg-bgHover transition-all hover:ease-in"
                    to="/"
                >
                    Back
                </Link>
            </div>

            <div className="my-9 max-w-[1000px]">
                <LineGraph array={burnedArray} />
            </div>

            <div className="grid grid-cols-2 gap-5">
                {burnedArray.map((workout, index) => {
                    return (
                        <RecordCard
                            key={index}
                            handleEdit={() => handleEditWorkout(index)}
                            handleRemove={() => handleRemoveWorkout(index)}
                            data={[
                                {
                                    name: "Duration",
                                    val: workout.duration,
                                    unit: "min",
                                },
                                {
                                    name: "Category",
                                    val: workout.categoryName,
                                },
                                { name: "Comment", val: workout.comment },
                                {
                                    name: "Calories Burned",
                                    val: workout.sum,
                                    unit: "Kcal",
                                },
                                {
                                    name: "Set",
                                    val: workout.sets,
                                },
                                {
                                    name: "Number of Sets",
                                    val: workout.nums,
                                },
                                {
                                    name: "Heart Rate",
                                    val: workout.heartRate,
                                    unit: "Kcal",
                                },
                            ]}
                            title={workout.name}
                            date={workout.date}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default WorkoutList;
