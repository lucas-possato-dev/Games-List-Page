import Banner from "../Components/Banner";
import GenreList from "../Components/GenreList";
import TrendingGames from "../Components/TrendingGames";
import GlobalAPI from "../Services/GlobalAPI";
import { useEffect, useState } from "react";
import GamesByGenre from "../Components/GamesByGenre";

const Home = () => {
  const [allGames, setAllGames] = useState([]);
  const [gameListByGenre, setGameListByGenre] = useState([]);
  const [selectedGenreName, setSelectedGenreName] = useState("Action");
  useEffect(() => {
    getAllGamesList();
    getGameListByGenreId(4);
  }, []);

  const getAllGamesList = () => {
    GlobalAPI.getAllGames.then((resp) => {
      setAllGames(resp.data.results);
    });
  };

  const getGameListByGenreId = (id) => {
    GlobalAPI.getGameListByGenreId(id).then((resp) => {
      setGameListByGenre(resp.data.results);
    });
  };
  return (
    <div className="grid grid-cols-4 px-4">
      <div className="hidden md:block">
        <GenreList
          genreId={(genreId) => getGameListByGenreId(genreId)}
          selectedGenreName={(name) => setSelectedGenreName(name)}
        />
      </div>
      <div className="col-span-4 md:col-span-3 p-4">
        {allGames?.length > 0 && gameListByGenre.length > 0 ? (
          <div className="min-h-screen">
            <Banner gameBanner={allGames[0]} />
            <TrendingGames gameList={allGames} />
            <GamesByGenre
              gameList={gameListByGenre}
              selectedGenreName={selectedGenreName}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Home;
