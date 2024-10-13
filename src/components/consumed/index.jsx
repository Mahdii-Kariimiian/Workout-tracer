import ConsumedBox from "../consumed/components/ConsumedBox";

const index = () => {
    const consumedArray = [
        { title: "Protein", quantity: "15/4", icon: "Protein" },
        { title: "Carbs", quantity: "15/4", icon: "Carbs" },
        { title: "Fat", quantity: "15/4", icon: "Fat" },
        { title: "Water", quantity: "15/4", icon: "Water" },
    ];

    return (
        <div className="grid grid-cols-2 h-full">
            <ConsumedBox />
            <ConsumedBox />
            <ConsumedBox />
            <ConsumedBox />
        </div>
    );
};

export default index;
