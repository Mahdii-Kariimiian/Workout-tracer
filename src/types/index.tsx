export type ConsumedArray = {
    name: string;
    carbs: number;
    fat: number;
    protein: number;
    sum: number;
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
    isModal?: boolean;
    setIsModal?: React.Dispatch<React.SetStateAction<boolean>>;
    isModalExercise: boolean;
    setIsModalExercise?: React.Dispatch<React.SetStateAction<boolean>>;
    consumedArray?: ConsumedArray[];
    setConsumedArray?: React.Dispatch<React.SetStateAction<ConsumedArray[]>>;
    setBurnedArray?: React.Dispatch<React.SetStateAction<BurnedArray[]>>;
    burnedArray: BurnedArray[];
}

export type ConsumedItems = {
    title: string;
    quantity: number;
    icon: React.ReactNode;
};

export type ConsumedBoxProps = ConsumedItems[];
