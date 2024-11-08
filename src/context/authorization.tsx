import {
    useContext,
    useEffect,
    useState,
    FC,
    ReactNode,
    createContext,
} from "react";
import { LoginType, authorizationType } from "../types";
import { Context } from "./context-provider";

type AuthorizationChildrenType = {
    children: ReactNode;
};

export const authContext = createContext<authorizationType>({
    isLogged: false,
    setIsLogged: () => {},
    loginArray: { username: "", password: "" },
    setLoginArray: () => {},
    isLoginOpen: false,
    setIsLoginOpen: () => {},
});

const Authorization: FC<AuthorizationChildrenType> = ({ children }) => {
    //States
    const [isLogged, setIsLogged] = useState<boolean>(false);
    const [isLoginOpen, setIsLoginOpen] = useState<boolean>(false);
    const [loginArray, setLoginArray] = useState<LoginType>({
        username: "",
        password: "",
    });
    // Authorized username and password
    const userPass = JSON.stringify({
        username: "example@gmail.com",
        password: "12345",
    });

    // Compare login Info
    useEffect(() => {
        const authInfo = JSON.parse(localStorage.getItem("userPass") || "{}");
        if (
            authInfo.password === loginArray?.password &&
            authInfo.username === loginArray?.username
        ) {
            setIsLogged(true);
        }
    }, [loginArray]);

    // Save Login info to Local storage
    useEffect(() => {
        localStorage.setItem("userPass", userPass);
    }, []);

    return (
        <authContext.Provider
            value={{
                isLogged,
                setIsLogged,
                isLoginOpen,
                setIsLoginOpen,
                loginArray,
                setLoginArray,
            }}
        >
            {children}
        </authContext.Provider>
    );
};

export default Authorization;
