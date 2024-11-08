import { createContext, FC, ReactNode, useState, useEffect } from "react";
import { AppContextType, BurnedArray, ConsumedArray } from "../types";
import MealProvider from "./activity-provider";

export const Context = createContext<AppContextType>({
    isModal: false,
    setIsModal: () => {},
    consumedArray: [],
    setConsumedArray: () => {},
    burnedArray: [],
    setBurnedArray: () => {},
    isModalExercise: false,
    setIsModalExercise: () => {},
});

type ChildrenType = {
    children: ReactNode;
};

const ContextProvider: FC<ChildrenType> = ({ children }) => {
    // States for Context //
    const [isModal, setIsModal] = useState<boolean>(false);
    const [isModalExercise, setIsModalExercise] = useState<boolean>(false);
    // Initialize state from localStorage
    const [consumedArray, setConsumedArray] = useState<ConsumedArray[]>([]);
    const [burnedArray, setBurnedArray] = useState<BurnedArray[]>([]);

    // Save to localStorage when arrays change
    useEffect(() => {
        const savedBurned = localStorage.getItem("burnedArray");
        setBurnedArray(savedBurned ? JSON.parse(savedBurned) : []);

        const savedConsumed = localStorage.getItem("consumedArray");
        setConsumedArray(savedConsumed ? JSON.parse(savedConsumed) : []);
    }, []);

    useEffect(() => {
        if (consumedArray.length >= 0) {
            localStorage.setItem(
                "consumedArray",
                JSON.stringify(consumedArray)
            );
        }
    }, [consumedArray]);

    useEffect(() => {
        if (burnedArray.length >= 0) {
            localStorage.setItem("burnedArray", JSON.stringify(burnedArray));
        }
    }, [burnedArray]);

    return (
        <MealProvider>
            <Context.Provider
                value={{
                    isModal,
                    setIsModal,
                    consumedArray,
                    setConsumedArray,
                    burnedArray,
                    setBurnedArray,
                    isModalExercise,
                    setIsModalExercise,
                }}
            >
                {children}
            </Context.Provider>
        </MealProvider>
    );
};

export default ContextProvider;
