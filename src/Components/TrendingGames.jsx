import { useEffect } from "react";
const TrendingGames = ({ gameList }) => {
  useEffect(() => {
    console.log(gameList);
  }, [gameList]);
  return (
    <div className="mt-5">
      <h2 className="hidden md:block font-bold text-[30px] text-slate-900 dark:text-white mb-5">
        Trending Games
      </h2>
      <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 gap-4">
        {gameList.map(
          (item, index) =>
            index < 4 && (
              <div
                key={item.id}
                className="bg-[#76a8f75e] rounded-lg group hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer"
              >
                <img
                  className="h-[270px] rounded-t-lg object-cover"
                  src={item.background_image}
                  alt="image"
                />
                <h2 className="text-black dark:text-white text-[20px] font-bold p-2">
                  {item.name}
                </h2>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default TrendingGames;
