import GlobalAPI from "../Services/GlobalAPI";
import { useEffect, useState } from "react";
function GenreList() {
  const [genreList, setGenreList] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const getGenreList = () => {
    GlobalAPI.getGenreList.then((resp) => {
      console.log(resp.data.results);
      setGenreList(resp.data.results);
    });
  };
  useEffect(() => {
    getGenreList();
  }, []);

  return (
    <div>
      <h2 className="text-[30px] font-bold dark:text-white text-gray-900">
        Genres
      </h2>
      {genreList.map((item, index) => (
        <div
          onClick={() => setActiveIndex(index)}
          key={item.id}
          className={`flex items-center gap-2 mb-2 cursor-pointer hover:bg-gray-300 p-2 rounded-lg hover:dark:bg-gray-600 group ${
            activeIndex == index ? "bg-gray-300 dark:bg-gray-600" : null
          }`}
        >
          <img
            className={`h-[40px] w-[40px] object-cover rounded-lg group-hover:scale-105 transition-all ease-out duration-300 ${
              activeIndex == index ? "scale-105" : null
            }`}
            src={item.image_background}
            alt="icon"
          />
          <h3
            className={`dark:text-white text-[18px]  text-black group-hover:scale-105 transition-all ease-out duration-300 group-hover:font-bold ${
              activeIndex == index ? "font-bold" : null
            }`}
          >
            {item.name}
          </h3>
        </div>
      ))}
    </div>
  );
}

export default GenreList;
