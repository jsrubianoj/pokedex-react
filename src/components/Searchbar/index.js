import React, { useState } from "react";
import "../../styles.css";

const Searchbar = (props) => {
  const { onSearch } = props;
  const [search, setSearch] = useState("");

  const onChange = (e) => {
    setSearch(e.target.value);
    if (e.target.value.length === 0) {
      onSearch(null);
    }
  };

  const onClick = async () => {
    onSearch(search);
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearch(search);
    }
  };

  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <input
          type="text"
          placeholder="Buscar pokemon"
          value={search}
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
      </div>
      <div className="searchbar-btn">
        <button onClick={onClick}>
          Buscar
        </button>
      </div>
      
    </div>
  );
};

export default Searchbar;
