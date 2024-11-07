import { FC, ReactNode, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "./context-provider";
import { ActivityContextTypes } from "../types";
import { BurnedArray, ConsumedArray } from "../types";

export const ActivityContext = createContext<ActivityContextTypes | undefined>(
    undefined
);

type ActivityProviderProps = {
    children: ReactNode;
};

const ActivityProvider: FC<ActivityProviderProps> = ({ children }) => {
    const { consumedArray, setConsumedArray, burnedArray, setBurnedArray } =
        useContext(Context);
    const navigate = useNavigate();

    const handleRemoveMeal = (index: number) => {
        setConsumedArray(consumedArray.filter((_, i) => i !== index));
    };
    const handleRemoveWorkout = (index: number) => {
        setBurnedArray(burnedArray.filter((_, i) => i !== index));
    };

    const handleEditMeal = (item: ConsumedArray, index: number) => {
        navigate(`/meals/form/${index}`, { state: { item } });
    };
    const handleEditWorkout = (item: BurnedArray, index: number) => {
        navigate(`/workout/form/${index} `, { state: { item } });
    };

    return (
        <ActivityContext.Provider
            value={{
                handleRemoveMeal,
                handleRemoveWorkout,
                handleEditMeal,
                handleEditWorkout,
            }}
        >
            {children}
        </ActivityContext.Provider>
    );
};

export default ActivityProvider;
