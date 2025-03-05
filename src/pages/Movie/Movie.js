import { useParams } from "react-router-dom";
import styles from "./Movie.module.scss";
import hall1Image from "../../assets/images/CinemaHall1.jpg";
import Info from "./Components/Info";
import Schedule from "./Components/Schedule";

const movie = {
  id: 0,
  image: hall1Image,
  title: "Фільм 1",
  starts: "2025-03-04",
  text: "Великий екран, розкішне зображення і звук, що захоплює.",
  sessions: [
    {
      date: "2025-03-04",
      times: [
        { id: 0, time: "13:30" },
        { id: 1, time: "14:25" },
        { id: 2, time: "16:20" },
        { id: 3, time: "17:20" },
        { id: 4, time: "19:15" },
        { id: 5, time: "20:10" },
      ],
    },
    {
      date: "2025-03-05",
      times: [{ id: 6, time: "13:30" }],
    },
    {
      date: "2025-03-06",
      times: [
        { id: 7, time: "11:30" },
        { id: 8, time: "20:22" },
      ],
    },
    {
      date: "2025-03-07",
      times: [
        { id: 7, time: "11:30" },
        { id: 8, time: "20:22" },
      ],
    },
    {
      date: "2025-03-08",
      times: [
        { id: 7, time: "11:30" },
        { id: 8, time: "20:22" },
      ],
    },
    {
      date: "2025-03-09",
      times: [
        { id: 7, time: "11:30" },
        { id: 8, time: "20:22" },
      ],
    },
  ],
  ganres: "Комедія, романтика",
  audience: "0+",
  actors: "Actor 1, Actor 2, Actor 3",
  producer: "producer 1",
  duration: "90",
  durationMeasure: "хв",
  language: "Українська",
  plot: "Майбутнє планети під загрозою, і лише два герої можуть урятувати людство! Легендарні Поркі Піг і Даффі Дак вирушають у відкритий космос, аби перемогти інопланетного лиходія, що задумав підірвати Землю. Адже єдина надія світу перед небезпекою – це порося і качур - герої Луні Тюнз!",
};

function Movie() {
  // заюзати для отримання інформації по фільму
  const params = useParams();
  return (
    <div className={`${styles.container} container`}>
      <Info movie={movie} />
      <Schedule sessions={movie.sessions} />
    </div>
  );
}

export default Movie;
