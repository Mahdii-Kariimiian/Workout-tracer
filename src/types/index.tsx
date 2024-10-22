export type ConsumedArray = {
    name: string;
    carbs: number;
    fat: number;
    protein: number;
    sum: number;
    water: number;
};

export type BurnedArray = {
    name: string;
    heartRate: number;
    caloriesBurned: number;
    duration: number;
    distance: number;
};

export type InsertMealTypes = {
    setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
    setConsumedArray: React.Dispatch<React.SetStateAction<ConsumedArray[]>>;
};

export interface AppContextType {
    isModal: boolean;
    setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
    isModalExercise: boolean;
    setIsModalExercise: React.Dispatch<React.SetStateAction<boolean>>;
    consumedArray: ConsumedArray[];
    setConsumedArray: React.Dispatch<React.SetStateAction<ConsumedArray[]>>;
    setBurnedArray: React.Dispatch<React.SetStateAction<BurnedArray[]>>;
    burnedArray: BurnedArray[];
    setLoginArray: React.Dispatch<React.SetStateAction<LoginType>>;
    isLogged: boolean;
    setIsLoginOpen: React.Dispatch<React.SetStateAction<boolean>>;
    isLoginOpen: boolean;
}

export type ConsumedItems = {
    title: string;
    quantity: number;
    icon: React.ReactNode;
};

export type ConsumedBoxProps = ConsumedItems[];

export type LoginType = {
    username: string;
    password: string;
};

export type useClickOutsideProps = {
    ref: React.RefObject<HTMLElement>;
    setState: React.Dispatch<React.SetStateAction<boolean>>;
};
