import { useContext } from "react";
import { Context } from "../../../App";
import { GrYoga } from "react-icons/gr";

const ExerciseBox = () => {
    const { burnedArray, setIsModal, setIsModalExercise, isModalExercise } =
        useContext(Context);

    return (
        <div className="bg-bgLight max-sm:h-96 p-10 text-darkText h-full flex flex-col pb-2">
            <div className="flex justify-between gap-5 items-end mb-5">
                <div className="text-2xl font-josefin text-darkText flex gap-2">
                    <GrYoga />
                    <h1>Exercises</h1>
                </div>
                <button
                    onClick={() => {
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
                    >
                        <h2 className="text-lg font-josefin">{item.name}</h2>
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
        </div>
    );
};

export default ExerciseBox;
