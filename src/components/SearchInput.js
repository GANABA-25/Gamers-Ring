import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../store/Auth-Context";
import Lottie from "lottie-react";
import axios from "axios";

import normalLoading from "../lottie/Animation - normalLoading.json";

const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  const { setFetchedGames, setFetchedGamesErrorMessage } = useUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      document.title = "Loading...";
    } else {
      document.title = "Gamers Ring";
    }
  }, [loading]);

  const searchInputHandler = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await axios.get(
        `http://localhost:8090/games/searchedGames/?searchedTerm=${searchTerm}&page=1`
      );
      const { searchedGames, totalPages } = response.data;
      if (response.status === 200) {
        setFetchedGames(searchedGames);
        navigate("/SearchResultPage");
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        const errorMessage = error.response.data;
        setFetchedGamesErrorMessage(errorMessage);
        navigate("/SearchResultPage");
      } else {
        console.error("An unexpected error occurred:", error);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={searchInputHandler}>
      <input
        type="text"
        placeholder="search for Pc games"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="max-[767px] w-full text-slate-950 border-4 font-serif bg-grayDark focus:outline-none focus:ring-2 focus:ring-blue-300 focus:rounded-sm md:w-full md:p-2 lg:p-0 lg:w-[28rem]"
      />
      <button className="hidden" type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchInput;
