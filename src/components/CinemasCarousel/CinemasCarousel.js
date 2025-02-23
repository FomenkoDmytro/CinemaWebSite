import Carousel from "react-bootstrap/Carousel";

import styles from "./CinemasCarousel.module.scss";
import hall1Image from "../../assets/images/CinemaHall1.jpg";
import hall2Image from "../../assets/images/CinemaHall2.jpg";
import hall3Image from "../../assets/images/CinemaHall3.jpg";
import hall4Image from "../../assets/images/CinemaHall4.jpg";

function CinemasCarousel() {
  return (
    <Carousel data-bs-theme="light" className={styles.carouselContainer}>
      <Carousel.Item>
        <img
          className={`${styles.img} d-block w-100`}
          src={hall1Image}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className={styles.title}>Зал 1</h3>
          <p className={styles.text}>
            Великий екрани, розкішне зображення і звук, що захоплює – для
            перегляду найочікуваніших новинок.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={`${styles.img} d-block w-100`}
          src={hall2Image}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3 className={styles.title}>Зал 2</h3>
          <p className={styles.text}>
            Інтимний зал для справжніх кіномеломанів, де кожен фільм стає
            подією.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={`${styles.img} d-block w-100`}
          src={hall3Image}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5 className={styles.title}>Зал 3</h5>
          <p className={styles.text}>
            Мультимедійний простір для перегляду фільмів в форматах 3D і IMAX,
            який перенесе вас у новий вимір.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={`${styles.img} d-block w-100`}
          src={hall4Image}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5 className={styles.title}>Зал 4</h5>
          <p className={styles.text}>
            Ідеальний для сімейних вечорів та дитячих сеансів, де кожен знайде
            щось для себе.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CinemasCarousel;
