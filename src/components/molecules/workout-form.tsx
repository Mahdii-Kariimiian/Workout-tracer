import { useState, useContext, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Context } from "../../context/context-provider";
import { AppContextType, BurnedArray, InputCardProps } from "../../types";
import FormInputCard from "../atoms/form-input-card";

const WorkoutForm = () => {
    // Context
    const { setBurnedArray, burnedArray } = useContext<AppContextType>(Context);

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

    // Get selected Item Info from Params
    const { id } = useParams();
    const navigate = useNavigate();
    const [selectedItem, setSelectedItem] = useState<BurnedArray | undefined>(
        undefined
    );

    // Load selected item when id is available
    useEffect(() => {
        if (id !== undefined) {
            setSelectedItem(burnedArray[parseFloat(id)]);
        }
    }, [id, burnedArray]);

    // Update input values when selected item changes
    useEffect(() => {
        if (selectedItem) {
            setCategoryName(selectedItem.categoryName);
            setName(selectedItem.name);
            setSets(selectedItem.sets);
            setNums(selectedItem.nums);
            setWeight(selectedItem.weight);
            setSum(selectedItem.sum); // sum should be unchanged
            setDuration(selectedItem.duration);
            setHeartRate(selectedItem.heartRate);
            setComment(selectedItem.comment);
        }
    }, [selectedItem]);

    // Handle form submission for both add and edit
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        // Update or add item in the array
        const newItem = {
            categoryName,
            name,
            sets,
            nums,
            weight,
            sum, // sum remains unchanged
            duration,
            heartRate,
            comment,
            date: new Date().toLocaleDateString(),
        };

        if (selectedItem) {
            setBurnedArray?.((prev) =>
                prev.map((item) =>
                    item === selectedItem ? { ...item, ...newItem } : item
                )
            );
        } else {
            setBurnedArray?.((prev) => [...prev, newItem]);
        }

        navigate("/workout");
    };

    // Input card configurations
    const inputArrays: InputCardProps = [
        {
            label: "Workout",
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
        { label: "Calories Burned", state: sum, setNumberState: setSum },
        { label: "Heart Rate", state: heartRate, setNumberState: setHeartRate },
        { label: "Duration", state: duration, setNumberState: setDuration },
        { label: "Comment", state: comment, setStringState: setComment },
    ];

    return (
        <div className="fixed inset-0 flex justify-center items-center z-10 bg-black bg-opacity-50">
            <div className="p-10 bg-bgLight rounded-lg font-josefin text-darkText">
                <form noValidate className="flex flex-col">
                    <FormInputCard props={inputArrays} />
                    <button
                        className="bg-primary text-lightText px-3 mt-4 py-2 hover:bg-bgHover hover:transition-all hover:ease-in"
                        onClick={(e) => handleClick(e)}
                    >
                        {selectedItem ? "Update Workout" : "Add Workout"}
                    </button>
                    <button
                        type="button"
                        className=" text-darkText px-3 py-2"
                        onClick={() => navigate(-1)}
                    >
                        Back
                    </button>
                </form>
            </div>
        </div>
    );
};

export default WorkoutForm;
