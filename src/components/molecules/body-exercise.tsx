import bodyMuscles from "../../assets/images/body muscles.avif";

const BodyExercises = () => {
    return (
        <div className="font-josefin text-xl text-darkText ">
            <div className="flex gap-2 justify-evenly p-10">
                <p className="hover:cursor-pointer">Chest</p>
                <p className="hover:cursor-pointer">Shoulders</p>
                <p className="hover:cursor-pointer">Abs</p>
                <p className="hover:cursor-pointer">Legs</p>
            </div>
            <div className="flex items-center justify-center">
                <img
                    className="h-auto w-[70%]"
                    src={bodyMuscles}
                    alt="bodyMuscles"
                />
            </div>
        </div>
    );
};

export default BodyExercises;
