import { Route, Routes } from "react-router-dom";
import AuthContextProvider from "./context/authorization";
import ContextProvider from "./context/context-provider";
import ActivityProvider from "./context/activity-provider";
// Components
import Layout from "./components/organisms/Layout";
import Hero from "./pages/hero";
import Login from "./pages/login";
import Router from "./router";
import MealList from "./pages/meal-list";
import WorkoutList from "./pages/workout-list";
import MealForm from "./components/molecules/meal-form";
import WorkoutForm from "./components/molecules/workout-form";
// Css Files
import "./App.css";

function App() {
    return (
        <Router>
            <ContextProvider>
                <AuthContextProvider>
                    <ActivityProvider>
                        <Routes>
                            <Route path="/" element={<Layout />}>
                                <Route index element={<Hero />} />
                                <Route path="/login" element={<Login />} />
                                <Route
                                    path="/workout"
                                    element={<WorkoutList />}
                                />
                                <Route path="/meals" element={<MealList />} />
                                <Route
                                    path="/meals/form"
                                    element={<MealForm />}
                                />
                                <Route
                                    path="/meals/form/:id"
                                    element={<MealForm />}
                                />
                                <Route
                                    path="/workout/form"
                                    element={<WorkoutForm />}
                                />
                                <Route
                                    path="/workout/form/:id"
                                    element={<WorkoutForm />}
                                />
                            </Route>
                        </Routes>
                    </ActivityProvider>
                </AuthContextProvider>
            </ContextProvider>
        </Router>
    );
}

export default App;
