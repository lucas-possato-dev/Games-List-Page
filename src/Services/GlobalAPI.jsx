import axios from "axios";
const key = "877e4aa33753437990fed684a046797a";
const axiosCreate = axios.create({
  baseURL: "https://api.rawg.io/api",
});

const getGenreList = axiosCreate.get("/genres?key=" + key);
const getAllGames = axiosCreate.get("games?key=" + key);
const getGameListByGenreId = (id) =>
  axiosCreate.get("/games?key=" + key + "&genres=" + id);

export default {
  getGenreList,
  getAllGames,
  getGameListByGenreId,
};
