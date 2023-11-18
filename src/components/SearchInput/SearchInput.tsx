import React from "react";

import "./styles.less";

interface SearchInputProps {}

export const SearchInput: React.FC<SearchInputProps> = () => {
  return (
    <div className="search">
      <div className="search-input">
        <i className="search-input--icon fa-solid fa-magnifying-glass">x</i>
        <input
          className="search--input--input"
          type="text"
        />
      </div>
      <div className="search--dropdown">Vehicle v</div>
    </div>
  );
};
