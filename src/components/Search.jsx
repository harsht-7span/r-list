import React, { useCallback, useState } from "react";
import { debounce } from "lodash-es";

function Search({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");

  const debounceSearch = useCallback(
    debounce((query) => onSearch(query), 300),
    []
  );

  const handleSearch = async (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    debounceSearch(query);
  };

  return (
    <div className="r-list-search">
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Search...."
      />
    </div>
  );
}

export default Search;
