import { useEffect } from "react";
import { UseClickOutsideProps } from "../types";

const useClickOutside = ({ ref, setState }: UseClickOutsideProps) => {
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setState(false);
                console.log(ref);
                console.log(setState);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, setState]);
};

export default useClickOutside;
