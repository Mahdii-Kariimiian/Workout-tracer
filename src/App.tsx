import { createContext, useState } from "react";
import MainInfo from "./components/MainInfo";
import Sidebar from "./components/Sidebar";
import Title from "./components/Title";
import Consumed from "./components/consumed";
import BodyExercises from "./components/BodyExercises";
import CaloryInserted from "./components/CaloryInserted";
import CaloryBurned from "./components/CaloryBurned";
import "./App.css";
export const Context = createContext<Object>({});
function App() {
    const [isModal, setIsModal] = useState<boolean>(false);
    const [name, setName] = useState<String>("");
    const [carbs, setCarbs] = useState<Number>(0);
    const [protein, setProtein] = useState<Number>(0);
    const [fat, setFat] = useState<Number>(0);
    const [sum, setSum] = useState<Number>(0);
    return (
        <Context.Provider
            value={{
                isModal,
                setIsModal,
                name,
                setName,
                carbs,
                setCarbs,
                protein,
                setProtein,
                fat,
                setFat,
                sum,
                setSum,
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
