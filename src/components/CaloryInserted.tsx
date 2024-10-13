import { useContext } from "react";
import InsertMeal from "./InsertMeal";
import { Context } from "../App";

const CaloryInserted = () => {
    const { isModal, setIsModal } = useContext(Context);
    console.log(isModal, setIsModal);
    return (
        <div className="p-3 h-full space-y-2 bg-zinc-200">
            <div className="bg-blue-500 p-3">
                <p>Brazilian Stew</p>
                <p>Lunch</p>
            </div>
            <button className="bg-sky-950 text-white p-3" onClick={() => setIsModal(!isModal)}>
                Enter Your Meal
            </button>

            {isModal && (
                <div className="absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%]">
                    <InsertMeal />
                </div>
            )}
        </div>
    );
};

export default CaloryInserted;
