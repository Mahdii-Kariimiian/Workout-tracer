import { useContext } from "react";
import { Context } from "../context/context-provider";
import NutrientCard from "../components/molecules/nutrient-card";
import { Link } from "react-router-dom";
import NutrientProvider, {
    NutrientContext,
} from "../context/nutrient-provider";

const MealList = () => {
    const { consumedArray, setIsModal } = useContext(Context);

    return (
        <NutrientProvider>
            <NutrientContext.Consumer>
                {(value) => {
                    if (!value) {
                        return null;
                    }
                    const { handleRemoveItem, handleEditItem } = value;

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
                            <div className="grid grid-cols-2 gap-5">
                                {consumedArray.map((meal, index) => (
                                    <NutrientCard
                                        key={index}
                                        handleEdit={() => handleEditItem(index)}
                                        handleRemoveItem={() =>
                                            handleRemoveItem(index)
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
            </NutrientContext.Consumer>
        </NutrientProvider>
    );
};

export default MealList;
