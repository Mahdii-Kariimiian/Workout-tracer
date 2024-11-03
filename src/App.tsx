import { Route, Routes } from "react-router-dom";
import ContextProvider from "./context/context-provider";
import { Context } from "./context/context-provider";
// Components
import Layout from "./organisms/Layout";
import Hero from "./pages/hero";
import Login from "./pages/login";
import Router from "./router";
// Css Files
import "./App.css";
import { useContext } from "react";

function App() {
    const { isLogged } = useContext(Context);
    console.log(isLogged);
    return (
        <Router>
            <ContextProvider>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Hero />} />
                        <Route path="/login" element={<Login />} />
                    </Route>
                </Routes>
            </ContextProvider>
        </Router>
    );
}

export default App;
