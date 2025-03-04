import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import styles from "./MovieCarousel.module.scss";

import { useEffect, useState } from "react";
import DateList from "./DateList";
import MoviesSessions from "./MovieSessions";
import MovieShortInfo from "./MovieShortInfo";

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

function MoviesCarousel({ movies }) {
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
      {movies.map((movie, id) => {
        return (
          <div key={id} className={styles.slide}>
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
