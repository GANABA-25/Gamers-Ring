import axios from "axios";

export const fetchPcGames = async (page) => {
  const platform = "Pc";
  const response = await axios.get(
    `http://localhost:8090/games/PcGames/${platform}?page=${page}`
  );

  const resData = response.data;

  return resData;
};

export const fetchPs3Games = async (page) => {
  const platform = "PlayStation 3";
  const response = await axios.get(
    `http://localhost:8090/games/ps3Games/${platform}?page=${page}`
  );

  const resData = response.data;

  return resData;
};

export const fetchPs4Games = async (page) => {
  const platform = "PlayStation 4";
  const response = await axios.get(
    `http://localhost:8090/games/ps4Games/${platform}?page=${page}`
  );

  const resData = response.data;

  return resData;
};

export const fetchPs5Games = async (page) => {
  const platform = "PlayStation 5";
  const response = await axios.get(
    `http://localhost:8090/games/ps5Games/${platform}?page=${page}`
  );

  const resData = response.data;

  return resData;
};
