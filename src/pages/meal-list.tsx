import { useContext } from "react";
import { Context } from "../context/context-provider";
import RecordCard from "../components/molecules/record-card";
import { Link } from "react-router-dom";
import ActivityProvider, {
    ActivityContext,
} from "../context/activity-provider";
import LineGraph from "../charts/line";

const MealList = () => {
    const { consumedArray, setIsModal } = useContext(Context);

    return (
        <ActivityProvider>
            <ActivityContext.Consumer>
                {(value) => {
                    if (!value) {
                        return null;
                    }
                    const { handleRemoveMeal, handleEditMeal } = value;

                    return (
                        <div className="p-10 bg-bgLightGradient">
                            <div className="flex justify-between mb-5">
                                <h1 className="text-3xl font-agdasima">
                                    Meals
                                </h1>
                                <Link
                                    to="/meals/form"
                                    className="bg-primary text-lightText ml-auto mr-5 px-3 py-2 rounded-md uppercase hover:bg-bgHover transition-all hover:ease-in"
                                    onClick={() => setIsModal?.(true)}
                                >
                                    Add New Meal
                                </Link>
                                <Link
                                    className="bg-primary text-lightText px-3 py-2 rounded-md uppercase hover:bg-bgHover transition-all hover:ease-in"
                                    to="/"
                                >
                                    Back
                                </Link>
                            </div>
                            <div className="my-9 max-w-[1000px]">
                                <LineGraph array={consumedArray} />
                            </div>
                            <div className="grid grid-cols-2 gap-5">
                                {consumedArray.map((meal, index) => (
                                    <RecordCard
                                        key={index}
                                        handleEdit={() => handleEditMeal(index)}
                                        handleRemove={() =>
                                            handleRemoveMeal(index)
                                        }
                                        data={[
                                            {
                                                name: "Carbs",
                                                val: meal.carbs,
                                                unit: "gr",
                                            },
                                            {
                                                name: "Fat",
                                                val: meal.fat,
                                                unit: "gr",
                                            },
                                            {
                                                name: "Protein",
                                                val: meal.protein,
                                                unit: "gr",
                                            },
                                            {
                                                name: "Sum",
                                                val: meal.sum,
                                                unit: "gr",
                                            },
                                        ]}
                                        title={meal.name}
                                        date={meal.date}
                                    />
                                ))}
                            </div>
                        </div>
                    );
                }}
            </ActivityContext.Consumer>
        </ActivityProvider>
    );
};

export default MealList;
