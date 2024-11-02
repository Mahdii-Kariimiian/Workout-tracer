import { ConsumedItems } from "../types";

type InfoCardProps = { props: ConsumedItems[]; children: string };

const InfoCard: React.FC<InfoCardProps> = ({ props, children }) => {
    return (
        <div className={children}>
            {props.map((item, index) => {
                return (
                    <div
                        className={`px-10 flex flex-1 justify-between items-center ${
                            index % 2 !== 0
                                ? "bg-gradientSecondary"
                                : "bg-gradientPrimary"
                        } `}
                    >
                        <div
                            className={`space-y-2 ${
                                index % 2 === 0
                                    ? "text-lightText"
                                    : "text-darkText"
                            }`}
                        >
                            <p className="text-lg font-agdasima">
                                {item.title}
                            </p>
                            <p className="font-josefin text-xl">
                                {item.quantity} {item.unit}
                            </p>
                        </div>
                        <p
                            className={`text-4xl ${
                                index % 2 !== 0
                                    ? "text-lightText"
                                    : "text-darkText"
                            }`}
                        >
                            <img
                                className="w-10"
                                src={item.icon}
                                alt={item.icon}
                            />
                        </p>
                    </div>
                );
            })}
        </div>
    );
};

export default InfoCard;
