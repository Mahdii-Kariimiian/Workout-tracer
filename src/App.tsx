import { createContext, useState } from "react";
//Components
import MainInfo from "./components/MainInfo";
import Sidebar from "./components/Sidebar";
import Title from "./components/Title";
import Consumed from "./components/consumed";
import BodyExercises from "./components/BodyExercises";
import CaloryInserted from "./components/CaloryInserted";
import CaloryBurned from "./components/CaloryBurned";
//Css Files
import "./App.css";
//Types
import { ConsumedArray, AppContextType, BurnedArray } from "./types";
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
});

function App() {
    // States for Context //
    const [isModal, setIsModal] = useState<boolean>(false);
    const [isModalExercise, setIsModalExercise] = useState<boolean>(false);
    const [consumedArray, setConsumedArray] = useState<ConsumedArray[]>([]);
    const [burnedArray, setBurnedArray] = useState<BurnedArray[]>([]);
    console.log(consumedArray, burnedArray);

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
            }}
        >
            <div className="flex">
                <Sidebar />
                <div className="grid grid-cols-12 grid-rows-3 h-screen">
                    <div className="col-span-4">
                        <MainInfo />
                    </div>
                    <div className="col-span-8 ">
                        <Title />
                    </div>
                    <div className="col-span-4">
                        <Consumed />
                    </div>
                    <div className="col-span-4 row-span-2">
                        <BodyExercises />
                    </div>
                    <div className="col-span-4 row-span-2">
                        <CaloryBurned />
                    </div>
                    <div className="col-span-4">
                        <CaloryInserted />
                    </div>
                </div>
            </div>
        </Context.Provider>
    );
}

export default App;
