import { useContext } from "react";
import { Context } from "../../../App";
import { GrYoga } from "react-icons/gr";

const ExerciseBox = () => {
    const {
        burnedArray,
        isLogged,
        setIsModal,
        setIsModalExercise,
        isModalExercise,
    } = useContext(Context);

    return (
        <div className="bg-gray-200 px-3 pt-10 text-white h-full flex flex-col pb-2">
            <div className="flex justify-between mb-2">
                <div className="pb-2 text-2xl font-josefin text-sky-950 flex gap-2">
                    <GrYoga /> <h1>Exercises</h1>
                </div>
                <button
                    onClick={() => {
                        setIsModal(false);
                        setIsModalExercise(!isModalExercise);
                    }}
                    className={`${
                        isLogged
                            ? "bg-sky-950"
                            : "bg-gray-400 hover:cursor-not-allowed"
                    } text-white px-3 py-1 rounded-sm uppercase whitespace-nowrap`}
                    disabled={!isLogged}
                >
                    Add New Exercise
                </button>
            </div>
            {!isLogged ? (
                <div className="text-xl text-sky-950 font-josefin">
                    Please log in
                </div>
            ) : (
                <div className="flex-1 overflow-y-auto">
                    {burnedArray.map((item, index) => (
                        <div key={index} className="bg-sky-900 px-2 py-1 mb-2">
                            <h2 className="text-lg font-josefin">
                                {item.name}
                            </h2>
                            <div className="flex gap-5 justify-between text-xl font-agdasima">
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
            )}
        </div>
    );
};

export default ExerciseBox;
