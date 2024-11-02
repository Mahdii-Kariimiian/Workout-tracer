export type ConsumedArray = {
    name: string;
    carbs: number;
    fat: number;
    protein: number;
    sum: number;
    water: number;
    date?: string;
};

export type BurnedArray = {
    categoryName: string;
    workout: string;
    sets: number;
    nums: number;
    caloriesBurned: number;
    weight: number;
    duration: number;
    heartRate: number;
    comment: string;
    distance?: number;
    date: string;
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
    icon: string;
    unit: string;
};

export type InputCardProps = {
    label: string;
    state: string | number;
    setStringState?: React.Dispatch<React.SetStateAction<string>>;
    setNumberState?: React.Dispatch<React.SetStateAction<number>>;

    options?: string[];
}[];

export type ConsumedBoxProps = ConsumedItems[];

export type LoginType = {
    username: string;
    password: string;
};

export type UseClickOutsideProps = {
    ref: React.RefObject<HTMLElement>;
    setState: React.Dispatch<React.SetStateAction<boolean>>;
};

export type InfoDisplayProps = {
    name: string;
    unit?: string;
    val: React.ReactNode;
}[];
