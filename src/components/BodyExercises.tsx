import bodyMuscles from "../assets/images/body muscles.avif";

const BodyExercises = () => {
    return (
        <div className="max-h-full">
            <div className="flex gap-2 justify-evenly p-3">
                <p>Chest</p>
                <p>Shoulders</p>
                <p>Abs</p>
                <p>Legs</p>
            </div>
            <img className="h-full" src={bodyMuscles} alt="bodyMuscles" />
        </div>
    );
};

export default BodyExercises;
