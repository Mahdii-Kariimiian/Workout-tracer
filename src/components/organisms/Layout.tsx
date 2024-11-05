// components/MainLayout.tsx
import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout: React.FC = () => {
    return (
        <div className="flex">
            <div className="flex-1">
                <Outlet />
            </div>
        </div>
    );
};

export default MainLayout;
