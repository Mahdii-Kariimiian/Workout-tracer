import { useContext } from "react";
import { Context } from "../../../App";

const ExerciseBox = () => {
    const { burnedArray } = useContext(Context);
    return (
        <div>
            {burnedArray.map((item, index) => {
                return (
                    <div key={index} className="bg-blue-500">
                        <h2>{item.name}</h2>
                        <div className="flex gap-5 justify-between">
                            <div>
                                <p>Calories</p>
                                <p>{item.caloriesBurned} Kcal</p>
                            </div>
                            <div>
                                <p>Heart Rate</p>
                                <p>{item.heartRate} Rpm</p>
                            </div>
                            <div>
                                <p>Distance</p>
                                <p>{item.distance} Km</p>
                            </div>
                            <div>
                                <p>Duration</p>
                                <p>{item.duration} m</p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ExerciseBox;
