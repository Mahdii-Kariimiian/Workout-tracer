import { FC, ReactNode, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ActivityContextTypes } from "../types";
import { Context } from "./context-provider";

export const ActivityContext = createContext<ActivityContextTypes>({
    handleRemoveMeal: () => {},
    handleEditMeal: () => {},
    handleEditWorkout: () => {},
    handleRemoveWorkout: () => {},
});

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

    const handleEditMeal = (index: number) => {
        navigate(`/meals/form/${index}`);
    };
    const handleEditWorkout = (index: number) => {
        navigate(`/workout/form/${index}`);
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
