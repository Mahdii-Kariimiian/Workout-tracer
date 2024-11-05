import { FC, ReactNode, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "./context-provider";

type NutrientContextType = {
    handleRemoveItem: (index: number) => void;
    handleEditItem: (index: number) => void;
};

export const NutrientContext = createContext<NutrientContextType | undefined>(
    undefined
);

type NutrientProviderProps = {
    children: ReactNode;
};

const NutrientProvider: FC<NutrientProviderProps> = ({ children }) => {
    const { consumedArray, setConsumedArray } = useContext(Context);
    const navigate = useNavigate();

    const handleRemoveItem = (index: number) => {
        setConsumedArray(consumedArray.filter((_, i) => i !== index));
    };

    const handleEditItem = (index: number) => {
        navigate(`/meals/form/${index}`);
    };

    return (
        <NutrientContext.Provider value={{ handleRemoveItem, handleEditItem }}>
            {children}
        </NutrientContext.Provider>
    );
};

export default NutrientProvider;
