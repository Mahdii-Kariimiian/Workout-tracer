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
    //Context
    const { burnedArray, consumedArray, setBurnedArray, setConsumedArray } =
        useContext(Context);
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

    // Save to localStorage when arrays change
    useEffect(() => {
        const savedBurned = localStorage.getItem("burnedArray");
        setBurnedArray(savedBurned ? JSON.parse(savedBurned) : []);

        const savedConsumed = localStorage.getItem("consumedArray");
        setConsumedArray(savedConsumed ? JSON.parse(savedConsumed) : []);
    }, []);

    useEffect(() => {
        if (consumedArray.length > 0) {
            localStorage.setItem(
                "consumedArray",
                JSON.stringify(consumedArray)
            );
            if (burnedArray.length > 0) {
                localStorage.setItem(
                    "burnedArray",
                    JSON.stringify(burnedArray)
                );
            }
        }
    }, [consumedArray, burnedArray]);

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
