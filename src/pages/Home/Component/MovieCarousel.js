import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import styles from "./MovieCarousel.module.scss";
import hall1Image from "../../../assets/images/CinemaHall1.jpg";
import hall2Image from "../../../assets/images/CinemaHall2.jpg";
import hall3Image from "../../../assets/images/CinemaHall3.jpg";
import hall4Image from "../../../assets/images/CinemaHall4.jpg";
import { useEffect, useState } from "react";
import DateList from "./DateList";
import MoviesSessions from "./MovieSessions";
import MovieShortInfo from "./MovieShortInfo";

const movies = [
  {
    image: hall1Image,
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
    image: hall2Image,
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
    image: hall3Image,
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
    image: hall4Image,
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

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

function MoviesCarousel() {
  const [choosenDate, setChoosenDate] = useState("");

  useEffect(() => {
    // setChoosenDate(new Date().toISOString().split("T")[0]);
    //потрібно повернути прив'язку до поточної дати
    setChoosenDate(movies[0].sessions[0].date);
  }, []);

  return (
    <Carousel
      responsive={responsive}
      removeArrowOnDeviceType={["tablet", "mobile"]}
      containerClass={styles.carouselContainer}
      itemClass={styles.carouselItem}
    >
      {movies.map((movie, index) => {
        return (
          <div key={index} className={styles.slide}>
            <div className={styles.bgContainer}>
              <div className={styles.scheduleContainer}>
                <DateList
                  sessionsDates={movie.sessions}
                  setChoosenDate={(date) => setChoosenDate(date)}
                  choosenDate={choosenDate}
                />

                <MoviesSessions movie={movie} choosenDate={choosenDate} />
              </div>
              <MovieShortInfo movie={movie} />
            </div>
            <img className={styles.img} src={movie.image} alt={movie.title} />
            <div className={styles.caption}>
              <h3 className={styles.title}>{movie.title}</h3>
            </div>
          </div>
        );
      })}
    </Carousel>
  );
}

export default MoviesCarousel;
