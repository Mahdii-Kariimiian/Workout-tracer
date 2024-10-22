import { useEffect } from "react";
import { useClickOutsideProps } from "../../types";

const useClickOutside = ({ ref, setState }: useClickOutsideProps) => {
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setState(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, setState]);
};

export default useClickOutside;
