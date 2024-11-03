import { FC, ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";

interface RouterType {
    children: ReactNode;
}

const Router: FC<RouterType> = ({ children }) => {
    return <BrowserRouter>{children}</BrowserRouter>;
};

export default Router;
