import React, { useState } from "react";

const SearchInput = ({ onHandleInput }) => {
  const [searchWord, setSearchWord] = useState("");

  const searchInputHandler = (e) => {
    setSearchWord(e.target.value);
  };

  const searchHandler = (e) => {
    e.preventDefault();
    onHandleInput(searchWord);
  };

  return (
    <form onSubmit={searchHandler}>
      <input
        type="text"
        placeholder="search for Pc games"
        onChange={searchInputHandler}
        value={searchWord}
        className="max-[767px] w-full text-slate-950 border-4 font-serif bg-grayDark focus:outline-none focus:ring-2 focus:ring-blue-300 focus:rounded-sm md:w-full md:p-2 lg:p-0 lg:w-[28rem]"
      />
      <button className="hidden" type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchInput;
