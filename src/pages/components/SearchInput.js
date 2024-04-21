import React from "react";

const SearchInput = () => {
  return (
    <form>
      <input
        type="text"
        placeholder="search for Pc games"
        // onChange={searchInputHandler}
        // value={searchWord}
        className="max-[767px]:w-full text-slate-950 border-4 font-payback tracking-widest bg-grayDark focus:outline-none focus:ring-2 focus:ring-blue-300 focus:rounded-sm md:w-full md:p-2 lg:p-0 lg:w-[28rem]"
      />
    </form>
  );
};

export default SearchInput;
