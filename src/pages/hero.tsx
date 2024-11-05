// Components
import MainInfo from "../components/molecules/activity-overview";
import NutritionalSummary from "../components/molecules/nutrient-summary";
import BodyExercises from "../components/molecules/body-exercise";
import NutrientTracker from "../components/molecules/nutrient-tracker";
import ActivityStats from "../components/molecules/activity-summary";
import ExerciseBox from "../components/molecules/exercise-tracker";
import Sidebar from "../components/molecules/side-bar";

function Hero() {
    return (
        <div className="flex">
            <Sidebar />
            <div className="sm:flex">
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
            </div>
        </div>
    );
}

export default Hero;
