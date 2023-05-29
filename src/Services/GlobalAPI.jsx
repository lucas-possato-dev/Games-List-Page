import axios from "axios";
const key = "877e4aa33753437990fed684a046797a";
const axiosCreate = axios.create({
  baseURL: "https://api.rawg.io/api",
});

const getGenreList = axiosCreate.get("/genres?key=" + key);

export default {
  getGenreList,
};
