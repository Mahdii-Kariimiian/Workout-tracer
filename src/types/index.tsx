import { Dispatch, SetStateAction, ReactNode, RefObject } from "react";

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
    setIsModal: Dispatch<SetStateAction<boolean>>;
    setConsumedArray: Dispatch<SetStateAction<ConsumedArray[]>>;
};

export interface AppContextType {
    isModal: boolean;
    setIsModal: Dispatch<SetStateAction<boolean>>;
    isModalExercise: boolean;
    setIsModalExercise: Dispatch<SetStateAction<boolean>>;
    consumedArray: ConsumedArray[];
    setConsumedArray: Dispatch<SetStateAction<ConsumedArray[]>>;
    setBurnedArray: Dispatch<SetStateAction<BurnedArray[]>>;
    burnedArray: BurnedArray[];
}

export interface authorizationType {
    isLogged: boolean;
    setIsLogged: Dispatch<SetStateAction<boolean>>;
    loginArray: LoginType;
    setLoginArray: Dispatch<SetStateAction<LoginType>>;
    isLoginOpen: boolean;
    setIsLoginOpen: Dispatch<SetStateAction<boolean>>;
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
    setStringState?: Dispatch<SetStateAction<string>>;
    setNumberState?: Dispatch<SetStateAction<number>>;

    options?: string[];
}[];

export type ConsumedBoxProps = ConsumedItems[];

export type LoginType = {
    username: string;
    password: string;
};

export type UseClickOutsideProps = {
    ref: RefObject<HTMLElement>;
    setState: Dispatch<SetStateAction<boolean>>;
};

export type InfoDisplayProps = {
    name: string;
    unit?: string;
    val: ReactNode;
}[];
