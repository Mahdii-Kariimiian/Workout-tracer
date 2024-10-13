import bodyMuscles from "../assets/images/body muscles.avif";

const BodyExercises = () => {
    return (
        <div className="bg-yellow-600 h-full">
            <div>
                <p>Chest</p>
                <p>Shoulders</p>
                <p>Abs</p>
                <p>Legs</p>
            </div>
            <img src={bodyMuscles} alt="bodyMuscles" />
        </div>
    );
};

export default BodyExercises;
