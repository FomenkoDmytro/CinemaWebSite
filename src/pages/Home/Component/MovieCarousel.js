import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import styles from "./MovieCarousel.module.scss";
import hall1Image from "../../../assets/images/CinemaHall1.jpg";
import hall2Image from "../../../assets/images/CinemaHall2.jpg";
import hall3Image from "../../../assets/images/CinemaHall3.jpg";
import hall4Image from "../../../assets/images/CinemaHall4.jpg";

const halls = [
  {
    image: hall1Image,
    title: "Зал 1",
    text: "Великий екран, розкішне зображення і звук, що захоплює.",
  },
  {
    image: hall2Image,
    title: "Зал 2",
    text: "Інтимний зал для справжніх кіномеломанів.",
  },
  {
    image: hall3Image,
    title: "Зал 3",
    text: "Мультимедійний простір для перегляду фільмів у 3D і IMAX.",
  },
  {
    image: hall4Image,
    title: "Зал 4",
    text: "Ідеальний для сімейних вечорів та дитячих сеансів.",
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

function MoviesCarousel() {
  return (
    <Carousel
      responsive={responsive}
      infinite={true}
      removeArrowOnDeviceType={["tablet", "mobile"]}
      containerClass={styles.carouselContainer}
      itemClass={styles.carouselItem}
      className={styles.container}
    >
      {halls.map((hall, index) => {
        return (
          <div key={index} className={styles.slide}>
            <img className={styles.img} src={hall.image} alt={hall.title} />
            <div className={styles.caption}>
              <h3 className={styles.title}>{hall.title}</h3>
            </div>
          </div>
        );
      })}
    </Carousel>
  );
}

export default MoviesCarousel;
