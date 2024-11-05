import { Route, Routes } from "react-router-dom";
import AuthContextProvider from "./context/authorization";
import ContextProvider from "./context/context-provider";
// Components
import Layout from "./components/organisms/Layout";
import Hero from "./pages/hero";
import Login from "./pages/login";
import Router from "./router";
import MealList from "./pages/meal-list";
import ExerciseList from "./pages/exercise-list";
import MealForm from "./components/molecules/meal-form";
// Css Files
import "./App.css";

function App() {
    return (
        <Router>
            <ContextProvider>
                <AuthContextProvider>
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route index element={<Hero />} />
                            <Route path="/login" element={<Login />} />
                            <Route
                                path="/exercises"
                                element={<ExerciseList />}
                            />
                            <Route path="/meals" element={<MealList />} />
                            <Route path="/meals/form" element={<MealForm />} />
                            <Route
                                path="/meals/form/:id"
                                element={<MealForm />}
                            />
                        </Route>
                    </Routes>
                </AuthContextProvider>
            </ContextProvider>
        </Router>
    );
}

export default App;
