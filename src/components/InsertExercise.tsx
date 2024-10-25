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
    const [date, setDate] = useState<string>(() => {
        const submittedTime = new Date();
        const day = submittedTime.getDate();
        const month = submittedTime.getMonth() + 1;
        const year = submittedTime.getUTCFullYear();

        const formattedDate =
            (day < 10 ? "0" + day : day) +
            "/" +
            (month < 10 ? "0" + month : month) +
            "/" +
            year.toString().substring(2);

        return formattedDate;
    });

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setIsModalExercise(false);
        setBurnedArray((prev) => [
            ...prev,
            {
                name: name,
                heartRate: heartRate,
                caloriesBurned: caloriesBurned,
                duration: duration,
                distance: distance,
                date: date,
            },
        ]);
    };

    return (
        <div className="p-10 bg-bgLight text-darkText rounded-lg font-josefin">
            <form noValidate action="" className="flex flex-col">
                <label className="mb-1" htmlFor="exercise">
                    Exercise
                </label>
                <input
                    className="mb-3 text-darkText p-1"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    type="text"
                    name="exercise"
                    id="exercise"
                    placeholder="exercise"
                />
                <label className="mb-1" htmlFor="heartRate">
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
                />
                <button
                    className="bg-primary text-lightText px-3 py-2 hover:bg-bgHover hover:transition-all hover:ease-in"
                    onClick={(e) => handleClick(e)}
                >
                    submit
                </button>
            </form>
        </div>
    );
};

export default InsertExercise;
