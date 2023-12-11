import React, { InputHTMLAttributes, useRef, useState } from "react";
import { SearchBarWrapper, SearchInput } from "./styles";
import { ReactComponent as SearchIcon } from "../../assets/icons/icon-search.svg";

interface ISearchBarProps extends InputHTMLAttributes<HTMLInputElement> {
  onSubmitSearch?: (value: string) => void;
}

const SearchBar = ({ onSubmitSearch, ...rest }: ISearchBarProps) => {
  const [focused, setFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      if (onSubmitSearch) {
        onSubmitSearch(event.currentTarget.value);
      }
    }
    if (rest.onKeyDown) {
      rest.onKeyDown(event);
    }
  };

  return (
    <SearchBarWrapper
      onFocus={() => setFocused(true)}
      onBlur={() => {
        setFocused(false);
        if (onSubmitSearch && inputRef.current) {
          onSubmitSearch(inputRef.current.value);
        }
      }}
      focused={focused}
    >
      <SearchIcon width={24} height={24} />
      <SearchInput {...rest} onKeyDown={handleKeyDown} ref={inputRef} />
    </SearchBarWrapper>
  );
};

export default SearchBar;
