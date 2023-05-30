import { useEffect } from "react";

const GamesByGenre = ({ gameList, selectedGenreName }) => {
  useEffect(() => {
    console.log("GameLIST", gameList);
  }, []);
  return (
    <div>
      <h2 className="font-bold text-[30px] dark:text-white text-slate-900 mt-5">
        {selectedGenreName} Games
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 mb-10">
        {gameList.map((item) => (
          <div
            className="bg-[#76a8f75e] p-3 rounded-lg pb-16 h-full hover:scale-110 duration-300 transition-all ease-in-out cursor-pointer"
            key={item.id}
          >
            <img
              className="w-full h-[80%] rounded-xl object-cover"
              src={item.background_image}
              alt="game"
            />
            <h2 className="text-[20px] font-bold text-slate-900 dark:text-white">
              {item.name}
              <span className="p-1 rounded-sm ml-2 text-[10px] bg-green-100 text-green-700 font-medium">
                {item.metacritic}
              </span>
            </h2>
            <h2 className="text-slate-900 dark:text-white">
              ⭐{item.rating} 💬{item.reviews_count} 🔥
              {item.suggestions_count}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GamesByGenre;
