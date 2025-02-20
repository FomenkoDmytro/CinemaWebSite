import CinemaHallCard from "../../components/CinemaHallCard/CinemaHallCard";
import styles from "./OurCinemasSection.module.scss";
import hall1Image from "../../assets/images/CinemaHall1.jpg";
import hall2Image from "../../assets/images/CinemaHall2.jpg";

function OurCimenasSection() {
  return (
    <section className={styles.ourCimenasSection}>
      <div className="container">
        <h2>Кожен зал – це унікальний простір для особливих вражень:</h2>
        <div className={styles.ourCinemaContainer}>
          <button>prev cinema</button>
          <ul>
            <li>
              <CinemaHallCard
                header="Зал 1:"
                text="Великі екрани, розкішне зображення і звук, що захоплює – для
              перегляду найочікуваніших новинок."
                image={hall2Image}
              />
            </li>
            <li>
              <CinemaHallCard
                header="Зал 2:"
                text="Інтимний зал для справжніх кіномеломанів, де кожен фільм стає
                подією."
                image={hall2Image}
              />
            </li>
            <li>
              <CinemaHallCard
                header="Зал 3:"
                text="Мультимедійний простір для перегляду фільмів в форматах 3D і
              IMAX, який перенесе вас у новий вимір."
                image={hall2Image}
              />
            </li>
            <li>
              <CinemaHallCard
                header="Зал 4:"
                text=" Ідеальний для сімейних вечорів та дитячих сеансів, де кожен
                знайде щось для себе."
                image={hall2Image}
              />
            </li>
          </ul>

          <button>next cinema</button>
        </div>
      </div>
    </section>
  );
}

export default OurCimenasSection;
