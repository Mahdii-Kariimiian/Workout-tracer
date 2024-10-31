import { createContext, useEffect, useState } from "react";
//Components
import MainInfo from "./molecules/ActivityOverview";
import Sidebar from "./molecules/Sidebar";
import NutritionalSummary from "./molecules/NutritionalSummary";
import BodyExercises from "./molecules/BodyExercises";
import NutrientTracker from "./molecules/NutrientTracker";
import ActivityStats from "./molecules/ActivitySummary";
//Css Files
import "./App.css";
//Types
import { ConsumedArray, AppContextType, BurnedArray, LoginType } from "./types";
import ExerciseBox from "./molecules/ExerciseTracker";

//Context
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

function App() {
    // States for Context //
    const [isLogged, setIsLogged] = useState<boolean>(true);
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

    //Compare login Info
    useEffect(() => {
        const authInfo = JSON.parse(localStorage.getItem("userPass") || "{}");
        if (
            authInfo.password === loginArray.password &&
            authInfo.username === loginArray.username
        ) {
            setIsLogged(true);
        }
    }, [loginArray]);

    //Save Login info to Local storage
    useEffect(() => {
        localStorage.setItem("userPass", userPass);
    }, []);

    // Initialize state from localStorage
    const [consumedArray, setConsumedArray] = useState<ConsumedArray[]>(() => {
        const savedConsumed = localStorage.getItem("consumedArray");
        return savedConsumed ? JSON.parse(savedConsumed) : [];
    });

    const [burnedArray, setBurnedArray] = useState<BurnedArray[]>(() => {
        const savedBurned = localStorage.getItem("burnedArray");
        return savedBurned ? JSON.parse(savedBurned) : [];
    });

    // Save to localStorage when arrays change
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
            <div className="sm:flex">
                <Sidebar />
                {isLogged ? (
                    <div>
                        <div className="lg:grid lg:grid-cols-12 lg:grid-rows-3 h-screen">
                            <div className="lg:col-span-4">
                                <MainInfo />
                            </div>

                            <div className="lg:col-span-4">
                                <NutritionalSummary />
                            </div>

                            <div className="lg:col-span-4 row-span-2">
                                <ExerciseBox />
                            </div>

                            <div className="lg:col-span-4 row-span-2 ">
                                <NutrientTracker />
                            </div>

                            <div className="lg:col-span-4 lg:order-last ">
                                <ActivityStats />
                            </div>

                            <div className="lg:col-span-4 row-span-2">
                                <BodyExercises />
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="p-20 text-2xl text-darkText">
                        Please log in
                    </div>
                )}
            </div>
        </Context.Provider>
    );
}

export default App;
