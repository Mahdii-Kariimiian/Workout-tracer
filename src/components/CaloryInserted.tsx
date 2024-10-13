import { useContext } from "react";
import InsertMeal from "./InsertMeal";
import { Context } from "../App";

const CaloryInserted = () => {
    const { isModal, setIsModal } = useContext(Context);
    console.log(isModal, setIsModal);
    return (
        <div className="bg-teal-400 h-full">
            <div>
                <p>Brazilian Stew</p>
                <p>Lunch</p>
            </div>
            <button onClick={() => setIsModal(!isModal)}>
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
