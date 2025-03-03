import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import styles from "./MovieCarousel.module.scss";
import Icon from "../../../components/Icon/Icon";
import hall1Image from "../../../assets/images/CinemaHall1.jpg";
import hall2Image from "../../../assets/images/CinemaHall2.jpg";
import hall3Image from "../../../assets/images/CinemaHall3.jpg";
import hall4Image from "../../../assets/images/CinemaHall4.jpg";
import { useNavigate } from "react-router-dom";

const movies = [
  {
    image: hall1Image,
    title: "Фільм 1",
    text: "Великий екран, розкішне зображення і звук, що захоплює.",
    sessions: [
      { id: 0, time: "13:30" },
      { id: 1, time: "14:25" },
      { id: 2, time: "16:20" },
      { id: 3, time: "17:20" },
      { id: 4, time: "19:15" },
      { id: 5, time: "20:10" },
    ],
    ganres: "Комедія, романтика",
    duration: "90",
    durationMeasure: "хв",
  },
  {
    image: hall2Image,
    title: "Фільм 2",
    text: "Інтимний зал для справжніх кіномеломанів.",
    sessions: [{ id: 6, time: "15:25" }],
    ganres: "Жахи",
    duration: "93",
    durationMeasure: "хв",
  },
  {
    image: hall3Image,
    title: "Фільм 3",
    text: "Мультимедійний простір для перегляду фільмів у 3D і IMAX.",
    sessions: [
      { id: 7, time: "15:10" },
      { id: 8, time: "18:15" },
      { id: 9, time: "20:05" },
    ],
    ganres: "Комедія",
    duration: "120",
    durationMeasure: "хв",
  },
  {
    image: hall4Image,
    title: "Фільм 4",
    text: "Ідеальний для сімейних вечорів та дитячих сеансів.",
    sessions: [{ id: 10, time: "19:35" }],
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
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <Carousel
      responsive={responsive}
      removeArrowOnDeviceType={["tablet", "mobile"]}
      containerClass={styles.carouselContainer}
      itemClass={styles.carouselItem}
      className={styles.container}
    >
      {movies.map((movie, index) => {
        return (
          <div key={index} className={styles.slide}>
            <div className={styles.bgContainer}>
              <div className={styles.scheduleContainer}>
                <p
                  className={`${styles.scheduleTitle} text-primary-blue text-bold`}
                >
                  Розклад сеансів
                </p>
                {movie.sessions.map((session) => {
                  return (
                    <span
                      className={styles.sessionTime}
                      key={session.id}
                      onClick={() => handleNavigate(`/sessions/${session.id}`)}
                    >
                      {session.time}
                    </span>
                  );
                })}
              </div>
              <div className={styles.shortInfo}>
                <div>
                  <p
                    className={styles.shortInfoTitle}
                    onClick={() => handleNavigate(`/${movie.title}`)}
                  >
                    {movie.title}{" "}
                  </p>
                  <div>
                    {movie.ganres} <br />
                    {`${movie.duration}, ${movie.durationMeasure}`}
                  </div>
                </div>
                <div
                  className={styles.movieInfo}
                  onClick={() => handleNavigate(`/${movie.title}`)}
                >
                  <Icon
                    icon="icon-info"
                    className={styles.movieInfoIcon}
                    w="32"
                    h="32"
                  />{" "}
                  <span className={styles.movieInfoText}>Про фільм</span>
                </div>
              </div>
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
