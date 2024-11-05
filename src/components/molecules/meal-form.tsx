import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Context } from "../../context/context-provider";
import { AppContextType, ConsumedArray } from "../../types";
import FormInputCard from "../atoms/form-input-card";

const MealForm = () => {
    // React Router
    const navigate = useNavigate();
    const { id } = useParams();
    // Context
    const { setIsModal, setConsumedArray, consumedArray } =
        useContext<AppContextType>(Context);
    //States
    const [selected, setSelected] = useState<ConsumedArray>();
    const [name, setName] = useState<string>(selected?.name || "");
    const [carbs, setCarbs] = useState<number>(selected?.carbs || 0);
    const [protein, setProtein] = useState<number>(selected?.protein || 0);
    const [fat, setFat] = useState<number>(selected?.fat || 0);
    const [water, setWater] = useState<number>(selected?.water || 0);
    const [isEmptyInput, setIsEmptyInput] = useState<boolean>(() => !selected);
    const [loading, setLoading] = useState<boolean>(true);
    // Check for Param
    useEffect(() => {
        if (id !== undefined) {
            setSelected(consumedArray[parseFloat(id)]);
            setIsEmptyInput(false);
        }
        setLoading(false);
    }, []);
    // Edit mode
    useEffect(() => {
        if (selected) {
            setName(selected.name);
            setCarbs(selected.carbs);
            setProtein(selected.protein);
            setFat(selected.fat);
            setWater(selected.water);
        }
    }, [selected]);
    // Array for Inputs Info
    const inputArrays = [
        { label: "carbs", state: carbs, setNumberState: setCarbs },
        { label: "protein", state: protein, setNumberState: setProtein },
        { label: "fat", state: fat, setNumberState: setFat },
        { label: "water", state: water, setNumberState: setWater },
    ];
    // Handle Submit
    const handleSubmit = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        // Calculate Sum
        const sum = protein + fat + carbs;
        //Edit Item
        if (selected) {
            setConsumedArray?.((prev) =>
                prev.map((item) =>
                    item === selected
                        ? { ...item, name, carbs, protein, fat, water, sum }
                        : item
                )
            );
        } else {
            //Add Item
            setConsumedArray?.((prev) => [
                ...prev,
                {
                    name,
                    carbs,
                    protein,
                    fat,
                    water,
                    sum,
                    date: new Date().toLocaleDateString(),
                },
            ]);
        }

        setIsModal(false); //Close Window
        navigate("/meals"); //Back to previous page
    };

    return (
        <div className="fixed inset-0 flex justify-center items-center z-10 bg-black bg-opacity-50">
            <div className="p-10 bg-bgLight rounded-lg font-josefin text-darkText">
                {loading ? (
                    <div>Loading</div>
                ) : (
                    <form noValidate className="flex flex-col">
                        <div className="flex gap-4 justify-between">
                            <label className="mb-1" htmlFor="meal">
                                Meal
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
                            name="meal"
                            id="meal"
                            placeholder="Enter your meal"
                            required
                        />
                        <FormInputCard props={inputArrays}></FormInputCard>
                        <button
                            className="bg-primary mb-3 text-white px-3 py-2 rounded-sm hover:bg-bgHover hover:transition-all hover:ease-in"
                            onClick={(e) => {
                                e.preventDefault();
                                if (!isEmptyInput) handleSubmit(e);
                            }}
                        >
                            {selected ? "Update Meal" : "Add Meal"}
                        </button>
                        <button
                            type="button"
                            className=" text-darkText px-3 py-2"
                            onClick={() => navigate(-1)}
                        >
                            Back
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default MealForm;
