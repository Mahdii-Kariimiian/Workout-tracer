import { useState, useContext, useEffect } from "react";
import { Context } from "../App";
import { AppContextType, BurnedArray } from "../types";
import FormInputCard from "../atoms/FormInputCard";

const InsertExercise = ({ selectedItem }: { selectedItem?: BurnedArray }) => {
    // Context
    const { setBurnedArray, setIsModalExercise } =
        useContext<AppContextType>(Context);
    // States
    const [name, setName] = useState<string>("");
    const [heartRate, setHeartRate] = useState<number>(0);
    const [caloriesBurned, setCaloriesBurned] = useState<number>(0);
    const [duration, setDuration] = useState<number>(0);
    const [distance, setDistance] = useState<number>(0);
    const [isEmptyInput, setIsEmptyInput] = useState<boolean>(() => {
        return selectedItem ? false : true;
    });
    // Put values in Inputs on Edit mode
    useEffect(() => {
        if (selectedItem) {
            setName(selectedItem.name);
            setHeartRate(selectedItem.heartRate);
            setCaloriesBurned(selectedItem.caloriesBurned);
            setDuration(selectedItem.duration);
            setDistance(selectedItem.distance);
            selectedItem.date = new Date().toDateString();
        }
    }, [selectedItem]);
    // Handle Click in Add and Edit Mode
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setIsModalExercise(false);

        selectedItem
            ? setIsEmptyInput(false)
            : () => {
                  setIsEmptyInput(true);
              };

        if (selectedItem) {
            setBurnedArray?.((prev) =>
                prev.map((item) =>
                    item === selectedItem
                        ? {
                              ...item,
                              name,
                              heartRate,
                              duration,
                              distance,
                              caloriesBurned,
                          }
                        : item
                )
            );
        } else {
            setBurnedArray((prev) => [
                ...prev,
                {
                    name: name,
                    heartRate: heartRate,
                    caloriesBurned: caloriesBurned,
                    duration: duration,
                    distance: distance,
                    date: new Date().toLocaleDateString(),
                },
            ]);
        }
    };
    // Arrays For InputCard Component
    const inputArrays = [
        { label: "heartRate", state: heartRate, setState: setHeartRate },
        {
            label: "caloriesBurned",
            state: caloriesBurned,
            setState: setCaloriesBurned,
        },
        { label: "duration", state: duration, setState: setDuration },
        { label: "distance", state: distance, setState: setDistance },
    ];

    return (
        <div className="p-10 bg-bgLight text-darkText rounded-lg font-josefin">
            <form noValidate action="" className="flex flex-col">
                <div className="flex gap-4 justify-between">
                    <label className="mb-1" htmlFor="exercise">
                        Exercise
                    </label>
                    {isEmptyInput && (
                        <p className="text-sm text-red-600">
                            Please insert the name
                        </p>
                    )}
                </div>
                <input
                    className="mb-3 text-darkText p-1"
                    onChange={(e) => {
                        setIsEmptyInput(!e.target.value.trim());
                        setName(e.target.value);
                    }}
                    value={name}
                    type="text"
                    name="exercise"
                    id="exercise"
                    placeholder="exercise"
                />
                <FormInputCard props={inputArrays} />
                <button
                    className="bg-primary text-lightText px-3 py-2 hover:bg-bgHover hover:transition-all hover:ease-in"
                    onClick={(e) => {
                        e.preventDefault();
                        !isEmptyInput && handleClick(e);
                    }}
                >
                    submit
                </button>
                {/* <label className="mb-1" htmlFor="heartRate">
                    Heart Rate
                </label>
                <input
                    className="mb-3 text-darkText p-1"
                    required
                    onChange={(e) => setHeartRate(parseFloat(e.target.value))}
                    value={heartRate}
                    type="number"
                    name="heartRate"
                    id="heartRate"
                    placeholder="heartRate"
                />
                <label className="mb-1" htmlFor="caloriesBurned">
                    CaloriesBurned
                </label>
                <input
                    className="mb-3 text-darkText p-1"
                    onChange={(e) =>
                        setCaloriesBurned(parseFloat(e.target.value))
                    }
                    value={caloriesBurned}
                    type="number"
                    name="caloriesBurned"
                    id="caloriesBurned"
                    placeholder="caloriesBurned"
                />
                <label htmlFor="duration">Duration</label>
                <input
                    className="mb-3 text-darkText p-1"
                    onChange={(e) => setDuration(parseFloat(e.target.value))}
                    value={duration}
                    type="number"
                    name="duration"
                    id="duration"
                    placeholder="duration"
                />
                <label htmlFor="distance">Distance</label>
                <input
                    className="mb-7 text-darkText p-1"
                    onChange={(e) => setDistance(parseFloat(e.target.value))}
                    value={distance}
                    type="number"
                    name="distance"
                    id="distance"
                    placeholder="distance"
                /> */}
            </form>
        </div>
    );
};

export default InsertExercise;
