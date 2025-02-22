import styles from "./OurCinemasSection.module.scss";
import CinemasCarousel from "../../components/CinemasCarousel/CinemasCarousel";

function OurCimenasSection() {
  return (
    <section className={styles.ourCimenasSection}>
      <div className="container">
        <h2 className={`${styles.title} text-primary-blue text-extraBold`}>
          Кожен зал – це унікальний простір для особливих вражень
        </h2>
        <div className={styles.ourCinemaContainer}>
          <CinemasCarousel />
        </div>
      </div>
    </section>
  );
}

export default OurCimenasSection;
