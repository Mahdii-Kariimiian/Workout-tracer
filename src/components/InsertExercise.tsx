import { useState, useContext } from "react";
import { Context } from "../App";
import { AppContextType } from "../types";

const InsertExercise = () => {
    const { setBurnedArray, setIsModalExercise } =
        useContext<AppContextType>(Context);
    const [name, setName] = useState<string>("");
    const [heartRate, setHeartRate] = useState<number>(0);
    const [caloriesBurned, setCaloriesBurned] = useState<number>(0);
    const [duration, setDuration] = useState<number>(0);
    const [distance, setDistance] = useState<number>(0);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setIsModalExercise?.(false);
        setBurnedArray?.((prev) => [
            ...prev,
            {
                name: name,
                heartRate: heartRate,
                caloriesBurned: caloriesBurned,
                duration: duration,
                distance: distance,
            },
        ]);
    };

    return (
        <div className="p-10 bg-blue-500">
            <form noValidate action="" className="flex flex-col">
                <label className="mb-1" htmlFor="meal">
                    Meal
                </label>
                <input
                    className="mb-3"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    type="text"
                    name="meal"
                    id="meal"
                    placeholder="meal"
                />
                <label className="mb-1" htmlFor="heartRate">
                    Heart Rate
                </label>
                <input
                    className="mb-3"
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
                    className="mb-3"
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
                    className="mb-7"
                    onChange={(e) => setDuration(parseFloat(e.target.value))}
                    value={duration}
                    type="number"
                    name="duration"
                    id="duration"
                    placeholder="duration"
                />
                <label htmlFor="distance">Distance</label>
                <input
                    className="mb-7"
                    onChange={(e) => setDistance(parseFloat(e.target.value))}
                    value={distance}
                    type="number"
                    name="distance"
                    id="distance"
                    placeholder="distance"
                />
                <button
                    className="bg-sky-950 text-white px-3 py-1"
                    onClick={(e) => handleClick(e)}
                >
                    submit
                </button>
            </form>
        </div>
    );
};

export default InsertExercise;
