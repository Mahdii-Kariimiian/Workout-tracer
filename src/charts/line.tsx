import {
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
} from "chart.js";
import { FC } from "react";
import { Line } from "react-chartjs-2";
import { BurnedArray, ConsumedArray } from "../types";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);
type LineGraphProps = {
    array: ConsumedArray[] | BurnedArray[];
};

const LineGraph: FC<LineGraphProps> = ({ array }) => {
    console.log(array);
    const options = {};
    console.log(
        array.map((item) => {
            return item.sum;
        })
    );
    const lineData = {
        labels: array.map((item) => {
            return item.name;
        }),

        datasets: [
            {
                label: "Item",
                data: array.map((item) => {
                    return item.sum;
                }),
            },
        ],
    };
    return <Line options={options} data={lineData} />;
};

export default LineGraph;
