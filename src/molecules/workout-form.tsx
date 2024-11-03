import { useState, useContext, useEffect } from "react";
import { Context } from "../context/context-provider";
import { AppContextType, BurnedArray, InputCardProps } from "../types";
import FormInputCard from "../atoms/form-input-card";

const WorkoutForm = ({ selectedItem }: { selectedItem?: BurnedArray }) => {
    // Context
    const { setBurnedArray, setIsModalExercise } =
        useContext<AppContextType>(Context);

    // States
    const [categoryName, setCategoryName] = useState<string>("");
    const [workout, setWorkout] = useState<string>("");
    const [sets, setSets] = useState<number>(0);
    const [nums, setNums] = useState<number>(0);
    const [weight, setWeight] = useState<number>(0);
    const [caloriesBurned, setCaloriesBurned] = useState<number>(0);
    const [duration, setDuration] = useState<number>(0);
    const [heartRate, setHeartRate] = useState<number>(0);
    const [comment, setComment] = useState<string>("");

    // Put values in Inputs on Edit mode
    useEffect(() => {
        if (selectedItem) {
            setCategoryName(selectedItem.categoryName);
            setWorkout(selectedItem.workout);
            setSets(selectedItem.sets);
            setNums(selectedItem.nums);
            setWeight(selectedItem.weight);
            setCaloriesBurned(selectedItem.caloriesBurned);
            setDuration(selectedItem.duration);
            setHeartRate(selectedItem.heartRate);
            setComment(selectedItem.comment);
        }
    }, [selectedItem]);

    // Handle Click in Add and Edit Mode
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setIsModalExercise(false);

        if (selectedItem) {
            setBurnedArray?.((prev) =>
                prev.map((item) =>
                    item === selectedItem
                        ? {
                              ...item,
                              categoryName,
                              workout,
                              sets,
                              nums,
                              weight,
                              caloriesBurned,
                              duration,
                              heartRate,
                              comment,
                              date: new Date().toLocaleDateString(),
                          }
                        : item
                )
            );
        } else {
            setBurnedArray((prev) => [
                ...prev,
                {
                    categoryName,
                    workout,
                    sets,
                    nums,
                    weight,
                    caloriesBurned,
                    duration,
                    heartRate,
                    comment,
                    date: new Date().toLocaleDateString(),
                },
            ]);
        }
    };

    // Arrays For InputCard Component
    const inputArrays: InputCardProps = [
        {
            label: "Workout",
            state: workout,
            setStringState: setWorkout,
            options: [
                "Select a Workout",
                "Barbell Bench Press",
                "Deadlifts",
                "Squats",
                "Pull-Ups",
                "Overhead Dumbbell Press",
                "Bicep Curls",
                "Tricep Dips",
                "Cable Flyes",
                "Lunges",
                "Planks",
            ],
        },
        {
            label: "Category",
            state: categoryName,
            setStringState: setCategoryName,
            options: [
                "Select a Category",
                "Running",
                "Cardio",
                "Swimming",
                "Planks",
                "Push-ups",
                "Yoga",
                "Pilates",
            ],
        },
        { label: "Sets", state: sets, setNumberState: setSets },
        { label: "Number of Sets", state: nums, setNumberState: setNums },
        { label: "Weight", state: weight, setNumberState: setWeight },
        {
            label: "Calories Burned",
            state: caloriesBurned,
            setNumberState: setCaloriesBurned,
        },
        { label: "Heart Rate", state: heartRate, setNumberState: setHeartRate },
        { label: "Duration", state: duration, setNumberState: setDuration },
        { label: "Comment", state: comment, setStringState: setComment },
    ];

    return (
        <div className="p-10 bg-bgLight text-darkText rounded-lg font-josefin">
            <form noValidate className="flex flex-col">
                <FormInputCard props={inputArrays} />
                <button
                    className="bg-primary text-lightText px-3 mt-4 py-2 hover:bg-bgHover hover:transition-all hover:ease-in"
                    onClick={(e) => {
                        handleClick(e);
                    }}
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default WorkoutForm;
