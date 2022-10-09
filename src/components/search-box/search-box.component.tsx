import "./search-box.styles.css";
import { ChangeEventHandler } from "react";

type SearchBoxProps = {
    className: string;
    placeholder?: string;
    onChangeHandler: ChangeEventHandler<HTMLInputElement>;
    // Alternative
    // onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
};

const SearchBox = ({
    className,
    placeholder,
    onChangeHandler,
}: SearchBoxProps) => (
    <input
        className={`search-box ${className}`}
        type="search"
        placeholder={placeholder}
        onChange={onChangeHandler}
    />
);

export default SearchBox;
