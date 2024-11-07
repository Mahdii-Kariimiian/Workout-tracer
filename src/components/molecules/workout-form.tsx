import { useState, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Context } from "../../context/context-provider";
import { AppContextType, BurnedArray, InputCardProps } from "../../types";
import FormInputCard from "../atoms/form-input-card";

const WorkoutForm = () => {
    // Context
    const { setBurnedArray, setIsModalExercise } =
        useContext<AppContextType>(Context);

    // States
    const [categoryName, setCategoryName] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [sets, setSets] = useState<number>(0);
    const [nums, setNums] = useState<number>(0);
    const [weight, setWeight] = useState<number>(0);
    const [sum, setSum] = useState<number>(0);
    const [duration, setDuration] = useState<number>(0);
    const [heartRate, setHeartRate] = useState<number>(0);
    const [comment, setComment] = useState<string>("");

    //Get selected Item Info
    const { state } = useLocation();
    const [selectedItem, setSelectedItem] = useState<BurnedArray>();

    useEffect(() => {
        state && setSelectedItem(state.item);
    }, []);

    // Put values in Inputs on Edit mode
    useEffect(() => {
        if (selectedItem) {
            setCategoryName(selectedItem.categoryName);
            setName(selectedItem.name);
            setSets(selectedItem.sets);
            setNums(selectedItem.nums);
            setWeight(selectedItem.weight);
            setSum(selectedItem.sum);
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
                    item == selectedItem
                        ? {
                              ...item,
                              categoryName,
                              name,
                              sets,
                              nums,
                              weight,
                              sum,
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
                    name,
                    sets,
                    nums,
                    weight,
                    sum,
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
            label: "workout",
            state: name,
            setStringState: setName,
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
            state: sum,
            setNumberState: setSum,
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
