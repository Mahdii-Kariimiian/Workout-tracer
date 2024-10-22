import { useContext, useState } from "react";
import { Context } from "../App";
import { AppContextType } from "../types";

const Login = () => {
    const [password, setPassword] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const { setLoginArray, setIsLoginOpen } =
        useContext<AppContextType>(Context);

    const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        e.preventDefault();

        setLoginArray(() => {
            return {
                username: username,
                password: password,
            };
        });
        setIsLoginOpen(false);
    };

    return (
        <div className="p-10 bg-bgLight rounded-lg font-josefin text-darkText">
            <form noValidate className="flex flex-col">
                <label htmlFor="username" className="mb-1">
                    Username
                </label>
                <input
                    className="mb-3 p-1 text-darkText"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Username"
                />

                <label htmlFor="password" className="mb-1">
                    Password
                </label>
                <input
                    className="mb-7 p-1 text-darkText"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="text"
                    name="password"
                    id="password"
                    placeholder="Password"
                />

                <button
                    onClick={(e) => handleClick(e)}
                    className="bg-primary text-lightText px-3 py-2 rounded-sm hover:bg-bgHover hover:transition-all hover:ease-in uppercase"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Login;
