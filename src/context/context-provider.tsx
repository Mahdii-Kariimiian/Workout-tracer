import { createContext, useState, useEffect, ReactNode, FC } from "react";
import {
    ConsumedArray,
    AppContextType,
    BurnedArray,
    LoginType,
} from "../types";

export const Context = createContext<AppContextType>({
    isModal: false,
    setIsModal: () => {},
    consumedArray: [],
    setConsumedArray: () => {},
    burnedArray: [],
    setBurnedArray: () => {},
    isModalExercise: false,
    setIsModalExercise: () => {},
    setLoginArray: () => {},
    isLogged: false,
    setIsLoginOpen: () => [],
    isLoginOpen: false,
});

type childrenType = {
    children: ReactNode;
};

const ContextProvider: FC<childrenType> = ({ children }) => {
    // States for Context //
    const [isLogged, setIsLogged] = useState<boolean>(false);
    const [isLoginOpen, setIsLoginOpen] = useState<boolean>(false);
    const [isModal, setIsModal] = useState<boolean>(false);
    const [isModalExercise, setIsModalExercise] = useState<boolean>(false);
    const [loginArray, setLoginArray] = useState<LoginType>({
        username: "",
        password: "",
    });

    const userPass = JSON.stringify({
        username: "example@gmail.com",
        password: "12345",
    });

    // Compare login Info
    useEffect(() => {
        const authInfo = JSON.parse(localStorage.getItem("userPass") || "{}");
        if (
            authInfo.password === loginArray.password &&
            authInfo.username === loginArray.username
        ) {
            setIsLogged(true);
        }
    }, [loginArray]);

    // Save Login info to Local storage
    useEffect(() => {
        localStorage.setItem("userPass", userPass);
    }, []);

    // Initialize state from localStorage
    const [consumedArray, setConsumedArray] = useState<ConsumedArray[]>([]);
    const [burnedArray, setBurnedArray] = useState<BurnedArray[]>([]);
    // Save to localStorage when arrays change

    console.log(burnedArray);
    console.log(consumedArray);
    useEffect(() => {
        const savedBurned = localStorage.getItem("burnedArray");
        setBurnedArray(savedBurned ? JSON.parse(savedBurned) : []);

        const savedConsumed = localStorage.getItem("consumedArray");
        setConsumedArray(savedConsumed ? JSON.parse(savedConsumed) : []);
    }, []);

    useEffect(() => {
        localStorage.setItem("burnedArray", JSON.stringify(burnedArray));
        localStorage.setItem("consumedArray", JSON.stringify(consumedArray));
    }, [consumedArray, burnedArray]);

    return (
        <Context.Provider
            value={{
                isModal,
                setIsModal,
                setConsumedArray,
                consumedArray,
                burnedArray,
                setBurnedArray,
                isModalExercise,
                setIsModalExercise,
                setLoginArray,
                isLogged,
                setIsLoginOpen,
                isLoginOpen,
            }}
        >
            {children}
        </Context.Provider>
    );
};

export default ContextProvider;
