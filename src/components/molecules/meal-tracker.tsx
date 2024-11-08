import { useContext } from "react";
import lunch from "../../../public/icons/lunch-box.png";
import { Context } from "../../context/context-provider";
import { Link } from "react-router-dom";
import { ConsumedArray } from "../../types";
import { ActivityContext } from "../../context/activity-provider";
import RecordCard from "./record-card";

const MealTracker = () => {
    const { consumedArray } = useContext(Context);
    const { handleEditMeal, handleRemoveMeal } = useContext(ActivityContext);

    return (
        <div className="p-10 max-sm:h-96 text-lightText h-full flex flex-col bg-gradientPrimary ">
            <div className="flex justify-between gap-5 items-end mb-5">
                <div className="flex gap-2 text-2xl font-josefin">
                    <img className="w-9" src={lunch} alt="lunch" />
                    <h1>Meals</h1>
                </div>
                <Link
                    to="/meals/form"
                    className="bg-bgLight text-darkText px-3 py-2 rounded-sm uppercase hover:bg-bgHover hover:text-lightText"
                >
                    Add New Meal
                </Link>
            </div>
            <div className="flex flex-col overflow-auto gap-2 pr-5">
                {consumedArray?.map((meal: ConsumedArray, index: number) => {
                    return (
                        <RecordCard
                            key={index}
                            handleEdit={() => handleEditMeal(index)}
                            handleRemove={() => handleRemoveMeal(index)}
                            data={[
                                { name: "Carbs", val: meal.carbs, unit: "gr" },
                                { name: "Fat", val: meal.fat, unit: "gr" },
                                {
                                    name: "Protein",
                                    val: meal.protein,
                                    unit: "gr",
                                },
                                {
                                    name: "Water",
                                    val: meal.water,
                                    unit: "L",
                                },
                                { name: "Sum", val: meal.sum, unit: "gr" },
                            ]}
                            title={meal.name}
                            date={meal.date}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default MealTracker;
