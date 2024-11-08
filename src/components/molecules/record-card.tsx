import { FC } from "react";
import { CiSquareRemove } from "react-icons/ci";
import InfoDisplay from "../atoms/info-display";
import { RecordCardProps } from "../../types";

const RecordCard: FC<RecordCardProps> = ({
    handleEdit,
    handleRemove,
    data,
    title,
    date,
}) => {
    return (
        <div
            className="border border-bgHover rounded-lg px-5 py-3 mb-2 cursor-pointer hover:text-lightText hover:bg-bgHover transition-all hover:ease-in"
            onClick={handleEdit}
        >
            <div className="flex gap-3 items-baseline mb-2">
                <p className="text-xl font-josefin">{title}</p>
                <p className="text-[12px] font-josefin">{date}</p>
                <button
                    className="ml-auto cursor-pointer hover:bg-red-600 rounded-sm"
                    onClick={(e) => {
                        e.stopPropagation();
                        handleRemove && handleRemove();
                    }}
                >
                    <CiSquareRemove className="text-2xl" />
                </button>
            </div>
            <InfoDisplay props={data} />
        </div>
    );
};

export default RecordCard;
