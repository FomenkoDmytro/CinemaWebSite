import { MovieCarousel } from "../../components/MovieCarousel";
import hall1Image from "../../assets/images/CinemaHall1.jpg";
import hall2Image from "../../assets/images/CinemaHall2.jpg";
import hall3Image from "../../assets/images/CinemaHall3.jpg";
import hall4Image from "../../assets/images/CinemaHall4.jpg";

const movies = [
  {
    id: 0,
    image: hall4Image,
    title: "Фільм 1",
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
    duration: "90",
    durationMeasure: "хв",
  },
  {
    id: 1,
    image: hall3Image,
    title: "Фільм 2",
    text: "Інтимний зал для справжніх кіномеломанів.",
    sessions: [
      {
        date: "2025-03-04",
        times: [{ id: 9, time: "13:30" }],
      },
      {
        date: "2025-03-05",
        times: [{ id: 10, time: "09:30" }],
      },
      {
        date: "2025-03-06",
        times: [{ id: 11, time: "11:30" }],
      },
    ],
    ganres: "Жахи",
    duration: "93",
    durationMeasure: "хв",
  },
  {
    id: 2,
    image: hall2Image,
    title: "Фільм 3",
    text: "Мультимедійний простір для перегляду фільмів у 3D і IMAX.",
    sessions: [
      {
        date: "2025-03-04",
        times: [
          { id: 12, time: "18:15" },
          { id: 13, time: "23:05" },
        ],
      },
      {
        date: "2025-03-05",
        times: [{ id: 14, time: "09:30" }],
      },
      {
        date: "2025-03-06",
        times: [{ id: 15, time: "11:30" }],
      },
    ],
    ganres: "Комедія",
    duration: "120",
    durationMeasure: "хв",
  },
  {
    id: 3,
    image: hall1Image,
    title: "Фільм 4",
    text: "Ідеальний для сімейних вечорів та дитячих сеансів.",
    sessions: [
      {
        date: "2025-03-04",
        times: [
          { id: 16, time: "09:35" },
          { id: 17, time: "12:00" },
          { id: 18, time: "13:05" },
          { id: 19, time: "14:20" },
          { id: 20, time: "15:45" },
          { id: 21, time: "16:40" },
          { id: 22, time: "19:35" },
          { id: 23, time: "20:00" },
          { id: 24, time: "23:02" },
        ],
      },
      {
        date: "2025-03-05",
        times: [{ id: 25, time: "09:30" }],
      },
      {
        date: "2025-03-06",
        times: [{ id: 26, time: "11:30" }],
      },
    ],
    ganres: "Екшн",
    duration: "45",
    durationMeasure: "хв",
  },
];

function Soon() {
  return (
    <div className="container">
      <MovieCarousel movies={movies} />
    </div>
  );
}

export default Soon;
